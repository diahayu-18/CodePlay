// ============================================================
// editor.js - logika utama halaman latihan
// Membutuhkan: variabel SOAL (dari latihan.php) dan fungsi di cek.js
// ============================================================

// ---- Referensi elemen halaman ----
const editor = {
  html: document.getElementById('kode-html'),
  css:  document.getElementById('kode-css'),
  js:   document.getElementById('kode-js')
};
const preview  = document.getElementById('preview');
const kotakCek = document.getElementById('hasil-cek');
const kotakAi  = document.getElementById('hasil-ai');
const tombolAi = document.getElementById('btn-ai');

// ---- Keadaan terakhir (juga dipakai oleh ai.js) ----
const keadaan = { hasil: [], errorJs: [] };
let sedangPeriksa = false;

// ---- 1) Gabungkan HTML + CSS + JS menjadi satu dokumen ----
function buatDokumen() {
  // Cegah kode siswa menutup tag script lebih awal
  const jsAman = editor.js.value.replace(/<\/script/gi, '<\\/script');

  return '<!DOCTYPE html><html><head><meta charset="UTF-8">' +
         '<style>' + editor.css.value + '</style>' +
         '<script>(' + skripPenguji.toString() + ')();</script>' +   // penguji dipasang dulu
         '</head><body>' + editor.html.value +
         '<script>' + jsAman + '</script>' +                          // JS siswa jalan terakhir
         '<!-- ' + Date.now() + ' --></body></html>';                 // komentar unik agar iframe selalu dimuat ulang
}

// ---- 2) Tombol Run: tampilkan hasil di iframe ----
function jalankan(setelahMuat) {
  keadaan.errorJs = [];
  if (setelahMuat) {
    preview.addEventListener('load', setelahMuat, { once: true });
  }
  preview.srcdoc = buatDokumen();
}

// ---- 3) Tombol Periksa: jalankan kode, lalu minta iframe memeriksa kriteria ----
function periksa() {
  sedangPeriksa = true;
  jalankan(function () {
    preview.contentWindow.postMessage({ tipe: 'cek', kriteria: SOAL.kriteria }, '*');
  });
}

// ---- 4) Terima pesan dari iframe ----
window.addEventListener('message', function (e) {
  if (e.source !== preview.contentWindow) return;   // abaikan pesan dari sumber lain
  const d = e.data;
  if (!d) return;

  if (d.tipe === 'error') {
    keadaan.errorJs.push(d.pesan);
    if (!sedangPeriksa) tampilkanError(keadaan.errorJs, kotakCek);
  }

  if (d.tipe === 'hasil') {
    sedangPeriksa = false;
    keadaan.hasil = d.hasil;
    tampilkanHasil(d.hasil, keadaan.errorJs, kotakCek);
    tombolAi.disabled = false;
    simpanJawaban(d.hasil);
  }
});

// ---- 5) Simpan hasil ke database lewat PHP ----
function simpanJawaban(hasil) {
  const jumlahLulus = hasil.filter(function (h) { return h.lulus; }).length;
  const lulus = hasil.length > 0 && jumlahLulus === hasil.length ? 1 : 0;
  const skor  = hasil.length ? Math.round(jumlahLulus / hasil.length * 100) : 0;

  fetch('api/simpan_jawaban.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      exercise_id: SOAL.id,
      kode_html: editor.html.value,
      kode_css:  editor.css.value,
      kode_js:   editor.js.value,
      lulus: lulus,
      skor: skor
    })
  }).catch(function (err) {
    console.error('Gagal menyimpan jawaban:', err);   // lihat di Console (F12)
  });
}

// ---- 6) Tab HTML / CSS / JavaScript ----
document.querySelectorAll('.tab').forEach(function (tab) {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('aktif'); });
    tab.classList.add('aktif');
    Object.keys(editor).forEach(function (bahasa) {
      editor[bahasa].classList.toggle('tampil', bahasa === tab.dataset.tab);
    });
  });
});

// ---- 7) Tombol Tab di keyboard menyisipkan spasi (bukan pindah fokus) ----
Object.values(editor).forEach(function (kotak) {
  kotak.addEventListener('keydown', function (ev) {
    if (ev.key === 'Tab') {
      ev.preventDefault();
      kotak.setRangeText('  ', kotak.selectionStart, kotak.selectionEnd, 'end');
    }
  });
});

// ---- 8) Tombol-tombol ----
document.getElementById('btn-run').addEventListener('click', function () {
  sedangPeriksa = false;
  kotakCek.textContent = 'Kode dijalankan. Tekan "Periksa Jawaban" untuk menilai.';
  jalankan();
});

document.getElementById('btn-periksa').addEventListener('click', periksa);

document.getElementById('btn-reset').addEventListener('click', function () {
  if (!confirm('Kembalikan kode ke kondisi awal?')) return;
  editor.html.value = SOAL.kode_html || '';
  editor.css.value  = SOAL.kode_css  || '';
  editor.js.value   = SOAL.kode_js   || '';
  keadaan.hasil = [];
  tombolAi.disabled = true;
  kotakCek.textContent = 'Tekan "Periksa Jawaban" untuk melihat hasilnya.';
  kotakAi.textContent = 'Periksa jawabanmu dulu, lalu minta bantuan AI jika masih bingung.';
  jalankan();
});

// ---- 9) Saat halaman dibuka: pilih tab sesuai bahasa soal, tampilkan preview awal ----
document.querySelector('.tab[data-tab="' + SOAL.bahasa + '"]').click();
jalankan();

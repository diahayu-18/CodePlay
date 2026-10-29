// ============================================================
// cek.js - pemeriksaan jawaban berdasarkan kriteria soal
//
// Kode siswa berjalan di dalam iframe ber-sandbox, sehingga halaman utama
// TIDAK boleh membaca isinya secara langsung. Solusinya:
//   1. fungsi skripPenguji() disisipkan ke dalam iframe
//   2. halaman utama mengirim pesan "cek" lewat postMessage
//   3. iframe memeriksa kriteria sendiri, lalu membalas dengan pesan "hasil"
// ============================================================

// PENTING: fungsi ini dijalankan DI DALAM iframe. Ia tidak bisa memakai
// variabel dari luar (misalnya SOAL atau editor), hanya yang ada di dalamnya.
function skripPenguji() {
  var logKonsol = [];
  var logAsli = console.log;

  // Catat semua console.log agar bisa dipakai untuk kriteria
  console.log = function () {
    logKonsol.push(Array.prototype.join.call(arguments, ' '));
    logAsli.apply(console, arguments);
  };

  // Laporkan error JavaScript siswa ke halaman utama
  window.addEventListener('error', function (e) {
    parent.postMessage({ tipe: 'error', pesan: e.message }, '*');
  });

  // Ubah nilai CSS (misal "red") ke bentuk hitungan browser (rgb(255, 0, 0))
  function nilaiCssHarapan(properti, nilai) {
    var bantu = document.createElement('div');
    document.body.appendChild(bantu);
    bantu.style.setProperty(properti, nilai);
    var hasil = getComputedStyle(bantu).getPropertyValue(properti);
    document.body.removeChild(bantu);
    return hasil;
  }

  // Periksa satu kriteria, kembalikan true / false
  function periksaSatu(k) {
    var el = k.selector ? document.querySelector(k.selector) : null;

    switch (k.tipe) {
      case 'ada_elemen':
        return !!el;

      case 'jumlah_elemen':
        return document.querySelectorAll(k.selector).length >= (k.minimal || 1);

      case 'teks_berisi':
        return !!el && el.textContent.toLowerCase().indexOf(String(k.nilai).toLowerCase()) !== -1;

      case 'atribut':
        if (!el) return false;
        return k.nilai === undefined ? el.hasAttribute(k.atribut) : el.getAttribute(k.atribut) === k.nilai;

      case 'css_properti':
        if (!el) return false;
        return getComputedStyle(el).getPropertyValue(k.properti) === nilaiCssHarapan(k.properti, k.nilai);

      case 'console_berisi':
        return logKonsol.join('\n').indexOf(k.nilai) !== -1;

      case 'klik_teks':   // klik elemen, lalu cek teks di elemen target
        if (!el) return false;
        el.click();
        var target = document.querySelector(k.target);
        return !!target && target.textContent.indexOf(k.nilai) !== -1;

      default:
        return false;     // tipe kriteria tidak dikenal
    }
  }

  window.addEventListener('message', function (e) {
    if (!e.data || e.data.tipe !== 'cek') return;

    var hasil = e.data.kriteria.map(function (k) {
      var lulus = false;
      try { lulus = periksaSatu(k); } catch (err) { lulus = false; }
      return { pesan: k.pesan, lulus: lulus };
    });

    parent.postMessage({ tipe: 'hasil', hasil: hasil }, '*');
  });
}

// Menampilkan daftar kriteria (lulus/gagal) ke halaman utama
function tampilkanHasil(hasil, errorJs, wadah) {
  wadah.innerHTML = '';

  var ul = document.createElement('ul');
  ul.className = 'daftar-cek';
  hasil.forEach(function (h) {
    var li = document.createElement('li');
    li.className = h.lulus ? 'lulus' : 'gagal';
    li.textContent = (h.lulus ? '✔ ' : '✘ ') + h.pesan;
    ul.appendChild(li);
  });
  wadah.appendChild(ul);

  errorJs.forEach(function (pesan) {
    var div = document.createElement('div');
    div.className = 'error-js';
    div.textContent = 'Error JavaScript: ' + pesan;
    wadah.appendChild(div);
  });

  var jumlahLulus = hasil.filter(function (h) { return h.lulus; }).length;
  var p = document.createElement('p');
  p.className = 'ringkasan';
  p.textContent = jumlahLulus === hasil.length
    ? 'Hebat! Semua kriteria terpenuhi (' + jumlahLulus + '/' + hasil.length + ').'
    : 'Terpenuhi ' + jumlahLulus + ' dari ' + hasil.length + ' kriteria.';
  wadah.appendChild(p);
}

// Menampilkan error JavaScript saja (saat siswa menekan Run)
function tampilkanError(errorJs, wadah) {
  wadah.innerHTML = '';
  errorJs.forEach(function (pesan) {
    var div = document.createElement('div');
    div.className = 'error-js';
    div.textContent = 'Error JavaScript: ' + pesan;
    wadah.appendChild(div);
  });
}

// ============================================================
// ai.js - meminta penjelasan kesalahan dari AI (lewat api/ai.php)
// Catatan: JavaScript TIDAK memegang API key. Semua lewat PHP.
// ============================================================

tombolAi.addEventListener('click', async function () {
  tombolAi.disabled = true;
  kotakAi.textContent = 'AI sedang membaca kodemu...';

  try {
    const respons = await fetch('api/ai.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        exercise_id: SOAL.id,
        kode_html: editor.html.value,
        kode_css:  editor.css.value,
        kode_js:   editor.js.value,
        gagal: keadaan.hasil.filter(function (h) { return !h.lulus; }).map(function (h) { return h.pesan; }),
        error_js: keadaan.errorJs
      })
    });

    // Jika baris ini error "Unexpected token", berarti PHP mengirim pesan error biasa
    // (bukan JSON). Buka F12 > tab Network > klik ai.php > tab Response untuk melihatnya.
    const data = await respons.json();
    kotakAi.textContent = data.penjelasan || data.error || 'AI tidak memberi jawaban.';
  } catch (err) {
    kotakAi.textContent = 'Gagal menghubungi AI: ' + err.message;
  }

  tombolAi.disabled = false;
});

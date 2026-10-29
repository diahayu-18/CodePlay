<?php
// Halaman latihan: editor + preview + pemeriksaan + AI
require __DIR__ . '/includes/koneksi.php';

// 1) Ambil id soal dari URL (?id=1), paksa menjadi angka
$id = (int)($_GET['id'] ?? 0);

// 2) Ambil data soal dengan prepared statement (aman dari SQL injection)
$stmt = $db->prepare('SELECT id, judul, bahasa, instruksi, kode_html, kode_css, kode_js, kriteria FROM exercises WHERE id = ?');
$stmt->bind_param('i', $id);
$stmt->execute();
$soal = $stmt->get_result()->fetch_assoc();

if (!$soal) {
    http_response_code(404);
    die('Latihan tidak ditemukan. <a href="index.php">Kembali ke daftar</a>');
}

// 3) Ubah teks JSON kriteria menjadi array
$kriteria = json_decode($soal['kriteria'], true) ?: [];

// 4) Data yang akan dikirim ke JavaScript
$dataJs = [
    'id'        => (int)$soal['id'],
    'bahasa'    => $soal['bahasa'],
    'kode_html' => $soal['kode_html'],
    'kode_css'  => $soal['kode_css'],
    'kode_js'   => $soal['kode_js'],
    'kriteria'  => $kriteria,
];

$judulHalaman = $soal['judul'];
require __DIR__ . '/includes/header.php';
?>
<main class="lab">

  <!-- ===== Kolom kiri: instruksi + editor ===== -->
  <section class="panel">
    <h2><?= e($soal['judul']) ?></h2>
    <div class="instruksi"><?= nl2br(e($soal['instruksi'])) ?></div>

    <div class="tab-bar">
      <button class="tab" data-tab="html">HTML</button>
      <button class="tab" data-tab="css">CSS</button>
      <button class="tab" data-tab="js">JavaScript</button>
    </div>

    <textarea id="kode-html" class="editor" spellcheck="false"><?= e($soal['kode_html']) ?></textarea>
    <textarea id="kode-css"  class="editor" spellcheck="false"><?= e($soal['kode_css']) ?></textarea>
    <textarea id="kode-js"   class="editor" spellcheck="false"><?= e($soal['kode_js']) ?></textarea>

    <div class="tombol-bar">
      <button id="btn-run" class="btn utama">▶ Run</button>
      <button id="btn-periksa" class="btn">✔ Periksa Jawaban</button>
      <button id="btn-ai" class="btn ai" disabled>Minta Bantuan AI</button>
      <button id="btn-reset" class="btn netral">↺ Reset</button>
    </div>
  </section>

  <!-- ===== Kolom kanan: preview + hasil ===== -->
  <section class="panel">
    <h3>Pratinjau</h3>
    <!-- sandbox: kode siswa berjalan terisolasi dari halaman utama -->
    <iframe id="preview" sandbox="allow-scripts" title="Pratinjau hasil kode"></iframe>

    <h3>Hasil Pemeriksaan</h3>
    <div id="hasil-cek" class="kotak">Tekan "Periksa Jawaban" untuk melihat hasilnya.</div>

    <h3>Bantuan AI</h3>
    <div id="hasil-ai" class="kotak">Periksa jawabanmu dulu, lalu minta bantuan AI jika masih bingung.</div>
  </section>
</main>

<!-- Kirim data soal dari PHP ke JavaScript (JSON_HEX_* mencegah kode merusak tag script) -->
<script>
  const SOAL = <?= json_encode($dataJs, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_UNESCAPED_UNICODE) ?>;
</script>
<script src="assets/js/cek.js"></script>
<script src="assets/js/editor.js"></script>
<script src="assets/js/ai.js"></script>
<?php require __DIR__ . '/includes/footer.php'; ?>

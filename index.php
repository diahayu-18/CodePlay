<?php
// Halaman daftar latihan
require __DIR__ . '/includes/koneksi.php';

$judulHalaman = 'Daftar Latihan';
$daftar = $db->query('SELECT id, judul, bahasa, tingkat FROM exercises ORDER BY id');

require __DIR__ . '/includes/header.php';
?>
<main class="kontainer">
  <h1>Pilih Latihan</h1>
  <p class="sub">Lengkapi kode, jalankan, dan pelajari kesalahanmu bersama AI.</p>

  <?php if ($daftar->num_rows === 0): ?>
    <p>Belum ada soal. Import database.sql lewat phpMyAdmin terlebih dahulu.</p>
  <?php endif; ?>

  <div class="grid-soal">
    <?php while ($baris = $daftar->fetch_assoc()): ?>
      <a class="kartu-soal" href="latihan.php?id=<?= (int)$baris['id'] ?>">
        <span class="lencana <?= e($baris['bahasa']) ?>"><?= strtoupper(e($baris['bahasa'])) ?></span>
        <h3><?= e($baris['judul']) ?></h3>
        <small>Tingkat: <?= e($baris['tingkat']) ?></small>
      </a>
    <?php endwhile; ?>
  </div>
</main>
<?php require __DIR__ . '/includes/footer.php'; ?>

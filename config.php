<?php
// ============================================================
// Salin file ini menjadi config.php, lalu isi sesuai komputermu.
// JANGAN pernah mengunggah config.php ke GitHub (berisi rahasia).
// ============================================================

// Database (pengaturan bawaan XAMPP)
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'codeplay');

// true = tampilkan pesan error lengkap (untuk belajar). Ubah ke false saat online.
define('APP_DEBUG', true);

// Pengaturan AI
define('ANTHROPIC_API_KEY', 'ISI_API_KEY_ANDA');
define('AI_MODEL', 'claude-haiku-5-5');   // cek daftar model terbaru di docs.claude.com
define('AI_BATAS_PER_JAM', 10);           // maksimal permintaan AI per pengunjung per jam

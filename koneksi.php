<?php
// Menyambungkan PHP ke MySQL. Dipanggil dengan require di setiap halaman.

$fileConfig = __DIR__ . '/../config.php';
if (!file_exists($fileConfig)) {
    die('File config.php belum ada. Salin config.example.php menjadi config.php, lalu isi pengaturannya.');
}
require_once $fileConfig;

// Saat belajar, tampilkan semua error PHP agar mudah dilacak
if (APP_DEBUG) {
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
}

// Buat error MySQL menjadi "exception" supaya bisa ditangkap dengan try/catch
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    $db->set_charset('utf8mb4');
} catch (mysqli_sql_exception $e) {
    die(APP_DEBUG ? 'Koneksi database gagal: ' . htmlspecialchars($e->getMessage()) : 'Koneksi database gagal.');
}

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Fungsi bantu: amankan teks sebelum dicetak ke HTML (mencegah XSS)
function e($teks) {
    return htmlspecialchars((string)$teks, ENT_QUOTES, 'UTF-8');
}

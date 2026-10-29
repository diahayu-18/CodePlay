<?php
// Menyimpan hasil pemeriksaan jawaban siswa ke tabel submissions
require __DIR__ . '/../includes/koneksi.php';
header('Content-Type: application/json; charset=utf-8');

function balas($data, $kode = 200) {
    http_response_code($kode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') balas(['error' => 'Metode harus POST'], 405);

// Baca data JSON yang dikirim JavaScript
$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) balas(['error' => 'Data tidak valid'], 400);

$idSoal = (int)($data['exercise_id'] ?? 0);
$html   = mb_substr((string)($data['kode_html'] ?? ''), 0, 10000);
$css    = mb_substr((string)($data['kode_css'] ?? ''), 0, 10000);
$js     = mb_substr((string)($data['kode_js'] ?? ''), 0, 10000);
$lulus  = empty($data['lulus']) ? 0 : 1;
$skor   = max(0, min(100, (int)($data['skor'] ?? 0)));
$userId = $_SESSION['user_id'] ?? null;   // kosong sampai fitur login dibuat

try {
    $stmt = $db->prepare('INSERT INTO submissions (user_id, exercise_id, kode_html, kode_css, kode_js, lulus, skor) VALUES (?, ?, ?, ?, ?, ?, ?)');
    $stmt->bind_param('iisssii', $userId, $idSoal, $html, $css, $js, $lulus, $skor);
    $stmt->execute();
    balas(['ok' => true]);
} catch (mysqli_sql_exception $ex) {
    balas(['error' => APP_DEBUG ? $ex->getMessage() : 'Gagal menyimpan'], 400);
}

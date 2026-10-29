-- ============================================================
-- CodePlay - struktur database + contoh soal
-- Cara pakai: buka phpMyAdmin > tab Import > pilih file ini
-- ============================================================
CREATE DATABASE IF NOT EXISTS codeplay CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE codeplay;

-- Pengguna (dipakai nanti saat fitur login dibuat)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  peran ENUM('siswa','guru') NOT NULL DEFAULT 'siswa',
  dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Soal latihan. Kolom "kriteria" berisi JSON (disimpan sebagai TEXT agar aman di XAMPP lama)
CREATE TABLE IF NOT EXISTS exercises (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(150) NOT NULL,
  bahasa ENUM('html','css','js') NOT NULL,
  tingkat ENUM('mudah','sedang','sulit') NOT NULL DEFAULT 'mudah',
  instruksi TEXT NOT NULL,
  kode_html TEXT,
  kode_css TEXT,
  kode_js TEXT,
  kriteria TEXT NOT NULL,
  dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Riwayat jawaban siswa (user_id boleh kosong = pengunjung tanpa login)
CREATE TABLE IF NOT EXISTS submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  exercise_id INT NOT NULL,
  kode_html TEXT,
  kode_css TEXT,
  kode_js TEXT,
  lulus TINYINT(1) NOT NULL DEFAULT 0,
  skor INT NOT NULL DEFAULT 0,
  dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (exercise_id) REFERENCES exercises(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Riwayat bantuan AI (juga dipakai untuk membatasi jumlah permintaan per jam)
CREATE TABLE IF NOT EXISTS ai_hints (
  id INT AUTO_INCREMENT PRIMARY KEY,
  exercise_id INT NOT NULL,
  session_key VARCHAR(128) NOT NULL,
  penjelasan TEXT NOT NULL,
  dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX (session_key, dibuat_pada),
  FOREIGN KEY (exercise_id) REFERENCES exercises(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ===================== CONTOH SOAL =====================
INSERT INTO exercises (judul, bahasa, tingkat, instruksi, kode_html, kode_css, kode_js, kriteria) VALUES
(
 'Judul dan Paragraf', 'html', 'mudah',
 'Lengkapi tag <h1> agar berisi teks "Halo CodePlay", lalu tambahkan satu paragraf <p> di bawahnya.',
 '<h1>___</h1>\n<!-- Tambahkan paragraf <p> di bawah ini -->\n',
 '', '',
 '[{"tipe":"ada_elemen","selector":"h1","pesan":"Harus ada judul <h1>"},{"tipe":"teks_berisi","selector":"h1","nilai":"Halo CodePlay","pesan":"Judul <h1> harus berisi teks Halo CodePlay"},{"tipe":"ada_elemen","selector":"p","pesan":"Harus ada paragraf <p>"}]'
),
(
 'Mewarnai Judul', 'css', 'mudah',
 'Ubah warna judul menjadi merah (red) dan ukuran hurufnya menjadi 40px dengan melengkapi bagian ___.',
 '<h1>Selamat Datang</h1>',
 'h1 {\n  color: ___;\n  font-size: ___;\n}',
 '',
 '[{"tipe":"css_properti","selector":"h1","properti":"color","nilai":"red","pesan":"Warna judul harus merah"},{"tipe":"css_properti","selector":"h1","properti":"font-size","nilai":"40px","pesan":"Ukuran huruf judul harus 40px"}]'
),
(
 'Tombol Interaktif', 'js', 'sedang',
 'Lengkapi kode agar saat tombol diklik, paragraf dengan id "hasil" berisi teks "Halo dari JavaScript".',
 '<button id="tombol">Klik Saya</button>\n<p id="hasil"></p>',
 '',
 'const tombol = document.getElementById("tombol");\n\ntombol.addEventListener("click", function () {\n  document.getElementById("hasil").textContent = ___;\n});',
 '[{"tipe":"klik_teks","selector":"#tombol","target":"#hasil","nilai":"Halo dari JavaScript","pesan":"Setelah tombol diklik, paragraf #hasil harus berisi Halo dari JavaScript"}]'
);

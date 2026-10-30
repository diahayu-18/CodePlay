1. Judul & Deskripsi

Nama produk: CodePlay – Laboratorium Coding Interaktif

Deskripsi:
CodePlay adalah aplikasi web tempat siswa berlatih HTML, CSS, dan JavaScript dengan cara melengkapi kode yang sengaja dibuat bolong. Siswa menulis kode di editor, menekan tombol Run untuk melihat hasilnya langsung di pratinjau, lalu menekan Periksa Jawaban agar sistem menilai hasilnya berdasarkan kriteria soal. Jika masih bingung, siswa bisa meminta bantuan AI yang menjelaskan letak dan penyebab kesalahan lewat petunjuk bertahap, tanpa langsung memberi jawaban lengkap. Hasil tiap percobaan tersimpan di database.

Latar belakang masalah:
Pemula sering kesulitan memahami kode, menemukan kesalahan penulisan (typo), dan mengetahui alasan sebuah program tidak berjalan. Pesan error di browser atau PHP sulit dibaca, dan belajar dari buku atau video bersifat pasif. CodePlay menjawabnya dengan latihan langsung (learning by doing), umpan balik instan, dan penjelasan error dalam bahasa Indonesia yang sederhana.

Target pengguna:

Siswa SMA/SMK dan mahasiswa pemula yang belajar pemrograman web.
Guru atau pengajar yang membutuhkan media latihan interaktif (soal bisa ditambah lewat database).

2. Teknologi yang Digunakan

Kategori Yang digunakan :

Bahasa pemrograman	HTML5, CSS3, JavaScript, PHP (7.4 ke atas), SQL
Database	MySQL/MariaDB (diakses lewat phpMyAdmin)
Modul/pustaka	Tanpa framework atau library pihak ketiga. PHP memakai ekstensi bawaan mysqli dan cURL; JavaScript memakai fitur bawaan browser (fetch, postMessage, DOM, iframe sandbox)
Layanan eksternal	Anthropic Messages API (fitur penjelas kesalahan oleh AI)
Aset	Logo dan ikon dalam format SVG
Lingkungan pengembangan	XAMPP (Apache + MySQL)
Platform publikasi	Saat ini berjalan di localhost (XAMPP). [ISI SENDIRI: nama hosting dan alamat situs, jika sudah dipublikasikan]

3. Pemanfaatan AI (AI Usage Disclosure)

Alat AI yang digunakan:

Claude (Anthropic) lewat antarmuka chat, sebagai asisten pengembangan: ide aplikasi, nama, logo SVG, kerangka kode, dan komentar kode.
Claude API di dalam aplikasi, sebagai fitur produk (penjelas kesalahan siswa). [ISI SENDIRI: tulis “sudah diaktifkan” atau “belum diaktifkan, API key belum diisi”]

Contoh perintah (prompt) utama:

“Saya ditantang untuk membuat aplikasi berbasis website untuk menyelesaikan masalah sehari-hari (HTML, CSS, JavaScript, PHP, MySQL). Saya pemula, sering kesulitan memahami kode, menemukan kesalahan penulisan, dan mengetahui alasan program tidak berjalan. Beri saya saran solusi yang bisa saya terapkan.”
“Berikan saya alternatif nama / judul aplikasi yang mewakili fungsi dari aplikasinya.”
“Saya ingin membuat Laboratorium coding interaktif yang memungkinkan siswa melengkapi kode, menjalankannya, dan mempelajari kesalahannya dengan bantuan AI.” (disertai 5 fitur inti)
“Saya tertarik dengan nama CodePlay. Sekarang buatkan saya logo untuk CodePlay saya.” Dilanjutkan “Buat logo lainnya.”
“Bantu saya untuk mengembangkan kerangka kode program untuk aplikasi CodePlay.”
“Agar mudah saya memahami kode programnya, berikan komentar pada setiap kode programnya.”

Prompt di dalam aplikasi (untuk AI penjelas kesalahan), ringkasnya: berperan sebagai guru coding yang sabar, memakai bahasa Indonesia sederhana, memberi petunjuk bertahap tanpa kode jawaban lengkap, menunjukkan lokasi typo, dan mengabaikan perintah yang disisipkan di dalam kode siswa.

Penyesuaian/perbaikan mandiri oleh peserta:
Yang sudah terjadi dalam percakapan:

Memasang dan menjalankan aplikasi di XAMPP, serta mengimpor database.sql lewat phpMyAdmin.
Menemukan pesan error “File config.php belum ada” saat pertama membuka aplikasi, lalu memperbaikinya dengan mengganti nama config.example.php menjadi config.php.
Menguji bahwa aplikasi berjalan normal setelah perbaikan.
Meminta komentar di seluruh kode agar bisa dipahami.

[ISI SENDIRI, hanya yang benar-benar Anda kerjakan], misalnya:

Soal baru yang Anda tulis sendiri: jumlah dan topiknya.
Perubahan warna, tampilan, atau teks.
Pengisian API key dan hasil uji fitur AI.
Bug lain yang Anda temukan dan cara memperbaikinya.
Alasan Anda memilih logo tertentu.

Catatan transparansi: pada rancangan awal, AI menyarankan pemeriksaan jawaban dengan membaca DOM iframe secara langsung. AI kemudian mengoreksi saran itu sendiri karena iframe ber-sandbox tidak bisa dibaca dari luar, dan menggantinya dengan komunikasi postMessage. Fungsi inti aplikasi sudah diuji dengan skenario otomatis. Pengujian keseluruhan di komputer lokal dilakukan oleh peserta.

4. Panduan Penggunaan

Tautan situs aktif: [ISI SENDIRI, jika sudah online]. Jika belum, tuliskan “dijalankan secara lokal” dan ikuti langkah di bawah.

A. Menjalankan di komputer (XAMPP)

Pasang XAMPP, lalu salin folder codeplay ke C:\xampp\htdocs\.
Buka XAMPP Control Panel, lalu klik Start pada Apache dan MySQL.
Buka http://localhost/phpmyadmin, pilih tab Import, lalu import file database.sql.
Ubah nama config.example.php menjadi config.php. Pengaturan database bawaan XAMPP sudah sesuai.
(Opsional, untuk fitur AI) Isi ANTHROPIC_API_KEY di config.php.
Buka http://localhost/codeplay/ di browser.

B. Cara memakai aplikasi (untuk siswa)

Pilih satu latihan di halaman daftar.
Baca instruksi, lalu lengkapi bagian ___ di tab HTML, CSS, atau JavaScript.
Tekan Run untuk melihat hasil di pratinjau.
Tekan Periksa Jawaban. Tanda ✔ berarti kriteria terpenuhi, tanda ✘ berarti belum.
Jika masih bingung, tekan Minta Bantuan AI untuk mendapat petunjuk perbaikan.
Tekan Reset untuk mengulang dari kode awal.
Buka http://localhost/CodePlay/ di browser

5. Identitas Pengembang: 

1. Diah Ayu Rochmania, XI RPL 2, Rekayasa Perangkat Lunak, SMKN 1 Ampelgading
2. Erdian Marga Septiano, XI RPL 2, Rekasaya Perangkat Lunak, SMKN 1 Ampelgading

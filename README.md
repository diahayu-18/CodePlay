# 🎮 CodePlay — Laboratorium Coding Interaktif

> Belajar HTML, CSS, dan JavaScript dengan praktik langsung, umpan balik instan, dan bantuan AI.

## 📌 Tentang CodePlay
<img width="943" height="529" alt="image" src="https://github.com/user-attachments/assets/202bbba6-156b-4e55-89ee-0ce2eafcc71b" />


**CodePlay** adalah aplikasi web pembelajaran pemrograman yang membantu siswa berlatih HTML, CSS, dan JavaScript dengan melengkapi potongan kode yang sengaja dikosongkan.

Pengguna dapat menulis kode melalui editor, menjalankannya, lalu melihat hasilnya secara langsung pada area pratinjau. Setelah itu, tombol **Periksa Jawaban** membantu memeriksa apakah kode sudah memenuhi kriteria latihan. Jika mengalami kesulitan, pengguna dapat meminta bantuan AI untuk memperoleh petunjuk secara bertahap—bukan langsung diberikan jawaban lengkap.

Hasil setiap percobaan dirancang untuk disimpan ke database.

### 🎯 Latar Belakang

Pemula sering mengalami kesulitan saat:
- Memahami fungsi dan cara kerja kode.
- Menemukan kesalahan penulisan (*typo*) pada program.
- Mengetahui penyebab program tidak berjalan.
- Memahami pesan kesalahan dari browser atau PHP.

Belajar hanya melalui buku atau video juga cenderung kurang memberi kesempatan untuk mencoba secara langsung. CodePlay menawarkan pendekatan **learning by doing**, umpan balik instan, serta penjelasan kesalahan menggunakan bahasa Indonesia yang sederhana.

### 👥 Target Pengguna

- Siswa SMA/SMK dan mahasiswa pemula yang sedang mempelajari pemrograman web.
- Guru atau pengajar yang membutuhkan media latihan pemrograman interaktif. Soal latihan dapat ditambahkan melalui database.

## ✨ Fitur Utama

- 🧩 **Latihan melengkapi kode** — lengkapi bagian kode HTML, CSS, atau JavaScript yang masih kosong.
- ▶️ **Jalankan kode** — lihat hasil program secara langsung melalui pratinjau.
- ✅ **Periksa jawaban** — ketahui apakah kode sudah memenuhi kriteria latihan.
- 🤖 **Bantuan AI bertahap** — dapatkan petunjuk untuk menemukan dan memperbaiki kesalahan tanpa langsung menerima jawaban lengkap.
- 💾 **Penyimpanan hasil percobaan** — hasil latihan disimpan ke database.

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi/Keterangan |
|---|---|
| 💻 Bahasa pemrograman | HTML5, CSS3, JavaScript, PHP 7.4 ke atas, dan SQL |
| 🗄️ Database | MySQL/MariaDB, dikelola melalui phpMyAdmin |
| 📦 Modul/pustaka | Tanpa framework atau library pihak ketiga. PHP menggunakan ekstensi bawaan `mysqli` dan `cURL`; JavaScript menggunakan fitur browser seperti `fetch`, `postMessage`, DOM, dan `iframe sandbox` |
| 🤖 Layanan AI | Anthropic Messages API untuk fitur penjelasan kesalahan |
| 🎨 Aset | Logo dan ikon berformat SVG |
| ⚙️ Lingkungan pengembangan | XAMPP (Apache dan MySQL) |
| 🌐 Platform publikasi | Saat ini dijalankan secara lokal melalui XAMPP. Jika sudah dipublikasikan, tambahkan nama hosting dan alamat situs di sini. |

## 🤖 Pemanfaatan AI (*AI Usage Disclosure*)

### AI yang Digunakan

- **Claude (Anthropic) melalui antarmuka chat** digunakan sebagai asisten pengembangan, antara lain untuk mencari ide aplikasi, menentukan nama, membuat logo SVG, menyusun kerangka kode, dan menambahkan komentar pada kode.
- **Claude API di dalam aplikasi** dirancang sebagai fitur bantuan yang menjelaskan kesalahan siswa.  
  **Status integrasi API:** `[ISI: sudah diaktifkan / belum diaktifkan karena API key belum diisi]`

### 💬 Contoh Prompt selama Pengembangan

Berikut beberapa contoh prompt yang digunakan:

1. “Saya ditantang untuk membuat aplikasi berbasis website untuk menyelesaikan masalah sehari-hari (HTML, CSS, JavaScript, PHP, MySQL). Saya pemula, sering kesulitan memahami kode, menemukan kesalahan penulisan, dan mengetahui alasan program tidak berjalan. Beri saya saran solusi yang bisa saya terapkan.”
2. “Berikan saya alternatif nama atau judul aplikasi yang mewakili fungsi dari aplikasinya.”
3. “Saya ingin membuat laboratorium coding interaktif yang memungkinkan siswa melengkapi kode, menjalankannya, dan mempelajari kesalahannya dengan bantuan AI.”
4. “Saya tertarik dengan nama CodePlay. Sekarang buatkan saya logo untuk CodePlay.”
5. “Bantu saya mengembangkan kerangka kode program untuk aplikasi CodePlay.”
6. “Agar mudah memahami kode programnya, berikan komentar pada setiap bagian kode.”

### 🧑‍🏫 Peran AI di dalam Aplikasi

AI diarahkan untuk berperan sebagai guru coding yang sabar. AI menggunakan bahasa Indonesia yang sederhana, memberikan petunjuk secara bertahap, menunjukkan lokasi kesalahan penulisan, dan tidak langsung memberikan seluruh kode jawaban. AI juga diarahkan untuk mengabaikan instruksi yang mungkin disisipkan di dalam kode siswa.

### 🔧 Penyesuaian dan Perbaikan oleh Pengembang

Hal-hal yang telah dilakukan selama pengembangan:

- Menjalankan aplikasi menggunakan XAMPP.
- Mengimpor `database.sql` melalui phpMyAdmin.
- Memperbaiki pesan error **“File config.php belum ada”** dengan mengganti nama `config.example.php` menjadi `config.php`.
- Menguji kembali aplikasi setelah perbaikan dan memastikan aplikasi berjalan normal.
- Meminta penambahan komentar pada kode agar lebih mudah dipahami.

**Tambahkan pengalaman pengembangan yang benar-benar dilakukan:**
- 📝 Soal baru yang dibuat sendiri: `[ISI jumlah dan topik soal]`
- 🎨 Perubahan tampilan, warna, atau teks: `[ISI jika ada]`
- 🔑 Pengisian API key dan hasil pengujian fitur AI: `[ISI jika ada]`
- 🐛 Bug lain yang ditemukan dan cara memperbaikinya: `[ISI jika ada]`
- 🖼️ Alasan memilih logo tertentu: `[ISI jika ada]`

### 🔍 Catatan Transparansi

Pada rancangan awal, AI menyarankan pemeriksaan jawaban dengan membaca DOM `iframe` secara langsung. Saran tersebut kemudian diperbaiki karena `iframe` dengan atribut sandbox tidak dapat dibaca secara langsung dari luar. Solusi yang digunakan adalah komunikasi melalui `postMessage`.

Fungsi inti aplikasi telah diuji menggunakan skenario otomatis. Pengujian aplikasi secara keseluruhan di komputer lokal dilakukan oleh peserta/pengembang.

## 🚀 Panduan Instalasi dan Penggunaan

### 💻 A. Menjalankan Aplikasi di Komputer (XAMPP)

**Persiapan:** pastikan XAMPP sudah terpasang di komputer.

1. 📁 Salin folder `codeplay` ke direktori `C:\xampp\htdocs\`.
2. ⚙️ Buka **XAMPP Control Panel**, kemudian klik **Start** pada Apache dan MySQL.
3. 🗄️ Buka [http://localhost/phpmyadmin](http://localhost/phpmyadmin), pilih tab **Import**, lalu impor file `database.sql`.
4. 🛠️ Ubah nama file `config.example.php` menjadi `config.php`.
5. 🤖 *(Opsional)* Untuk mengaktifkan fitur AI, isi nilai `ANTHROPIC_API_KEY` pada file `config.php`.
6. 🌐 Buka aplikasi melalui browser: [http://localhost/codeplay/](http://localhost/codeplay/).

> **Catatan:** Pengaturan database bawaan XAMPP digunakan sebagai konfigurasi awal. Sesuaikan konfigurasi jika pengaturan lokal Anda berbeda. Jangan mengunggah API key atau kata sandi database ke repositori publik GitHub.

### 📖 B. Cara Menggunakan CodePlay (Siswa)

1. 🧩 Pilih salah satu latihan dari halaman daftar latihan.
2. 📚 Baca instruksi, kemudian lengkapi bagian kode yang ditandai `___` pada tab HTML, CSS, atau JavaScript.
3. ▶️ Tekan tombol **Run** untuk melihat hasil kode pada area pratinjau.
4. ✅ Tekan **Periksa Jawaban** untuk memeriksa hasil. Tanda ✔ menunjukkan kriteria terpenuhi, sedangkan tanda ✘ menunjukkan kriteria belum terpenuhi.
5. 🤖 Jika masih mengalami kesulitan, tekan **Minta Bantuan AI** untuk memperoleh petunjuk perbaikan.
6. 🔄 Tekan **Reset** untuk mengembalikan kode ke kondisi awal latihan.

## 👨‍💻 Identitas Pengembang

| No. | Nama | Kelas | Kompetensi Keahlian | Sekolah |
|---:|---|---|---|---|
| 1 | Diah Ayu Rochmania | XI RPL 2 | Rekayasa Perangkat Lunak | SMKN 1 Ampelgading |
| 2 | Erdian Marga Septiano | XI RPL 2 | Rekayasa Perangkat Lunak | SMKN 1 Ampelgading |

---

<div align="center">

**🎮 CodePlay — Belajar Coding dengan Mencoba, Memahami, dan Memperbaiki.**

Dibuat sebagai media latihan pemrograman web yang interaktif.

</div>

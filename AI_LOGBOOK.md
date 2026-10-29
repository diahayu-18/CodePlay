1. Eksplorasi Ide & Perancangan Solusi

(saya)
saya ditantang untuk membuat aplikasi berbasis website untuk menyelesaikan masalah sehari-hari, teknologi yang saya gunakan adalah HTML, CSS, Javascript, PHP, dan Mysql. saya pemula sering kesulitan memahami kode, menemukan kesalahan penulisan, dan mengetahui alasan suatu program tidak berjalan. beri saya saran solusi uang bisa saya terapkan melalui pembuatan aplikasi

(AI Claude)
Tantangan yang bagus, dan menariknya, masalah yang Anda alami sebagai pemula (sulit memahami kode, sulit menemukan typo, bingung kenapa program tidak jalan) bisa menjadi ide aplikasinya sendiri. Berikut beberapa saran, dari yang paling relevan dengan pengalaman Anda sampai yang umum.

## Ide yang lahir dari masalah Anda sendiri

**1. Catatan Error Pribadi (Bug Journal)**
Aplikasi tempat Anda mencatat setiap error yang pernah ditemui: pesan error, penyebab, cara memperbaiki, dan kode sebelum/sesudah. Fitur pencarian dan tag (misalnya "PHP", "SQL", "CSS") membuat Anda tidak mengulang kesalahan yang sama. Ini sangat cocok untuk pemula karena CRUD-nya sederhana, tapi manfaatnya nyata.

**2. Kamus Kode dan Snippet Pribadi**
Tempat menyimpan potongan kode beserta penjelasan dengan bahasa Anda sendiri. Misalnya, kode `mysqli_query()` disertai catatan "dipakai untuk menjalankan perintah SQL". Menulis penjelasan sendiri adalah cara belajar yang efektif.

**3. Checklist Debugging Interaktif**
Halaman berisi langkah-langkah pengecekan saat program tidak jalan, misalnya "Apakah Apache dan MySQL sudah aktif? Apakah nama database benar? Apakah ada titik koma yang terlewat?" Pengguna mencentang satu per satu dan sistem memberi petunjuk berikutnya. Anda bisa menyimpan daftar masalah umum di MySQL.

## Ide untuk masalah sehari-hari umum

- **Pencatat keuangan harian**: input pemasukan/pengeluaran, rekap bulanan, kategori.
- **Manajemen tugas (to-do) dengan deadline**: cocok untuk pelajar/mahasiswa.
- **Jadwal piket atau iuran RT/kelas**: mencatat siapa sudah bayar dan siapa belum.
- **Pencatat stok warung/toko kecil**: barang masuk, keluar, dan peringatan stok menipis.
- **Pengingat jadwal minum obat atau servis kendaraan**.

## Rekomendasi saya

Untuk pemula, saya sarankan **Bug Journal (ide 1)** atau **pencatat keuangan harian**. Alasannya:

- Strukturnya sederhana: 1 sampai 2 tabel MySQL.
- Mencakup semua teknologi Anda: form HTML, tampilan CSS, validasi JavaScript, proses PHP, penyimpanan MySQL.
- Fitur inti (Create, Read, Update, Delete) adalah fondasi hampir semua aplikasi web.

## Tips mengatasi kesulitan Anda saat membuat

**Memahami kode**
- Bangun fitur satu per satu, jangan sekaligus. Mulai dari form saja, lalu simpan ke database, lalu tampilkan data.
- Beri komentar pada setiap blok kode dengan bahasa sendiri.

**Menemukan kesalahan penulisan**
- Gunakan editor seperti VS Code; ia menandai tanda kurung atau kutip yang tidak berpasangan.
- Aktifkan tampilan error PHP saat pengembangan:
  ```php
  ini_set('display_errors', 1);
  error_reporting(E_ALL);
  ```
- Baca pesan error dari bawah ke atas dan perhatikan nomor barisnya; biasanya kesalahan ada di baris tersebut atau sebelumnya.

**Mengetahui kenapa program tidak jalan**
- Buka Console browser (tekan F12) untuk melihat error JavaScript.
- Gunakan `var_dump($variabel);` atau `echo` di PHP untuk memeriksa isi data.
- Cek `if (!$koneksi) { die(mysqli_connect_error()); }` untuk memastikan koneksi database berhasil.
- Uji query SQL langsung di phpMyAdmin sebelum memasukkannya ke PHP.

## Langkah selanjutnya

Kalau Anda sudah memilih satu ide, saya bisa bantu membuatkan:
1. Rancangan tabel MySQL-nya,
2. Struktur folder proyek,
3. Kode dasar (koneksi, form, simpan data) lengkap dengan komentar penjelasan per baris, supaya mudah dipahami.

Ide mana yang paling menarik bagi Anda?

(saya)
berikan saya alternatif nama / judul aplikasi yang lain, yang mewakili fungsi dari aplikasinya

(AI Claude)
Karena Anda belum memilih satu ide, saya berikan nama untuk dua pilihan yang saya rekomendasikan, plus satu untuk ide lainnya.

## Bug Journal (catatan error pribadi)

- **CatatBug**: lugas, langsung menjelaskan fungsinya.
- **JejakError**: menggambarkan rekam jejak error yang pernah ditemui.
- **BugKu**: terkesan personal, karena ini koleksi bug milik sendiri.
- **ErrorLog Belajar**: menekankan sisi pembelajaran.
- **SolusiKode**: berfokus pada hasil akhir, yaitu solusi dari setiap error.
- **KodeBerantakan.id**: nama santai yang relatable bagi pemula.
- **DebugDiary**: gabungan "debug" dan "diary", mudah diingat.
- **Ketemu!Bug**: menggambarkan momen berhasil menemukan penyebab error.

## Pencatat Keuangan Harian

- **CatatDuit**: sederhana dan mudah dipahami semua orang.
- **UangKu Terpantau**: menunjukkan fungsi memantau pengeluaran.
- **KasHarian**: cocok untuk pencatatan rutin.
- **DompetKu**: akrab dan ringkas.
- **RekapRupiah**: menekankan fitur rekap bulanan.

## Kamus Kode / Snippet Pribadi

- **KamusKodeku**: koleksi penjelasan kode dengan bahasa sendiri.
- **SimpanKode**: fungsi penyimpanan snippet.
- **RumusKoding**: terkesan seperti buku catatan rumus.

## Tips memilih nama

1. **Pilih yang menyebut fungsi**: orang langsung paham tanpa dijelaskan (contoh: CatatBug, KasHarian).
2. **Singkat dan mudah diketik**: idealnya 1 sampai 2 kata.
3. **Cek ketersediaan**: kalau nanti ingin di-hosting, cari tahu apakah domainnya masih tersedia.
4. **Buat tagline**: misalnya "CatatBug: catat, pahami, jangan ulangi kesalahan yang sama."

Kalau Anda sudah menentukan idenya, saya bisa bantu mempersempit ke 2 sampai 3 nama terbaik beserta tagline dan ide logo sederhananya.

(saya)
saya ingin membuat Laboratorium coding interaktif yang memungkinkan siswa melengkapi kode, menjalankannya, dan mempelajari kesalahannya dengan bantuan AI.

Fitur intinya :
Latihan melengkapi kode HTML, CSS, dan JavaScript.
Editor kode dengan tombol Run.
Pratinjau hasil program secara langsung.
Pemeriksaan jawaban berdasarkan kriteria soal.
AI yang menjelaskan kesalahan dan memberikan petunjuk perbaikan.

(AI Claude)
Ide ini cocok untuk tantangan Anda: semua teknologi (HTML, CSS, JavaScript, PHP, MySQL) terpakai, dan fitur-fiturnya bisa dibangun bertahap.

## Cara kerja tiap fitur inti

**1. Latihan melengkapi kode**
Setiap soal berisi kode awal yang sengaja dibuat bolong, misalnya `<h1>___</h1>` atau `color: ___;`. Soal disimpan di MySQL, jadi menambah soal baru tidak perlu mengubah kode program.

**2. Editor kode dengan tombol Run**
Mulailah dengan `<textarea>` biasa agar mudah dipahami. Setelah jalan, Anda bisa menggantinya dengan CodeMirror (via CDN) untuk warna sintaks dan nomor baris.

**3. Pratinjau langsung**
Gunakan `<iframe>` dengan atribut `sandbox`, supaya kode siswa berjalan terisolasi dan tidak merusak halaman utama:

```html
<iframe id="preview" sandbox="allow-scripts"></iframe>

<script>
function jalankan() {
  const html = document.getElementById('kodeHtml').value;
  const css  = document.getElementById('kodeCss').value;
  const js   = document.getElementById('kodeJs').value;

  // Gabungkan ketiganya menjadi satu dokumen
  const dokumen = `
    <style>${css}</style>
    ${html}
    <script>${js}<\/script>
  `;
  document.getElementById('preview').srcdoc = dokumen;
}
</script>
```

**4. Pemeriksaan jawaban berdasarkan kriteria**
Setiap soal punya daftar kriteria yang disimpan sebagai JSON, lalu dicek satu per satu. Contoh:

```json
[
  { "tipe": "ada_elemen", "selector": "h1", "pesan": "Harus ada judul <h1>" },
  { "tipe": "teks_berisi", "selector": "h1", "nilai": "Halo", "pesan": "Judul harus memuat kata Halo" },
  { "tipe": "css_properti", "selector": "h1", "properti": "color", "nilai": "red", "pesan": "Warna judul harus merah" }
]
```

Pengecekan bisa dilakukan lewat JavaScript dengan membaca DOM di dalam iframe (`querySelector`, `getComputedStyle`). Hasilnya berupa daftar kriteria yang lulus dan yang gagal.

**5. AI penjelas kesalahan**
Alurnya: siswa menekan "Minta Bantuan AI", lalu JavaScript mengirim data ke `ai.php`, dan `ai.php` meneruskannya ke API AI lalu mengembalikan penjelasan.

Dua hal penting di sini:
- **API key hanya boleh ada di PHP (server)**, jangan pernah di JavaScript, karena siapa pun bisa melihatnya lewat F12.
- Data yang dikirim ke AI: teks soal, kode siswa, dan daftar kriteria yang gagal. Dengan begitu AI tahu persis letak masalahnya.

Instruksi (prompt) untuk AI sebaiknya seperti ini agar siswa tetap belajar:

> "Kamu adalah guru coding yang sabar untuk pemula. Jelaskan kesalahan siswa dengan bahasa Indonesia sederhana. Berikan petunjuk bertahap, jangan langsung memberikan kode jawaban lengkap. Jika ada typo, tunjukkan baris dan jenis kesalahannya."

## Rancangan tabel MySQL

| Tabel | Isi utama |
|---|---|
| `users` | id, nama, email, password (hash), peran (siswa/guru) |
| `exercises` | id, judul, bahasa, instruksi, kode_awal, kriteria (JSON), tingkat |
| `submissions` | id, user_id, exercise_id, kode_siswa, lulus, skor, waktu |
| `ai_hints` | id, submission_id, penjelasan, waktu (untuk riwayat dan membatasi jumlah permintaan) |

## Struktur folder

```
lab-coding/
├── index.php          (daftar soal)
├── latihan.php        (halaman editor + preview)
├── api/
│   ├── koneksi.php
│   ├── simpan_jawaban.php
│   └── ai.php         (penghubung ke AI)
├── assets/
│   ├── css/style.css
│   └── js/editor.js, cek.js
└── database.sql
```

## Urutan pengerjaan yang disarankan

1. **Tahap 1:** Editor, tombol Run, dan preview (tanpa database). Ini inti aplikasinya.
2. **Tahap 2:** Satu soal dengan pemeriksaan kriteria di JavaScript.
3. **Tahap 3:** Pindahkan soal ke MySQL, lalu tampilkan daftar soal lewat PHP.
4. **Tahap 4:** Simpan hasil jawaban siswa.
5. **Tahap 5:** Tambahkan AI lewat `ai.php`.
6. **Tahap 6 (opsional):** Login, papan skor, dan halaman guru untuk menambah soal.

Urutan ini menjaga Anda selalu punya sesuatu yang bisa berjalan di setiap tahap, jadi kalau ada error, penyebabnya lebih mudah dilacak.

## Alternatif nama

- **KodeLab**
- **LengkapiKode**
- **CodePlay Lab**
- **BugClinic**: AI sebagai "dokter" yang mendiagnosis kesalahan kode
- **NgodingYuk Lab**

## Langkah berikutnya

Saya sarankan kita mulai dari Tahap 1. Saya bisa membuatkan halaman editor dengan tombol Run dan preview langsung, lengkap dengan komentar penjelasan di setiap bagian kode agar mudah Anda pahami. Mau saya buatkan sekarang?

(saya)
saya tertarik dengan nama CodePlay. sekarang buatkan saya logo untuk CodePlay saya

(AI Claude)
Saya buatkan logo CodePlay dalam format SVG, yang tajam di ukuran apa pun dan bisa langsung dipakai di website Anda.

Logo CodePlay sudah jadi, ada dua file: `codeplay-logo.svg` (ikon dengan nama dan tagline) dan `codeplay-icon.svg` (ikon saja).

**Makna desain**
- **Kurung `< >`** melambangkan kode (HTML, CSS, JavaScript).
- **Segitiga kuning di tengah** adalah tombol Run/Play, fitur inti aplikasi Anda. Ia berada di dalam kurung kode, seolah kode yang sedang dijalankan.
- **Gradasi ungu ke tosca** memberi kesan modern dan teknologi, tetapi tetap ramah untuk siswa.
- **"Code" berwarna gelap dan "Play" berwarna ungu** menegaskan dua sisi aplikasi: serius belajar, tapi menyenangkan.

**Cara memakai di website**

Taruh file di `assets/img/`, lalu panggil dengan HTML biasa:

```html
<!-- Logo lengkap di header -->
<img src="assets/img/codeplay-logo.svg" alt="CodePlay" height="60">

<!-- Ikon sebagai favicon (ikon di tab browser) -->
<link rel="icon" type="image/svg+xml" href="assets/img/codeplay-icon.svg">
```

**Warna untuk tema CSS Anda**

Agar tampilan aplikasi senada dengan logo, Anda bisa memakai variabel ini:

```css
:root {
  --ungu: #6D5DF6;
  --tosca: #14B8A6;
  --kuning: #FFC83D;
  --navy: #1E1B4B;
  --abu: #64748B;
}
```

Karena berformat SVG, logo bisa diperbesar tanpa pecah. Kalau butuh PNG (misalnya untuk media sosial), saya bisa konversikan. Saya juga bisa ubah warna, bentuk ikon, atau buat versi untuk latar gelap.

Kalau logo sudah cocok, kita bisa lanjut ke Tahap 1: halaman editor dengan tombol Run dan preview langsung, dengan logo ini terpasang di header. Mau saya buatkan?

(saya)
buat logo lainnya

(AI Claude)
Berikut dua konsep logo baru dengan gaya yang berbeda dari yang pertama.

Ini dua logo alternatif, masing-masing dengan karakter yang berbeda.

**`codeplay-logo-lab.svg` (konsep labu laboratorium)**
Labu Erlenmeyer berisi cairan gradasi ungu ke tosca, dengan tombol Play putih di dalamnya dan gelembung kecil yang naik. Konsep ini paling menonjolkan kata "Laboratorium" dan menggambarkan siswa bereksperimen dengan kode. Kesannya ramah dan edukatif.

**`codeplay-logo-badge.svg` (konsep huruf C + Play)**
Lingkaran gelap dengan huruf "C" dari busur gradasi, dan segitiga Play kuning di dalam celahnya. Jadi satu bentuk sudah menyatakan "Code" sekaligus "Play". Gaya tulisannya memadukan "code" tipis dengan "play" tebal. Kesannya modern, simpel, dan paling cocok dijadikan ikon kecil atau favicon.

**Perbandingan singkat**

| Logo | Kesan | Paling cocok untuk |
|---|---|---|
| Kurung `< >` + Play (versi pertama) | Teknis, jelas "coding" | Header website |
| Labu laboratorium | Ramah, edukatif | Identitas utama, tampilan untuk siswa |
| Badge huruf C | Modern, minimalis | Favicon, ikon aplikasi, media sosial |

Ketiganya memakai palet warna yang sama, jadi tema CSS yang sebelumnya saya berikan tetap cocok untuk semuanya.

Kalau ada yang ingin diubah, misalnya warna, ukuran teks, versi latar gelap, atau menggabungkan elemen dari dua logo, beri tahu saya. Kalau sudah memilih, kita bisa lanjut membuat halaman editor dan preview (Tahap 1) dengan logo tersebut di header.

2. Penyusun Kerangka Kode

(saya)
bantu saya untuk mengembangkan kerangka kode program untuk aplikasi CodePlay yang ingin saya bangun

(AI Claude)
Saya buatkan kerangka proyek lengkap yang bisa langsung dijalankan di XAMPP, dengan komentar berbahasa Indonesia di tiap bagian.

Pembuatan folder gagal karena shell tidak mendukung sintaks `{a,b}`. Saya perbaiki dan buat ulang file yang gagal.

Bagian PHP dan database sudah lengkap. Sekarang bagian tampilan dan JavaScript.

Sintaks JavaScript lolos. PHP belum bisa dicek karena tidak terpasang di sandbox, jadi saya coba pasang dan uji juga logika pemeriksaan kriterianya.

Logika pemeriksaan lolos 7 dari 7 uji. Terakhir, saya kemas proyeknya menjadi satu file zip.

Ukuran file logo di dalam zip berbeda dari sebelumnya, jadi saya periksa dulu isinya.

Kerangka CodePlay sudah jadi dalam `codeplay.zip`: 3 contoh soal (HTML, CSS, JavaScript), editor dengan tombol Run, preview langsung, pemeriksaan kriteria, riwayat jawaban di MySQL, dan bantuan AI. File PHP-nya belum saya jalankan karena PHP tidak ada di sandbox, jadi ada kemungkinan Anda menemui typo atau error kecil saat pertama mencoba. Logika pemeriksaan kriteria sudah saya uji (7 dari 7 skenario lolos), dan sintaks ketiga file JavaScript lolos pengecekan.

## Cara menjalankan

1. Ekstrak zip, salin folder `codeplay` ke `C:\xampp\htdocs\`.
2. Nyalakan Apache dan MySQL di XAMPP.
3. Di phpMyAdmin, import `database.sql`.
4. Salin `config.example.php` menjadi `config.php`, lalu isi `ANTHROPIC_API_KEY` (tanpa ini, tombol AI akan menampilkan pesan bahwa key belum diisi, tapi bagian lain tetap jalan).
5. Buka `http://localhost/codeplay/`.

Disarankan jalankan dulu tanpa API key untuk memastikan editor, preview, dan pemeriksaan berfungsi, lalu tambahkan AI.

## Koreksi dari penjelasan saya sebelumnya

Sebelumnya saya bilang pemeriksaan bisa membaca DOM di dalam iframe langsung dengan `querySelector`. Itu **tidak akan jalan** karena iframe ber-`sandbox` dengan `allow-scripts` saja tidak boleh dibaca dari luar. Di kerangka ini saya pakai cara yang benar: skrip penguji disisipkan ke dalam iframe, halaman utama mengirim pesan lewat `postMessage`, lalu iframe memeriksa kriteria sendiri dan membalas hasilnya. Cara ini tetap aman dan juga bisa menangkap error JavaScript siswa untuk diteruskan ke AI.

Tabel `ai_hints` juga saya sederhanakan: sekarang menyimpan `session_key` untuk membatasi permintaan AI per jam (default 10), supaya biaya tidak membengkak.

## Peta file yang perlu Anda pahami dulu

| File | Perannya |
|---|---|
| `latihan.php` | Halaman utama: ambil soal dari MySQL, tampilkan editor dan preview |
| `assets/js/editor.js` | Tombol Run, Periksa, tab, dan reset |
| `assets/js/cek.js` | Logika pemeriksaan kriteria |
| `api/ai.php` | Satu-satunya tempat API key dipakai, plus aturan "guru sabar" untuk AI |
| `database.sql` | Tabel dan 3 soal contoh |

Semua kode berkomentar bahasa Indonesia. Sebaiknya baca berurutan dari `index.php`, `latihan.php`, `editor.js`, lalu `cek.js`.

## Hal yang perlu Anda ketahui

- Penilaian terjadi di browser, jadi cocok untuk latihan, tapi siswa yang paham bisa memanipulasinya. Untuk ujian bernilai resmi, pemeriksaan perlu dipindah ke server.
- Nama model AI ada di `config.php` (`AI_MODEL`). Cek daftar model dan harga terbaru di docs.claude.com sebelum dipakai banyak orang.
- `README.md` di dalam zip memuat tabel tipe kriteria, tabel cara melacak error, dan cara menambah soal baru.

Kalau ada error saat menjalankan, kirimkan pesan error-nya (atau screenshot Console F12), dan saya bantu telusuri penyebabnya. Setelah ini berjalan, langkah berikutnya yang paling masuk akal adalah login siswa dan papan skor.

3. Pemecahan Masalah & Penanganan Galat

(saya)
setelah saya coba mendeploy aplikasinya di xampp dan mengimpor basis datanya kemudian saya buka URL aplikasinya di lokalhost, muncul notifikasi seperti ini :
File config.php belum ada. Salin config.example.php menjadi config.php, lalu isi pengaturannya.

(AI Claude)
Pesan itu bukan kerusakan, melainkan pengecekan yang sengaja saya pasang di `koneksi.php`. Aplikasi belum menemukan file `config.php`, karena di zip hanya ada contohnya (`config.example.php`).

## Cara memperbaikinya

1. Buka folder `C:\xampp\htdocs\codeplay\`.
2. **Salin** (bukan ganti nama) `config.example.php`: klik kanan lalu **Copy**, kemudian **Paste** di folder yang sama.
3. Ubah nama salinannya menjadi **`config.php`** (hapus kata `.example`).
4. Buka `config.php` dengan VS Code atau Notepad, lalu cek isinya.
5. Refresh `http://localhost/codeplay/`.

## Isi yang perlu dicek

Untuk XAMPP bawaan, pengaturan database biasanya sudah benar dan tidak perlu diubah:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'codeplay');
```

Yang perlu diisi nanti hanya `ANTHROPIC_API_KEY`. Untuk sekarang, biarkan dulu agar Anda bisa memastikan editor, preview, dan pemeriksaan jawaban berjalan.

## Jebakan yang sering terjadi di Windows

Windows sering menyembunyikan ekstensi file, sehingga nama yang terlihat `config.php` sebenarnya adalah `config.php.txt`. Kalau halaman masih menampilkan pesan yang sama setelah Anda membuat file-nya, cek hal ini:

- Di File Explorer, buka tab **View**, lalu centang **File name extensions**.
- Pastikan namanya benar-benar `config.php`, bukan `config.php.txt` atau `config.example.php`.

## Kemungkinan pesan berikutnya

Kalau setelah ini muncul **"Koneksi database gagal: ..."**, cek:
- MySQL di XAMPP Control Panel sudah **Start** (hijau).
- Database `codeplay` terlihat di phpMyAdmin, artinya import tadi berhasil.
- Jika Anda dulu mengatur password untuk MySQL, isi `DB_PASS` dengan password itu.

Kalau muncul pesan lain, kirimkan teks lengkapnya, nanti kita telusuri bersama.

(saya)
setelah saya ganti nama file config.example.php menjadi config.php, maka aplikasinya berjalan dengan normal

(AI Claude)
Bagus, aplikasi CodePlay Anda sudah berjalan. Karena sebelumnya hanya diganti nama (tidak disalin), file `config.example.php` sudah tidak ada. Itu tidak masalah untuk sekarang, tapi kalau nanti proyek ini diunggah ke GitHub, pastikan `config.php` tidak ikut terunggah karena berisi API key.

## Uji dulu sebelum menambah fitur

Coba skenario ini di tiap soal supaya Anda yakin semuanya benar-benar bekerja:

1. **Soal HTML:** tekan Periksa Jawaban tanpa mengubah apa pun. Seharusnya ada kriteria yang gagal (✘). Lalu isi `<h1>Halo CodePlay</h1>` dan tambahkan `<p>`, hasilnya harus ✔ semua.
2. **Soal CSS:** ganti `___` dengan `red` dan `40px`, lalu periksa.
3. **Soal JavaScript:** biarkan `___` apa adanya, lalu tekan Run dan klik tombol di preview. Seharusnya muncul pesan error JavaScript merah.
4. **Database:** buka phpMyAdmin, lalu cek tabel `submissions`. Setiap kali Anda menekan Periksa, harus ada baris baru.

Kalau salah satu tidak sesuai, kirimkan hasilnya dan kita telusuri bersama.

## Mengaktifkan AI

Buka `config.php`, lalu isi `ANTHROPIC_API_KEY` dengan key dari console.anthropic.com. Setelah itu tekan Periksa Jawaban pada soal yang belum selesai, lalu klik Minta Bantuan AI. Kalau muncul error, buka F12, tab Network, klik `ai.php`, lalu tab Response untuk melihat pesan aslinya.

## Pengembangan berikutnya

| Prioritas | Fitur | Manfaat |
|---|---|---|
| 1 | Tambah 5 sampai 10 soal baru | Aplikasi terasa lengkap dan melatih Anda memahami format kriteria |
| 2 | Login dan registrasi | Riwayat jawaban terhubung ke akun siswa |
| 3 | Papan skor | Memotivasi siswa dari data `submissions` |
| 4 | Halaman guru | Menambah soal tanpa phpMyAdmin |
| 5 | Editor berwarna (CodeMirror) | Tampilan lebih profesional |

Untuk tantangan Anda, saya sarankan mulai dari menambah beberapa soal sendiri. Itu cara tercepat memahami bagaimana `exercises`, kriteria JSON, dan `cek.js` saling terhubung.

4. Refleksi & Penjelasan Kode

(saya)
Agar mudah saya memahami kode programnya baik dari segi bagian-bagian dalam styling maupun logika programnya, berikan komentar pada setiap kode programnya.

(AI Claude)
Saya tulis ulang semua file dengan komentar lengkap per bagian, tanpa mengubah cara kerjanya. Setelah selesai, saya cocokkan kodenya dengan versi sebelumnya untuk memastikan tidak ada yang berubah selain komentar.

Bagian PHP dan database selesai. Sekarang `ai.php`, CSS, dan ketiga file JavaScript.

Sekarang tiga file JavaScript, yang logikanya paling banyak perlu dijelaskan.

Semua file sudah ditulis. Sekarang saya verifikasi: cocokkan kode tanpa komentar dengan versi sebelumnya, cek sintaks, dan jalankan ulang uji logika.

Semua file CodePlay sekarang punya komentar berbahasa Indonesia di setiap bagian, dikemas dalam `codeplay-berkomentar.zip`. Cara kerja aplikasinya tidak berubah. Saya cocokkan kode tanpa komentar dengan versi sebelumnya dan hasilnya identik di semua 13 file PHP, JavaScript, CSS, dan SQL. Uji logika pemeriksaan kriteria juga masih lolos 7 dari 7. File PHP belum bisa saya jalankan karena PHP tidak ada di sandbox, jadi hanya terverifikasi lewat pencocokan kode itu.

## Cara memasangnya tanpa merusak yang sudah jalan

- **Jangan timpa `config.php`** yang sekarang Anda pakai, karena isinya pengaturan dan API key Anda. Di zip hanya ada `config.example.php`, jadi `config.php` Anda aman.
- **Tidak perlu import ulang database.** Komentar di `database.sql` tidak mengubah struktur tabel.
- Ganti file lainnya (folder `api`, `assets`, `includes`, `index.php`, `latihan.php`) dengan versi baru.

## Isi komentarnya

| Bagian | Yang dijelaskan |
|---|---|
| **Awal tiap file** | Fungsi file itu dan alur kerjanya |
| **`style.css`** | Cara membaca selector, properti, dan nilai; arti tiap properti seperti `grid`, `flex`, `hover`, dan `@media`; kenapa `.editor` disembunyikan lalu dimunculkan oleh class `tampil` |
| **`editor.js`** | Setiap fungsi dan alasannya, termasuk istilah seperti `addEventListener`, `fetch`, `filter`/`map`, dan `classList.toggle` |
| **`cek.js`** | Penjelasan cara iframe dan halaman utama saling kirim pesan, serta tiap jenis kriteria |
| **PHP** | Arti prepared statement (`?` dan `bind_param`), `$_GET`, `json_decode`, `cURL`, dan alasan keamanan di balik tiap langkah |
| **`database.sql`** | Arti tiap kolom, `FOREIGN KEY`, dan `INDEX` |

Di `README.md` ada tabel penanda komentar tiap bahasa (`//`, `/* */`, `<!-- -->`, `--`) dan urutan membaca file yang saya sarankan, mulai dari `database.sql` sampai `ai.js`.

Satu tips belajar: ubah satu nilai kecil, misalnya warna `--ungu` di bagian `:root` pada `style.css`, lalu refresh browser. Dari situ Anda bisa melihat langsung hubungan antara kode dan tampilan.

Kalau ada baris yang masih sulit dipahami, sebutkan nama file dan barisnya, nanti saya jelaskan lebih dalam.

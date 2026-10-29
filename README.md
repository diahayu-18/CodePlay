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

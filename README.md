# Password Generator 🔐

Sebuah aplikasi web sederhana untuk generate password yang kuat dan aman dengan antarmuka yang user-friendly.

## Deskripsi

Password Generator adalah tool web-based yang memungkinkan pengguna untuk membuat password acak dengan panjang yang dapat disesuaikan. Aplikasi ini dilengkapi dengan fitur toggle show/hide password dan kemampuan untuk menyalin password ke clipboard.

## Fitur

- ✨ **Generate Password Acak** - Membuat password dengan kombinasi huruf besar, huruf kecil, angka, dan karakter khusus
- 🔢 **Panjang Dapat Disesuaikan** - Menentukan panjang password sesuai kebutuhan
- 👁️ **Toggle Show/Hide Password** - Melihat atau menyembunyikan password yang di-generate
- 📋 **Copy to Clipboard** - Menyalin password langsung ke clipboard dengan satu klik
- 📱 **Responsive Design** - Tampil optimal di berbagai ukuran layar
- 🎨 **UI Modern** - Menggunakan Bootstrap 5 untuk tampilan yang clean dan professional

## Teknologi yang Digunakan

- **HTML5** - Struktur halaman web
- **CSS3** - Styling dengan Bootstrap 5.3.8
- **JavaScript** - Logika aplikasi dan interaktivitas
- **Font Awesome 6.0** - Icon untuk toggle password
- **Bootstrap 5.3.8** - Framework CSS untuk UI yang responsive

## Struktur File

```
password-generator/
│
├── index.html          # Halaman utama aplikasi
├── script.js           # Logic JavaScript untuk generate password
└── README.md           # Dokumentasi proyek
```

## Cara Penggunaan

1. **Clone atau download** repository ini
2. **Buka file `index.html`** di browser
3. **Masukkan panjang password** yang diinginkan pada field "Panjang Password"
4. **Klik tombol "Generate Password"** untuk membuat password acak
5. **Gunakan tombol mata** untuk show/hide password
6. **Klik "Save Password"** untuk menyalin password ke clipboard

## Instalasi

Tidak memerlukan instalasi khusus. Cukup buka file `index.html` di web browser modern.

```bash
# Clone repository
git clone [repository-url]

# Masuk ke direktori
cd password-generator

# Buka di browser
open index.html
```

## Screenshot

Aplikasi menampilkan form sederhana dengan:
- Input field untuk menentukan panjang password
- Input password dengan toggle show/hide
- Tombol generate dan save yang stylish

## Karakter Set Password

Password yang di-generate menggunakan kombinasi dari:
- Huruf kecil: `a-z`
- Huruf besar: `A-Z` 
- Angka: `0-9`
- Karakter khusus: `!@#$%^&*()`

Total 72 karakter yang memastikan password yang kuat dan aman.

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Kontribusi

Kontribusi selalu diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -am 'Menambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Rencana Pengembangan

- [ ] Menambah opsi untuk include/exclude karakter tertentu
- [ ] Menyimpan history password yang pernah di-generate
- [ ] Menambah strength meter untuk password
- [ ] Dark mode toggle
- [ ] Export password ke file text

## Lisensi

Proyek ini menggunakan lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail.

## Kontak

Jika ada pertanyaan atau saran, silakan buat issue di repository ini.

---

⭐ Jika proyek ini bermanfaat, jangan lupa untuk memberikan star!
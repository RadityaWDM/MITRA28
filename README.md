# Rekrutmen M28: Prototipe Sistem Rekrutmen PT Mitra Dua Delapan

Prototipe sistem rekrutmen untuk **PT Mitra Dua Delapan (M28)**, perusahaan penyedia tenaga kerja dan jasa SDM (kantor pusat di Temanggung, kantor operasional di Bandung).

- **Link live (privat, bagikan lewat menu Share):** https://claude.ai/artifact/46pCyE2Ec2npD4GL6JNapT
- **File lokal:** `Rekrutmen-M28.html`. Buka dengan klik dua kali, tanpa server atau instalasi.
- **Status:** prototipe untuk demo ke klien. Dibuat 16 Oktober 2026.

---

## 1. Latar belakang

### Masalah di website resmi
Di halaman `mitra28.id/lowongan-kerja` ada **39 tombol "Lamar Sekarang"**, dan **semuanya mengarah ke satu link yang sama** (`/form-lamaran-kerja/`). Akibatnya:

- CV untuk semua posisi masuk ke satu tumpukan, sehingga HR harus memilah secara manual.
- Pelamar harus mengetik ulang nama posisi yang dilamar.
- Formulir resmi berisi sekitar 80 field dalam satu halaman panjang (data pribadi, pendidikan, keahlian, 3 pengalaman, 3 referensi, 11 pertanyaan), tanpa upload CV.
- Tidak ada pelacakan status pelamar (screening, interview, diterima).

### Riwayat komunikasi
| Tanggal | Dari | Isi |
|---|---|---|
| 15 Okt 2026 | Raditya → Pak Andreas | Cold email: menyoroti masalah satu form untuk semua lowongan, menawarkan sistem rekrutmen sederhana. |
| 16 Okt 2026 | Info M28 (info@mitra28.id) | "Boleh coba kami lihat dan pelajari dulu. Biayanya bagaimana?" |
| 16 Okt 2026 | Draf balasan (belum dikirim) | Empat pertanyaan diagnosis: jumlah lowongan dan pelamar, alur sortir CV saat ini, platform website, dan bagian yang paling merepotkan. |

### Kontak klien
- Email: info@mitra28.id · marketing@mitra28.id · mitra28.co@gmail.com
- Telepon: 0821-2279-1128 · Marketing: 0812-2066-2030
- Kantor operasional: Graha DLA Lt. 3 Suite 40, Jl. Otto Iskandar Dinata No. 392, Bandung

---

## 2. Isi prototipe

Ada dua tampilan, diganti lewat menu kanan atas: **Lowongan** (untuk pelamar) dan **Dashboard HR**.

### 2.1 Halaman Lowongan (gaya LinkedIn Jobs)
- Tampilan dua kolom: daftar lowongan di kiri, detail lowongan di kanan. Di HP berubah menjadi satu kolom dengan tombol kembali.
- 12 lowongan asli dari mitra28.id, lengkap dengan lokasi penempatan dan kualifikasi.
- **Filter dropdown** (gaya LinkedIn "Date posted"):
  - **Kategori**: pilihan bulat dan jumlah lowongan, tombol Reset dan Tampilkan hasil.
  - **Lokasi**: Bandung, Cimahi (Jawa Barat), Makassar (Sulawesi Selatan).
  - Tombol **Pelamar < 10**.
  - Jumlah di dropdown kategori dan lokasi saling menyesuaikan, dan pilihan yang jumlahnya 0 dibuat pudar.
- Daftar dikelompokkan per kategori dengan judul kecil yang tetap terlihat saat di-scroll.
- Detail lowongan: tag kategori (bisa diklik), kualifikasi, pertanyaan skrining, 4 tahap proses rekrutmen, tombol **Lamar Mudah**, Simpan, Salin link (setiap posisi punya link sendiri, misalnya `mitra28.id/lamar/sec-bdg`), dan daftar **Lowongan lain di kategori ini**.

#### Kategori lowongan
| Kategori | Lowongan |
|---|---|
| Media Sosial & Kreatif | Content Creator, Marketing Communication, Creative Supervisor (Cimahi) |
| Dapur & Produksi | Baker Staff, Production Supervisor (Cimahi), Helper (Bandung) |
| Keamanan & Kebersihan | Security, Cleaning Service (Bandung) |
| Operasional & Logistik | Admin Gudang, Driver Personal Assistant (Bandung) |
| Sales & Penjualan | Sales Crewstore (Makassar) |
| Teknik & Mesin | Mekanik (Makassar) |

### 2.2 Formulir lamaran (gaya LinkedIn Easy Apply)
Semua field formulir resmi mitra28.id dipertahankan, lalu disusun ulang menjadi **7 langkah** dengan progress bar.

| Langkah | Isi | Wajib |
|---|---|---|
| 1. Data pribadi | Posisi (terisi otomatis), nama, jenis kelamin, status pernikahan, tempat dan tanggal lahir (usia dihitung otomatis), jenis dan nomor identitas, tinggi dan berat badan | Nama, jenis kelamin, status nikah, tempat dan tanggal lahir, jenis dan nomor identitas |
| 2. Alamat & kontak | Alamat, desa/kelurahan, kecamatan, kabupaten/kota, no. ponsel/WA, telepon rumah, email | Alamat, no. ponsel/WA |
| 3. Pendidikan | Jenjang, status kelulusan, sekolah/universitas, jurusan, tahun lulus | Jenjang, sekolah, tahun lulus, status |
| 4. Keahlian & pengalaman | Hingga 3 keahlian (tingkat Baik/Cukup/Kurang), hingga 3 pengalaman (perusahaan, posisi, bidang, kota, masa kerja, gaji/THP, alasan berhenti), atau "belum punya pengalaman" | – |
| 5. Referensi | Hingga 3 referensi (nama, jabatan, perusahaan, no. HP) | – |
| 6. Pertanyaan tambahan | Pertanyaan khusus posisi, ditambah 11 pertanyaan resmi (kontrak, seleksi sebelumnya, pekerjaan sampingan, kendaraan dan SIM, dinas luar kota, shift, riwayat sakit, tes kesehatan, gaji, benefit, mulai kerja) | Pertanyaan khusus posisi |
| 7. Tinjau & kirim | Upload CV, ringkasan per bagian dengan tombol "Ubah", centang pernyataan, tanggal pengisian | Pernyataan |

Bantuan untuk pelamar:
- Pesan kesalahan muncul langsung di field yang bermasalah (NIK 16 digit, nomor HP, tahun lulus 4 digit).
- Isian tambahan seperti "Kapan?" hanya muncul kalau jawabannya "Ya" atau "Pernah".
- Keahlian, pengalaman, dan referensi dimulai dari 1 isian, lalu bisa ditambah lewat tombol "+ Tambah" sampai maksimal 3.
- Draf tersimpan otomatis di browser, jadi pelamar bisa melanjutkan nanti.
- Tombol **Isi data contoh** untuk demo cepat.

**Perbedaan dari formulir resmi** (bisa dikembalikan kalau klien minta sama persis):
- Ada field nama kabupaten/kota. Versi resmi hanya punya pilihan Kotamadya/Kabupaten.
- Ada email dan upload CV, keduanya tidak wajib.
- Jenis kelamin dan status pernikahan tidak punya pilihan bawaan. Di versi resmi otomatis terisi "Pria" dan "Menikah".

### 2.3 Dashboard HR (gaya TikTok/Tokopedia Seller Center)
Menu samping dengan halaman terpisah:

- **Beranda**
  - Pemberitahuan pelamar yang belum dilihat.
  - Enam angka utama, masing-masing bisa diklik dan langsung membuka daftar terfilter: lowongan aktif, total pelamar, belum dilihat, lolos syarat awal, tahap interview, diterima.
  - Perlu ditindaklanjuti: pelamar baru, screening, interview yang perlu diputuskan, tidak lolos syarat awal, lowongan tanpa pelamar.
  - Pelamar terbaru dan tabel pelamar per lowongan.
- **Kelola pelamar** (gaya "Manage orders")
  - Tab per tahap: Semua, Baru, Screening, Interview, Diterima, Ditolak.
  - Filter lowongan, lokasi, syarat awal, dan belum dilihat. Pencarian nama, no. lamaran, atau no. HP.
  - Pilih banyak pelamar lalu pindahkan tahapnya sekaligus.
  - Panel profil pelamar: tahap rekrutmen, jawaban skrining, kontak, CV, isi formulir lengkap, catatan internal HR, riwayat aktivitas.
- **Interview**: pelamar di tahap interview, catatan jadwal, nomor WhatsApp, tombol Terima / Tolak.
- **Kelola lowongan**: semua lowongan dengan kategori, lokasi, jumlah pelamar, dan status, plus tombol ke daftar pelamar atau halaman lowongan.

---

## 3. Teknis

- **HTML, CSS, dan JavaScript murni**, tanpa framework atau build step. Font Poppins dan IBM Plex Mono dimuat dari Google Fonts.
- **Data**: 12 lowongan asli dan 36 pelamar contoh (nama fiktif). Lamaran dan perubahan status tersimpan di `localStorage` browser yang dipakai saja (kunci `m28-proto-v2`, draf `m28-draft-<ID>`).
- Tombol **Kembalikan data contoh** mengembalikan data awal.
- Mendukung mode terang dan gelap, dan bisa dipakai di HP.

### Struktur project
```
Mitra28/
├── index.html            Kerangka halaman: navigasi atas dan wadah aplikasi
├── css/
│   └── style.css         Semua tampilan: token warna terang/gelap, lowongan, formulir, dashboard HR
├── js/
│   └── app.js            Data lowongan, logika filter, formulir 7 langkah, dashboard HR
├── Rekrutmen-M28.html    Versi satu file (HTML+CSS+JS jadi satu), praktis untuk dilampirkan ke email
├── mitra28-rekrutmen.html  Versi satu file untuk publish ke link artifact
├── .claude/launch.json   Server lokal (port 8765) untuk pratinjau di panel browser Claude
└── README.md             Dokumen ini
```

Bagian utama di `js/app.js`:
| Bagian | Isi |
|---|---|
| `JOBS`, `CATS` | Data 12 lowongan dan 6 kategori |
| `seed()` | Pelamar contoh |
| `renderPortal()`, `jobDetail()` | Halaman lowongan, dropdown kategori dan lokasi |
| `FSTEPS`, `stepBody()`, `validate()` | Formulir lamaran 7 langkah |
| `renderHR()`, `hrHome()`, `hrPelamar()`, `hrInterview()`, `hrLowongan()` | Dashboard HR |
| `profile()` | Panel profil pelamar |

> Catatan: `Rekrutmen-M28.html` dan `mitra28-rekrutmen.html` adalah salinan dari versi yang sama. Kalau mengubah `index.html`, `css/style.css`, atau `js/app.js`, kedua file satu-file itu tidak ikut berubah.

### Menjalankan secara lokal
Klik dua kali `index.html`. Atau, di VS Code, pakai ekstensi **Live Server** dan klik kanan `index.html` lalu **Open with Live Server**. Bisa juga dengan server Node bawaan:

```bash
npx --yes serve .
```

---

## 4. Batasan prototipe
- Belum ada backend: data hanya tersimpan di browser yang dipakai dan tidak terkirim ke HR sungguhan.
- Upload CV hanya mencatat nama file.
- Belum ada login HR, email otomatis ke pelamar, atau notifikasi WhatsApp.
- Link `mitra28.id/lamar/...` masih contoh, belum aktif.

## 5. Langkah berikutnya
1. Kirim balasan email ke M28 (draf sudah ada di Gmail) dan lampirkan prototipe ini.
2. Bagikan link artifact lewat menu Share, atau lampirkan `Rekrutmen-M28.html`.
3. Tentukan harga berdasarkan jawaban empat pertanyaan diagnosis.
4. Versi produksi: backend dan database, login HR, upload CV sungguhan, notifikasi email/WhatsApp, dan integrasi dengan website mitra28.id (cek dulu platformnya, kemungkinan WordPress dengan WPForms).

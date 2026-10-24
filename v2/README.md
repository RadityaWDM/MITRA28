# M28 Karier v2: Tahap 1 (Pelamar + AI screening)

Rombakan total berdasarkan analisis ulang 17 Oktober 2026. Temuan utamanya: **Mitra28 adalah perusahaan outsourcing**, bukan perusahaan yang merekrut untuk dirinya sendiri. Mereka punya sekitar 39 poster lowongan di 5 kota, dan banyak di antaranya duplikat.

- **Link live (privat, bagikan lewat Share):** https://claude.ai/artifact/8yGe7mYQdf1ky7puqgqA5H. AI aktif di link ini.
- **File lokal:** `index.html`. Bisa dibuka langsung, tapi AI berjalan dalam **mode simulasi** (pencocokan kata kunci).
- `m28-karier.html`: sumber yang sama tanpa pembungkus `<html>`, dipakai untuk publish ke artifact.

## Acuan ATM
| Sumber | Yang diambil |
|---|---|
| Workstream / Fountain | Lamar cepat dalam 3 menit, lamar lewat QR dan WhatsApp, kabar otomatis |
| Bullhorn / JobAdder | Bank talenta: satu pelamar bisa ditandai untuk lowongan lain |
| Talenta / Kalibrr | Konteks lokal: bahasa, kebiasaan HR, kanal portal Indonesia |
| KitaLulus / Glints | Kartu lowongan ramah HP dan penanda "gratis, tanpa biaya" |

## Isi tahap 1
1. **Lowongan**: 31 lowongan (poster duplikat digabung menjadi kuota), filter Bidang dan Kota dalam bentuk dropdown, dan penanda komitmen "tanpa biaya apa pun".
2. **Detail lowongan**: syarat, pertanyaan wajib, alur proses, **kode QR per lowongan** untuk poster, dan link untuk WhatsApp.
3. **Lamar cepat (3 langkah)**: unggah CV (PDF, Word, teks, **foto CV**), lalu AI membaca dan mengisi data, pelamar memeriksa dan menjawab pertanyaan wajib, lalu kirim.
4. **Lamar lewat WhatsApp**: percakapan terarah (nama, kota, pertanyaan wajib, kirim CV).
5. **AI screening**: skor 0–100, rekomendasi, **setiap syarat dicek beserta buktinya dari CV**, kekuatan, hal yang perlu dicek saat interview, dan saran lowongan lain yang cocok. AI diminta tidak menilai nama, agama, suku, jenis kelamin, foto, atau status pernikahan.
6. **Meja screening (HR)**: antrean diurutkan menurut skor, filter per lowongan dan rekomendasi, impor dari Jobstreet/Glints/KitaLulus, keputusan HR (interview, bank talenta, tidak lanjut) yang otomatis menyiapkan pesan WhatsApp.
7. **Lacak lamaran**: dengan nomor lamaran atau nomor WhatsApp, menampilkan timeline dan riwayat pesan.

## Isi tahap 2: Rekrutmen & bank talenta
Menu **Ruang HR** sekarang punya 4 halaman:

1. **Meja screening**: hanya berisi lamaran yang belum diputuskan. Keputusan yang tersedia: *Undang interview* (langsung buka form jadwal), *Simpan ke bank talenta*, atau *Tidak lanjut*.
2. **Pipeline** (kanban, gaya Bullhorn): Screening → Interview M28 → Diajukan ke klien → Interview klien → Ditempatkan, ditambah area Bank talenta dan Tidak lanjut.
   - Kartu bisa **digeser** ke kolom lain, atau dipindah dengan tombol aksi di kartu.
   - Setiap kartu menampilkan skor AI, jadwal interview, klien, nilai interview, dan sudah berapa hari di tahap itu.
   - Filter per lowongan dan kota.
3. **Interview**:
   - **Jadwal** berisi tanggal, jam, tempat (kantor M28, online, atau lokasi klien), dan pewawancara. Undangan WhatsApp otomatis disiapkan.
   - **Penilaian** berupa skor 1–5 untuk komunikasi, pengalaman, sikap, dan kesiapan, ditambah catatan dan rekomendasi. Kandidat otomatis dipindah sesuai rekomendasi.
   - **Pertanyaan interview** diambil dari hasil screening, atau disusun AI.
   - Ada daftar terpisah untuk interview di klien (Diterima klien / Tidak lolos).
4. **Bank talenta**: semua orang yang pernah melamar, digabung per nomor WhatsApp.
   - Status: Tersedia, Dalam proses, Ditempatkan.
   - **Pencarian AI** dengan bahasa sehari-hari, misalnya "satpam di Bandung yang punya Gada Pratama". AI memberi alasan untuk setiap kandidat.
   - **Tawarkan ke lowongan lain** dalam satu klik, tanpa pelamar melamar ulang. Lamaran baru langsung dinilai AI dan pesan WhatsApp disiapkan.
   - **Profil talenta** (panel samping) berisi semua lamaran orang itu, riwayat setiap tahap, pemindahan tahap, dan catatan HR.

Setiap perpindahan tahap tercatat di riwayat dan menyiapkan pesan WhatsApp yang sesuai. Pesan-pesan itu bisa dilihat pelamar di **Lacak lamaran**, yang sekarang menampilkan 5 tahap.

## Isi tahap 3: Klien & penempatan
Dua halaman baru di Ruang HR, mengikuti pola Bullhorn/JobAdder untuk agen outsourcing:

1. **Klien**: 18 klien contoh (nama fiktif), masing-masing terhubung ke lowongannya.
   - Ringkasan: klien aktif, orang yang masih dibutuhkan, sudah ditempatkan, menunggu respons klien, dan lowongan yang lewat target waktu.
   - Tabel per klien: jumlah lowongan, progres terisi, kandidat dalam proses, status shortlist, dan target waktu (SLA).
   - **Detail klien**: PIC, rata-rata hari terisi, setiap permintaan tenaga kerja dengan progres dan sisa hari SLA, shortlist, interview di klien, dan penempatan aktif.
   - **Kirim shortlist ke PIC**: menyiapkan pesan WhatsApp berisi link portal klien.
   - **Tampilan klien** (simulasi portal klien): PIC melihat kandidat tanpa data kontak, lalu memilih *Undang interview*, *Terima langsung*, atau *Tidak cocok* beserta alasannya. Kandidat yang ditolak kembali ke bank talenta.
   - **Tambah permintaan tenaga kerja**: lowongan baru langsung tayang di halaman pelamar dengan form lamar dan QR sendiri. Nama klien tidak ditampilkan ke pelamar.
2. **Penempatan**: setiap kandidat yang ditempatkan dicatat dengan tanggal mulai, upah per bulan, dan masa percobaan.
   - Ringkasan: jumlah karyawan, klien, yang mulai minggu ini, rata-rata waktu terisi, dan kuota terpenuhi.
   - **Kuota otomatis berkurang**. Lowongan yang kuotanya terpenuhi otomatis hilang dari halaman pelamar.
   - Pelamar menerima pesan selamat lengkap dengan tanggal mulai, dan Lacak lamaran menampilkan tanggal mulai kerja.

Setiap pemindahan ke *Interview M28* membuka form jadwal, dan setiap pemindahan ke *Ditempatkan* membuka form penempatan, baik dari pipeline, profil talenta, maupun tampilan klien.

## Isi tahap 4: Onboarding & kontrak
Dua halaman baru di Ruang HR, ditambah simulasi portal karyawan:

1. **Onboarding**
   - Checklist dokumen dibuat otomatis begitu karyawan ditempatkan, dan **menyesuaikan posisinya**:
     - Semua posisi: KTP, KK, rekening, ijazah, pas foto (NPWP dan BPJS opsional).
     - Kebersihan & keamanan: ditambah SKCK dan surat sehat.
     - Satpam: ditambah KTA Satpam dan sertifikat Gada Pratama.
     - Pengemudi: ditambah SIM A dan SKCK.
     - F&B: ditambah surat sehat.
   - Status dokumen: Belum ada → Menunggu verifikasi → Terverifikasi / Perlu diunggah ulang (dengan alasan).
   - **Periksa dengan AI** (khusus link live, untuk foto dokumen): AI mengecek jenis dokumen, keterbacaan, dan kecocokan nama, tanpa menuliskan nomor identitas.
   - Ringkasan: dokumen wajib lengkap, menunggu verifikasi, belum tanda tangan, dan siap kerja.
   - Tombol **Ingatkan via WA** menyiapkan pesan berisi link dokumen.
2. **Kontrak**
   - Draf PKWT dibuat otomatis (6 bulan) dari data penempatan. Durasi (3/6/12/24 bulan), tanggal mulai, dan upah bisa diubah dengan pratinjau langsung.
   - Isi kontrak mencakup jabatan dan penempatan, jangka waktu, upah, BPJS, **pasal "tanpa biaya"** sesuai komitmen M28, dan kompensasi saat kontrak berakhir.
   - Aturan yang dicek otomatis:
     - **PKWT tanpa masa percobaan** (Pasal 58 UU Ketenagakerjaan). Bila data penempatan mencantumkan percobaan, muncul peringatan dan percobaan tidak dimasukkan.
     - **Total PKWT maksimal 5 tahun** (PP 35/2021).
   - Status: Draf → Menunggu tanda tangan → Aktif → Berakhir ≤ 30 hari → Diperpanjang / Tidak diperpanjang.
   - **Perpanjang** membuat kontrak baru yang mulai sehari setelah kontrak lama berakhir. **Tidak diperpanjang** mengembalikan karyawan ke bank talenta dan membuka kembali kuota lowongan.
3. **Portal karyawan (simulasi)**: karyawan mengunggah dokumen, membaca kontrak, lalu menandatangani secara elektronik (centang pernyataan dan ketik nama lengkap yang harus sama persis dengan data).

Halaman Penempatan sekarang punya tombol **Onboarding** di setiap baris.

> Isi kontrak adalah draf contoh untuk prototipe dan perlu ditinjau tim legal M28 sebelum dipakai.

## Teknis
- Satu file HTML, CSS, dan JS. Font Archivo, Public Sans, dan IBM Plex Mono dari Google Fonts.
- Pustaka dimuat dari cdnjs saat dibutuhkan: `qrcodejs` 1.0.0, `pdf.js` 3.11.174 (PDF termasuk hasil scan), dan `mammoth` 1.6.0 (Word).
- AI memakai kemampuan `sample` artifact claude.ai (`capabilities: {sample: {images: true}}`), sehingga penggunaannya memakai akun Claude orang yang membuka link.
- Data tersimpan di `localStorage` browser (lamaran `m28v2d-apps`, lowongan tambahan `m28v2-jobs`, catatan HR `m28v2-people`). Data contoh berisi 15 kandidat yang tersebar di semua tahap, termasuk 4 karyawan yang sudah ditempatkan (salah satunya kontraknya hampir berakhir).

## Asumsi (Mitra28 belum menjawab email)
- Daftar posisi dan kota diambil dari nama file poster di mitra28.id. Syarat detail hanya diketahui untuk sekitar 12 poster, sisanya **perkiraan**.
- Nama klien penempatan ("jaringan toko roti", "grup restoran", dan seterusnya) adalah **contoh**.
- Nama pelamar dan isi CV contoh adalah fiktif.
- Lowongan bernomor (Teller, Accounting, dan lain-lain) diasumsikan berlokasi di Tangerang.

## Batasan
- Belum ada backend: pesan WhatsApp masih simulasi, belum benar-benar terkirim.
- Portal klien masih simulasi di dalam Ruang HR. Di versi sungguhan, PIC klien punya login dan link sendiri.
- Nama klien, PIC, SLA, dan upah di data contoh semuanya fiktif.
- Portal karyawan masih simulasi. Unggahan dokumen hanya mencatat nama file, dan tanda tangan elektronik belum memakai penyedia tanda tangan tersertifikasi.

## Status
Keempat tahap dalam rancangan ATM sudah selesai sebagai prototipe demo:
1. Pelamar + AI screening
2. Rekrutmen & bank talenta
3. Klien & penempatan
4. Onboarding & kontrak

Untuk versi produksi, langkah berikutnya: backend dan database, login HR, klien, dan karyawan, integrasi WhatsApp Business API, penyimpanan dokumen yang aman, dan tanda tangan elektronik tersertifikasi. Absensi, payroll, dan terminasi menjadi modul lanjutan.

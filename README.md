# Undangan Khitanan — Kapten Fauzan

Komik petualangan pop-art: sampul “Mulai!”, panel jagoan, kartu karakter dengan bar stat (sekadar seru-seruan), peta checkpoint dengan hitung mundur misi, dan dinding stiker ucapan.

**Demo live:** https://undangan-khitanan.pintuweb.id

![Tangkapan layar](public/og.jpg)

> Contoh dengan data fiktif: nama, tempat, dan nomor rekening tidak sungguhan. Formulir hanya demo dan mengatakannya terus terang. Gambar adalah ilustrasi komik buatan sendiri yang siap diganti foto asli.

## Fitur

- Sampul komik yang menyapa nama tamu (`?to=Nama`)
- Kartu jagoan dengan bar stat beranimasi
- Peta petualangan + hitung mundur misi
- Galeri “aksi”, lokasi markas, RSVP & ucapan — mode demo
- **`/kirim` — alat tuan rumah:** ketik daftar tamu, dapatkan tautan pribadi tiap tamu dan pesan WhatsApp siap kirim. Semua diproses di peramban (localStorage), tanpa server.
- Musik latar: tamu memilih nyala/mati lewat sakelar di sampul; baru diputar setelah undangan dibuka, lalu bisa dijeda lewat tombol mengambang (judul lagu tampil di tombol dan footer)
- Halaman 404 bergaya sendiri

## Mengganti isi

Seluruh isi ada di satu file: `lib/data.js` (nama, tanggal, acara, galeri, musik, pesan untuk /kirim). Komponen tidak perlu disentuh.

- **Tanggal:** ubah teks tanggal *dan* nilai ISO (`mainDate`, `start`, `end`) — hitung mundur dan tombol kalender memakai nilai ISO.
- **Peta:** contoh menunjuk area kota; ganti `q=` di `location.mapEmbed` dan `mapLink` dengan nama tempat atau koordinat.
- **Foto:** timpa berkas di `public/images/` dengan nama yang sama (potret 3:4), lalu perbarui `alt` di `lib/data.js`.
- **Musik:** timpa `public/music/latar.mp3`, lalu ubah `music.title` dan `music.credit`. Pastikan Anda berhak memakai lagunya.

## Gambar & kredit

- `public/images/*.webp` — ilustrasi komik pop-art buatan sendiri (garis tinta tebal, halftone), digambar dari SVG; tokohnya fiktif. Lihat `public/images/SUMBER.md`.
- `public/music/latar.mp3` — *Radetzky March — Johann Strauss I*, rekaman US Marine Band, domain publik — [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:STRAUSS_Radetzky_March_-_%22The_President%27s_Own%22_U.S._Marine_Band.opus). Diperkecil ke MP3 mono 80 kbps.

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4 (token tema di `app/globals.css`)
- Framer Motion, lucide-react
- Font: Bangers, Luckiest Guy, Nunito (next/font)
- SEO: metadata, Open Graph, JSON-LD (WebSite), sitemap.xml, robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000 — coba juga http://localhost:3000/?to=Nama+Tamu dan http://localhost:3000/kirim.

---

Bagian dari koleksi 8 undangan digital di [PortalUndangan](https://www.pintuweb.id/undangan-digital). Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.

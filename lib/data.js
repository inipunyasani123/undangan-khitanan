// ============================================================
//  KONFIGURASI UNDANGAN — Khitanan (Comic "Petualangan Jagoan Kecil")
//  Ubah seluruh isi undangan dari satu tempat ini saja.
//
//  Ini undangan CONTOH: nama dan tempat fiktif. Gambar di
//  /public/images adalah ilustrasi komik buatan sendiri (tokoh
//  fiktif) — ganti dengan foto asli (potret 3:4) dan perbarui `alt`.
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Undangan Khitanan — Kapten Fauzan',
    description: 'Episode spesial telah tiba! Hadirilah misi keberanian Sang Jagoan Kecil dalam acara khitanan.',
  },

  // -- Teks komik pembuka --
  opening: {
    episode: 'Episode Spesial',
    tagline: 'Hari ini, Sang Jagoan menuntaskan misi keberaniannya!',
    battlecry: 'Bismillah, aku berani!',
  },

  // -- Sang Jagoan (tokoh utama) --
  hero: {
    name: 'Fauzan',
    alias: 'Kapten Fauzan',
    fullName: 'Muhammad Fauzan Al-Hakim',
    age: 8,
    parents: 'Bpk. Hidayat & Ibu Lestari',
    photo: '/images/sang-jagoan.webp',
    photoAlt: 'Ilustrasi komik Fauzan berkoko, berpeci, dan berjubah merah sambil berkacak pinggang',
    // Panel pembuka setelah sampul dibuka (boleh sama dengan photo)
    battlePhoto: '/images/jagoan-berani.webp',
    battlePhotoAlt: 'Ilustrasi komik Fauzan mengangkat tinju dan berseru penuh semangat',
    // Bar "stat" ala kartu game — sekadar seru-seruan, bukan penilaian.
    stats: [
      { label: 'Keberanian', value: 99 },
      { label: 'Keceriaan', value: 95 },
      { label: 'Semangat', value: 100 },
    ],
    powers: ['Suka Mengaji', 'Jago Sepak Bola', 'Hobi Menggambar'],
  },

  // -- Tanggal utama untuk countdown (format ISO) --
  mainDate: '2027-07-04T08:00:00+07:00',

  // -- Misi (acara) --
  mission: {
    name: 'Tasyakuran Khitan',
    date: 'Minggu, 4 Juli 2027',
    time: '08.00 - 13.00 WIB',
    venue: 'Markas Keluarga Hidayat',
    address: 'Umbulharjo, Yogyakarta',
    start: '2027-07-04T08:00:00+07:00',
    end: '2027-07-04T13:00:00+07:00',
  },

  // -- Peta petualangan (checkpoint menuju hari H) --
  checkpoints: [
    { icon: '🦸', label: 'Sang Jagoan Siap' },
    { icon: '🗺️', label: 'Menyusun Rencana' },
    { icon: '💪', label: 'Mengumpulkan Keberanian' },
    { icon: '🎉', label: 'Hari Misi Tiba!' },
  ],

  // Contoh ini menunjuk area Umbulharjo. Ganti `q=` dengan nama/koordinat tempat acara.
  location: {
    label: 'Markas Keluarga Hidayat, Umbulharjo, Yogyakarta',
    note: 'Peta contoh menunjukkan area Umbulharjo.',
    mapEmbed: 'https://www.google.com/maps?q=Umbulharjo,+Yogyakarta&output=embed',
    mapLink: 'https://maps.google.com/?q=Umbulharjo,+Yogyakarta',
  },

  // -- Galeri aksi (potret 3:4) --
  gallery: [
    { src: '/images/aksi-1.webp', alt: 'Fauzan bersila mengaji di depan rehal' },
    { src: '/images/aksi-2.webp', alt: 'Fauzan berkaus nomor 8 menendang bola: DUAR!' },
    { src: '/images/aksi-3.webp', alt: 'Fauzan menggambar jagoan berjubah dengan krayon' },
    { src: '/images/aksi-4.webp', alt: 'Fauzan bersama Ayah Hidayat dan Ibu Lestari mengacungkan jempol: Tim Super!' },
    { src: '/images/aksi-5.webp', alt: 'Fauzan berseru Bismillah sambil mengepalkan tangan' },
    { src: '/images/aksi-6.webp', alt: 'Fauzan bersarung dan berpeci di podium bertabur konfeti: Hore!' },
  ],

  // -- Musik latar (file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/latar.mp3',
    title: 'Radetzky March — Johann Strauss I',
    credit: 'rekaman US Marine Band, domain publik',
  },

  footer: {
    closing: 'Kehadiran & doamu adalah kekuatan super bagi Sang Jagoan!',
    hashtag: '#PetualanganFauzan',
  },

  // -- Halaman /kirim (tautan undangan per tamu) --
  kirim: {
    pesan:
      'Halo {nama}! 🦸\n\nKapten Fauzan mengundangmu ke Tasyakuran Khitan, Minggu, 4 Juli 2027, pukul 08.00 WIB di markas keluarga Hidayat.\n\nBuka komik undangannya: {tautan}\n\nDoa dan kehadiranmu jadi kekuatan super untuk Sang Jagoan!',
  },
};

export default config;

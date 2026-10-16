import Link from 'next/link';

export const metadata = { title: 'Halaman tidak ditemukan — Kapten Fauzan', robots: { index: false }, alternates: { canonical: null } };

export default function NotFound() {
  return (
    <main className="min-h-screen halftone bg-cream px-5 py-14 text-ink flex flex-col items-center justify-center text-center">
      <p className="font-display text-2xl uppercase text-rose-deep">Waduh!</p>
      <h1 className="mt-1 font-display text-4xl uppercase text-ink sm:text-5xl">Markas ini kosong</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted mx-auto">Mungkin tautannya terpotong saat dikirim. Undangan lengkapnya ada di halaman utama.</p>
      <Link href="/" className="mt-8 comic-border comic-shadow-sm inline-flex items-center justify-center gap-2 bg-rose-deep font-display uppercase text-cream transition hover:-translate-y-0.5 px-6 py-3 text-sm">Kembali ke petualangan</Link>
    </main>
  );
}

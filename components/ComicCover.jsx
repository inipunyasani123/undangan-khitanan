'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';
import SakelarMusik from './SakelarMusik';

// Sampul pop-art comic "Little Hero Adventure". Judul ber-outline tampil sejak cat pertama;
// gerak masuk panel memakai animasi CSS supaya tidak menunggu JavaScript.
export default function ComicCover({ keluar, onOpen, onSelesai, musik, onMusik }) {
  const guest = useGuestName();
  const { hero, opening, mission } = config;

  return (
    <section
      data-sampul
      aria-label="Sampul undangan"
      className={`fixed inset-0 z-50 overflow-y-auto bg-cream ${keluar ? 'sampul-keluar' : ''}`}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && e.animationName === 'sampul-keluar') onSelesai();
      }}
    >
      {/* Latar: sunburst + halftone */}
      <div className="sunburst pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="halftone pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      {/* Tape sudut */}
      <span className="absolute left-5 top-5 h-4 w-12 -rotate-45 border border-ink bg-gold comic-shadow-sm" aria-hidden="true" />
      <span className="absolute bottom-5 right-5 h-4 w-12 -rotate-45 border border-ink bg-rose comic-shadow-sm" aria-hidden="true" />

      <div className="absolute right-3 top-3 z-20">
        <SakelarMusik
          nyala={musik}
          onUbah={onMusik}
          className="border-2 border-ink bg-cream px-3 text-xs font-extrabold uppercase text-ink comic-shadow-sm hover:bg-blush"
        />
      </div>

      <div className="relative flex min-h-full flex-col items-center justify-center px-6 pb-10 pt-16 text-center">
        {/* Badge */}
        <div className="masuk comic-shadow-sm mb-5 -rotate-3 border-2 border-ink bg-gold px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-ink">
          {opening.episode}
        </div>

        {/* Judul ber-outline */}
        <h1 className="masuk-skala text-comic-outline mb-7 rotate-2 font-display text-5xl leading-none text-cream sm:text-6xl">
          Keberanian<br />{hero.name}
        </h1>

        {/* Kartu jagoan */}
        <div className="masuk comic-shadow-lg relative mb-7 aspect-[3/4] w-[62%] max-w-[230px] -rotate-2 overflow-hidden rounded-lg border-4 border-ink bg-blush" style={{ '--tunda': '0.1s' }}>
          <Image src={hero.photo} alt={hero.fullName} fill priority sizes="230px" className="object-cover" />
          <span className="absolute bottom-2 left-2 comic-border bg-gold px-2 py-0.5 font-display text-lg text-ink">{hero.alias}</span>
        </div>

        {/* Label misi + tanggal */}
        <div className="masuk comic-shadow-sm mb-6 rotate-1 border-2 border-ink bg-cream px-5 py-2" style={{ '--tunda': '0.2s' }}>
          <p className="font-display text-2xl leading-tight text-ink">Misi Khitanan Sang Pahlawan</p>
          <p className="text-xs font-extrabold uppercase tracking-wider text-rose-deep">{mission.date}</p>
        </div>

        {/* Tamu */}
        <div className="masuk mb-6" style={{ '--tunda': '0.3s' }}>
          <p className="text-xs font-bold uppercase tracking-widest text-muted">Kepada Yth.</p>
          <p className="mt-1 break-words text-lg font-extrabold text-ink">{guest}</p>
        </div>

        {/* Tombol */}
        <div className="masuk" style={{ '--tunda': '0.4s' }}>
          <button
            type="button"
            onClick={onOpen}
            disabled={keluar}
            className="comic-shadow group inline-flex min-h-14 items-center gap-2 rounded-full border-4 border-ink bg-flame px-10 py-3 font-display text-2xl uppercase tracking-widest text-cream transition-all hover:-translate-y-0.5 hover:comic-shadow-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Mulai!<span className="sr-only"> Buka undangan</span> <ArrowRight size={26} strokeWidth={3} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import config from '@/lib/data';

// Panel pembuka komik: jagoan + balon ucapan "battlecry", garis pancar.
export default function HeroPanel() {
  const { hero, opening } = config;

  return (
    <section className="relative z-10 flex min-h-svh flex-col items-center justify-center overflow-hidden bg-rose-deep px-6 py-24 text-center">
      <div className="sunburst absolute inset-0 opacity-30" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        {/* Balon ucapan */}
        <div className="comic-border comic-shadow-sm relative mx-auto mb-6 max-w-xs bg-cream px-5 py-3">
          <p className="font-script text-xl uppercase text-rose">&ldquo;{opening.battlecry}&rdquo;</p>
          <span className="absolute -bottom-3 left-10 h-4 w-4 rotate-45 border-b-4 border-r-4 border-ink bg-cream" aria-hidden="true" />
        </div>

        <div className="comic-border comic-shadow relative mx-auto h-72 w-60 overflow-hidden bg-blush">
          <Image src={hero.battlePhoto || hero.photo} alt={hero.battlePhotoAlt || hero.photoAlt || hero.fullName} fill sizes="240px" className="object-cover" />
        </div>

        <h1 className="garis-komik mt-6 break-words font-display text-4xl text-gold sm:text-5xl md:text-7xl">
          {hero.alias}
        </h1>
        <p className="mx-auto mt-3 max-w-md font-bold text-cream">{opening.tagline}</p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown size={30} />
      </motion.div>
    </section>
  );
}

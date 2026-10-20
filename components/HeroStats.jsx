'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import config from '@/lib/data';

// Kartu karakter ala game: foto + bar "stat" + daftar "kekuatan super".
export default function HeroStats() {
  const { hero } = config;

  return (
    <section className="relative z-10 bg-cream px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="comic-border comic-shadow mx-auto max-w-md bg-rose-deep p-5 text-cream"
      >
        <h2 className="comic-border bg-gold px-3 py-1 text-center font-display text-2xl text-ink">
          Kartu Sang Jagoan
        </h2>

        <div className="comic-border relative mt-4 h-56 w-full overflow-hidden bg-cream">
          <Image src={hero.photo} alt={hero.photoAlt || hero.fullName} fill sizes="400px" className="object-cover object-[50%_24%]" />
        </div>

        <h3 className="mt-4 text-balance text-center font-display text-3xl text-gold">{hero.fullName}</h3>
        <p className="text-center text-sm font-bold text-cream/80">{hero.age} Tahun • Putra dari {hero.parents}</p>

        {/* Bar stat */}
        <div className="mt-5 space-y-3">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-xs font-extrabold uppercase">
                <span>{s.label}</span><span>{s.value}</span>
              </div>
              <div className="comic-border mt-1 h-4 overflow-hidden bg-cream" role="meter" aria-label={s.label} aria-valuenow={s.value} aria-valuemin={0} aria-valuemax={100}>
                {/* scaleX pada elemen selebar penuh: elemen berlebar 0 tidak terdeteksi IntersectionObserver */}
                <motion.div
                  className="h-full w-full origin-left bg-gold"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: s.value / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Kekuatan super */}
        <div className="mt-5 flex flex-wrap gap-2">
          {hero.powers.map((p) => (
            <span key={p} className="comic-border inline-flex items-center gap-1 bg-blush px-2.5 py-1 text-xs font-bold text-ink">
              <Sparkles size={12} aria-hidden="true" /> {p}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

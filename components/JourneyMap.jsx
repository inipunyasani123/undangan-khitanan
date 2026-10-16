'use client';
import { motion } from 'framer-motion';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';

// Peta petualangan: jalur checkpoint zig-zag + hitung mundur misi.
export default function JourneyMap() {
  const { checkpoints, mainDate } = config;
  const { days, hours, minutes, seconds, passed } = useCountdown(mainDate);
  const counts = [
    { v: days, l: 'Hari' },
    { v: hours, l: 'Jam' },
    { v: minutes, l: 'Menit' },
    { v: seconds, l: 'Detik' },
  ];

  return (
    <section className="relative z-10 bg-rose px-6 py-20 text-cream">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl text-gold md:text-5xl garis-komik">
          Peta Petualangan
        </h2>

        {/* Jalur checkpoint */}
        <div className="mt-10 flex flex-col gap-5">
          {checkpoints.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex items-center gap-4 ${i % 2 ? 'flex-row-reverse text-right' : ''}`}
            >
              <span className="comic-border comic-shadow-sm flex h-16 w-16 shrink-0 items-center justify-center bg-blush text-3xl">
                {c.icon}
              </span>
              <div className="comic-border min-w-0 flex-1 bg-cream px-4 py-3 text-left font-display text-xl text-ink">
                <span className="text-rose-deep">CP{i + 1}.</span> {c.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hitung mundur */}
        {passed ? (
          <p className="comic-border comic-shadow-sm mx-auto mt-12 max-w-sm bg-cream px-5 py-4 font-display text-2xl text-ink">
            Misi tuntas! Terima kasih, Pasukan!
          </p>
        ) : (
          <>
            <p className="mt-12 font-display text-2xl text-cream">Misi dimulai dalam:</p>
            <div className="mx-auto mt-4 grid max-w-xs grid-cols-4 gap-2 sm:max-w-sm sm:gap-3" role="timer" aria-label={`${days} hari ${hours} jam ${minutes} menit lagi`}>
              {counts.map((c) => (
                <div key={c.l} className="comic-border comic-shadow-sm flex aspect-square flex-col items-center justify-center bg-cream">
                  <span className="font-display text-3xl tabular-nums text-rose">{String(c.v).padStart(2, '0')}</span>
                  <span className="text-[10px] font-bold uppercase text-muted">{c.l}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

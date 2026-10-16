'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import config from '@/lib/data';
import { useDialog } from '@/lib/hooks';

// Galeri sebagai panel-panel komik dengan rotasi acak + lightbox.
const tilts = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg', '1deg'];

export default function ComicGallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);
  const tombolTutup = useDialog(active !== null, () => setActive(null));

  return (
    <section className="relative z-10 bg-blush halftone px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl text-rose-deep md:text-5xl" style={{ WebkitTextStroke: '1.5px #15173a' }}>
          Aksi Sang Jagoan
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((src, i) => (
            <motion.button
              key={src}
              style={{ rotate: tilts[i % tilts.length] }}
              whileHover={{ rotate: '0deg', scale: 1.03 }}
              type="button"
              onClick={() => setActive(i)}
              className="comic-border comic-shadow-sm block overflow-hidden bg-cream"
              aria-label={`Perbesar aksi ${i + 1}`}
            >
              <span className="relative block h-40 w-full md:h-52">
                <Image src={src} alt={`Aksi ${i + 1}`} fill sizes="(max-width:768px) 45vw, 240px" className="object-cover" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label={`Aksi ${active + 1} dari ${gallery.length}, diperbesar`}
          >
            <button ref={tombolTutup} type="button" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-cream hover:text-gold" onClick={() => setActive(null)} aria-label="Tutup foto">
              <X size={30} />
            </button>
            <motion.div
              className="comic-border relative h-[70vh] w-full max-w-xl bg-cream"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={gallery[active]} alt={`Aksi ${active + 1}`} fill sizes="(max-width: 640px) 100vw, 576px" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

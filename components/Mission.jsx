'use client';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin, CalendarPlus, Target } from 'lucide-react';
import config from '@/lib/data';
import { googleCalendarUrl } from '@/lib/utils';

// "Misi Hari Ini" — briefing acara gaya komik (panel + stempel misi).
export default function Mission() {
  const { mission, meta, location } = config;
  const calUrl = googleCalendarUrl(mission, { title: meta.title, location: location.label });

  const rows = [
    { icon: CalendarDays, text: mission.date },
    { icon: Clock, text: mission.time },
    { icon: MapPin, text: `${mission.venue} — ${mission.address}` },
  ];

  return (
    <section className="relative z-10 bg-cream px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-lg"
      >
        <div className="comic-border comic-shadow relative bg-blush p-7">
          <span className="comic-border absolute -top-4 left-6 inline-flex items-center gap-1.5 bg-rose px-3 py-1 font-display text-xl text-cream">
            <Target size={16} /> Misi Hari Ini
          </span>

          <h2 className="mt-4 font-display text-3xl text-ink">{mission.name}</h2>

          <ul className="mt-5 space-y-3">
            {rows.map(({ icon: Icon, text }, i) => (
              <li key={i} className="comic-border flex items-start gap-3 bg-cream px-4 py-3 text-sm font-semibold text-ink">
                <Icon size={18} className="mt-0.5 shrink-0 text-rose-deep" /> {text}
              </li>
            ))}
          </ul>

          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="comic-border comic-shadow-sm mt-6 inline-flex min-h-12 items-center gap-2 bg-rose-deep px-5 py-2.5 font-display text-lg text-cream transition hover:bg-ink"
          >
            <CalendarPlus size={16} /> Catat di Kalender
          </a>
        </div>
      </motion.div>
    </section>
  );
}

'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

const initial = [
  { id: 1, name: 'Budi', message: 'Jagoan banget! Semoga jadi anak sholeh & pemberani!' },
  { id: 2, name: 'Maya', message: 'Barakallah, lekas pulih ya Kapten!' },
];
const noteColors = ['bg-gold', 'bg-rose text-cream', 'bg-rose-deep text-cream', 'bg-blush'];
const tilts = ['-2deg', '2deg', '-1.5deg', '1.5deg'];

// Dinding ucapan gaya stiker/sticky-note komik.
export default function WishesForm() {
  const [wishes, setWishes] = useState(initial);
  const [form, setForm] = useState({ name: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setWishes((p) => [{ id: Date.now(), name: form.name.trim(), message: form.message.trim() }, ...p]);
    setForm({ name: '', message: '' });
  };

  const field = 'comic-border w-full bg-cream px-4 py-3 text-sm font-semibold outline-none focus:bg-blush/40';
  const lab = 'mb-1 block font-display text-lg leading-none text-rose-deep';

  return (
    <section className="relative z-10 bg-cream px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl text-rose md:text-5xl" style={{ WebkitTextStroke: '1.5px #15173a' }}>
          Kirim Semangat!
        </h2>

        <form onSubmit={submit} className="comic-border comic-shadow mx-auto mt-8 max-w-md space-y-3 bg-blush p-5 text-left">
          <div>
            <label htmlFor="semangat-nama" className={lab}>Nama</label>
            <input id="semangat-nama" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nama kamu" autoComplete="name" maxLength={60} className={field} required />
          </div>
          <div>
            <label htmlFor="semangat-pesan" className={lab}>Semangat &amp; doa</label>
            <textarea id="semangat-pesan" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tulis semangat & doa…" rows={3} maxLength={500} className={`${field} resize-none`} required />
          </div>
          <button type="submit" className="comic-border comic-shadow-sm inline-flex items-center gap-2 bg-rose-deep px-5 py-2.5 font-display text-lg text-cream transition hover:bg-ink">
            <Send size={15} aria-hidden="true" /> Tempel!
          </button>
        </form>

        {/* Dinding stiker */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3" aria-live="polite">
          {wishes.map((w, i) => (
            <div
              key={w.id}
              style={{ rotate: tilts[i % tilts.length] }}
              className={`comic-border comic-shadow-sm p-4 text-left ${noteColors[i % noteColors.length]}`}
            >
              <p className="font-display text-xl">{w.name}</p>
              <p className="mt-1 text-sm font-semibold leading-snug">{w.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

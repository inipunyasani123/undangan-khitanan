'use client';
import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

// Konfirmasi kehadiran gaya komik. Ini undangan contoh: data tidak dikirim ke mana pun.
const PESAN_URL =
  'https://wa.me/6285190931399?text=' +
  encodeURIComponent('Halo PintuWeb, saya mau pesan undangan khitanan digital seperti contoh Kapten Fauzan.');

export default function RSVPForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', attendance: 'hadir', guests: 1 });
  const [done, setDone] = useState(false);
  const pesanSukses = useRef(null);

  // Form hilang setelah dikirim; pindahkan fokus ke pesan sukses supaya tidak jatuh ke <body>.
  useEffect(() => {
    if (done) pesanSukses.current?.focus();
  }, [done]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit?.(form);
    setDone(true);
  };

  const field = 'comic-border w-full bg-cream px-4 py-3 text-sm font-semibold text-ink outline-none focus:bg-blush/40';
  const lab = 'mb-1 block font-display text-lg leading-none text-rose-deep';

  return (
    <section className="relative z-10 bg-blush halftone px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <h2 className="font-display text-4xl text-rose-deep md:text-5xl" style={{ WebkitTextStroke: '1.5px #15173a' }}>
          Gabung Misi?
        </h2>

        {done ? (
          <div className="comic-border comic-shadow mt-8 bg-cream p-8" role="status">
            <div className="comic-border mx-auto flex h-14 w-14 items-center justify-center bg-rose text-cream">
              <Check size={26} />
            </div>
            <p ref={pesanSukses} tabIndex={-1} className="mt-4 font-display text-2xl text-ink">Sip, {form.name.trim()}!</p>
            <p className="mt-1 text-sm font-semibold text-muted">
              Psst, ini undangan contoh, jadi konfirmasimu tidak benar-benar terkirim ke Sang Jagoan.
            </p>
            <a
              href={PESAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-bold text-rose underline underline-offset-2 hover:text-ink"
            >
              Pesan undangan seperti ini
            </a>
          </div>
        ) : (
          <form onSubmit={submit} className="comic-border comic-shadow mt-8 space-y-4 bg-cream p-6 text-left">
            <div>
              <label htmlFor="rsvp-nama" className={lab}>Nama</label>
              <input id="rsvp-nama" name="name" value={form.name} onChange={handle} placeholder="Nama kamu" autoComplete="name" maxLength={60} className={field} required />
            </div>
            <div>
              <label htmlFor="rsvp-hadir" className={lab}>Kehadiran</label>
              <select id="rsvp-hadir" name="attendance" value={form.attendance} onChange={handle} className={field}>
                <option value="hadir">Siap Hadir!</option>
                <option value="tidak">Belum Bisa Hadir</option>
                <option value="ragu">Masih Ragu</option>
              </select>
            </div>
            {form.attendance === 'hadir' && (
              <div>
                <label htmlFor="rsvp-jumlah" className={lab}>Jumlah pasukan</label>
                <input id="rsvp-jumlah" type="number" name="guests" min={1} max={10} value={form.guests} onChange={handle} className={field} />
              </div>
            )}
            <button type="submit" className="comic-border comic-shadow-sm min-h-12 w-full bg-rose px-5 py-3 font-display text-xl text-cream transition hover:bg-rose-deep">
              Kirim Konfirmasi
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

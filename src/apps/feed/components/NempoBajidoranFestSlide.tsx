import type { RefObject } from 'react';
import { Disc3, Drum, MapPin, Music2 } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import backdrop from '@/assets/nempo-feed-63/nempo-feed-63-latar-festival.webp.asset.json';
import titleArt from '@/assets/nempo-feed-63/nempo-feed-63-judul-bajidoran-dj.webp.asset.json';
import kendangGroup from '@/assets/nempo-feed-63/nempo-feed-63-kendang.webp.asset.json';
import dancers from '@/assets/nempo-feed-63/nempo-feed-63-penari.webp.asset.json';
import mcPhoto from '@/assets/nempo-feed-63/nempo-feed-63-dj-kaos-hijau.webp.asset.json';
import djPhoto from '@/assets/nempo-feed-50-dj-dityar-tilted.png';
import { nempoBajidoranFest as F } from './nempo-bajidoran-fest';
import './NempoAjakRequestSlide.css';
import './NempoBajidoranFestSlide.css';

const ACTIVITY_ICONS = [Drum, Music2, Disc3];
const ACTIVITY_TONES = ['gold', 'pink', 'violet'] as const;

/**
 * NEMPO Feed slide 63 (3:4): Vibez-Fest-style poster — header shared with the Good Story Cafe event slides
 * (NEMPO.ID × Kala Muda, Saduli Ragap, Good Story Cafe), the owner's 3D title lettering, the performers as
 * cut-outs, activity pills, time row, date + venue boxes and rounded contact cards. Static so the PNG matches.
 */
export function NempoBajidoranFestSlide({ exportRef, story = false }: { exportRef?: RefObject<HTMLElement | null>; story?: boolean }) {
  const { date, venue, info } = F;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className={`nbx-root kmt-root${story ? ' nbx-story' : ''}`}
      aria-label={`${F.title} — ${F.activities.join(', ')}. ${date.weekday}, ${date.day} ${date.month} ${date.year}, ${F.schedule.map((s) => `${s.label} ${s.value}`).join(' ')} di ${venue.name}, ${venue.address}. ${info.label} ${info.number}`}
    >
      <img className="nbx-bg" src={backdrop.url} alt="" aria-hidden="true" draggable={false} />
      <span className="nbx-haze" aria-hidden="true" />

      <header className="kmt-header nar-header nbx-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nar-partners">
          <img className="nar-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nar-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>

      <h2 className="nbx-title">
        <img src={titleArt.url} alt="" draggable={false} />
        <span className="nbx-sr">{F.title}</span>
      </h2>

      <div className="nbx-cast" aria-hidden="true">
        <img className="nbx-dj nbx-mc" src={mcPhoto.url} alt="" draggable={false} />
        <img className="nbx-dj nbx-dj--right" src={djPhoto} alt="" draggable={false} />
        <img className="nbx-dancers" src={dancers.url} alt="" draggable={false} />
        <img className="nbx-kendang" src={kendangGroup.url} alt="" draggable={false} />
        <span className="nbx-tag nbx-tag--mc">{F.mc}</span>
        <span className="nbx-tag nbx-tag--dj">{F.dj}</span>
      </div>

      <span className="nbx-fade" aria-hidden="true" />

      <div className="nbx-activities">
        <p>{F.activitiesLabel}</p>
        {F.activities.map((a, i) => {
          const Icon = ACTIVITY_ICONS[i] ?? Music2;
          return (
            <span key={a} className={`nbx-pill nbx-pill--${ACTIVITY_TONES[i] ?? 'gold'}`}>
              <Icon aria-hidden="true" />{a}
            </span>
          );
        })}
      </div>

      <div className="nbx-times">
        {F.schedule.map((s) => (
          <span key={s.label} className="nbx-time">
            <span className="nbx-time-label">{s.label}</span>
            <span className="nbx-time-value">{s.value}</span>
          </span>
        ))}
      </div>

      <div className="nbx-info">
        <div className="nbx-date">
          <small>{date.weekday}</small>
          <b>{date.day} {date.month}, {date.year}</b>
        </div>
        <div className="nbx-venue">
          <MapPin aria-hidden="true" />
          <span>
            <b>{venue.name}</b>
            <small>{venue.address} · Garut</small>
          </span>
        </div>
      </div>

      <footer className="kmt-footer nbx-footer" aria-label={info.label}>
        <span className="kmt-pill kmt-pill-wa"><FaWhatsapp aria-hidden="true" />{info.number}</span>
        <span className="kmt-pill"><FaInstagram aria-hidden="true" /><FaTiktok aria-hidden="true" /><strong>{F.socials}</strong></span>
      </footer>
    </section>
  );
}

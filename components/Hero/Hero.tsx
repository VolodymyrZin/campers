import Link from 'next/link';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <div className={css.container}>
      <section className={css.hero}>
        <div className={css.heroText}>
          <h1 className={css.title}>Campers of your dreams</h1>

          <p className={css.text}>
            You can find everything you want in our catalog
          </p>

          <Link className={css.catalogLink} href="/catalog">
            View Now
          </Link>
        </div>
      </section>
    </div>
  );
}

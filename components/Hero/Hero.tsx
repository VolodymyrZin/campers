import Image from 'next/image';
import Link from 'next/link';
import css from './Hero.module.css';
export default function Hero() {
  return (
    <div className={css.container}>
      <section className={css.wrapper}>
        <Image
          src="/images/hero.webp"
          alt="Hero banner"
          width={1440}
          height={761}
          priority
          loading="eager"
          className={css.heroImage}
        />
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

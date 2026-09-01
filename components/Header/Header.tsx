import Link from 'next/link';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.headerSection}>
      <div className={css.container}>
        <Link href="/" className={css.logo} aria-label="Travel Trucks">
          <svg width="136" height="16">
            <use href="/sprite.svg#icon-logo" />
          </svg>
        </Link>

        <nav className={css.headerNav}>
          <Link className={css.homePage} href="/">
            Home
          </Link>

          <Link className={css.catalogPage} href="/catalog">
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}

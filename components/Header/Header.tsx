'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.headerSection}>
      <div className={css.container}>
        <Link href="/" className={css.logo} aria-label="Travel Trucks">
          <svg width="136" height="16">
            <use href="/sprite.svg#icon-logo" />
          </svg>
        </Link>

        <nav className={css.headerNav}>
          <Link
            className={`${css.navLink} ${pathname === '/' ? css.active : ''}`}
            href="/"
          >
            Home
          </Link>

          <Link
            className={`${css.navLink} ${
              pathname.startsWith('/catalog') ? css.active : ''
            }`}
            href="/catalog"
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}

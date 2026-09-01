import type { Camper } from '@/types/camper';
import css from './CamperCard.module.css';
import Link from 'next/link';

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <article className={css.camperCard}>
      <img
        className={css.image}
        src={camper.coverImage}
        alt={camper.name}
        width={219}
        height={240}
      />

      <div className={css.cardContent}>
        <div className={css.commonWrapper}>
          <div className={css.namePriceWrapper}>
            <h2>{camper.name}</h2>
            <p>€{camper.price}</p>
          </div>

          <div className={css.ratingReviewsLocationWrapper}>
            <p className={css.locationLogoRating}>
              <svg width="15" height="14">
                <use href="/sprite.svg#icon-star" />
              </svg>
              {camper.rating}
            </p>
            <p>({camper.totalReviews} Reviews)</p>
            <svg width="15" height="14">
              <use href="/sprite.svg#icon-location-active" />
            </svg>

            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>

        <div className={css.features}>
          <span>
            <svg width="20" height="20">
              <use href="/sprite.svg#icon-patrol" />
            </svg>
            {camper.engine}
          </span>
          <span>
            <svg width="20" height="15">
              <use href="/sprite.svg#icon-transmission" />
            </svg>
            {camper.transmission}
          </span>
          <span>
            <svg width="15" height="13">
              <use href="/sprite.svg#icon-car" />
            </svg>
            {camper.form}
          </span>
        </div>

        <Link
          href={`/catalog/${camper.id}`}
          className={css.showMore}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show more
        </Link>
      </div>
    </article>
  );
}

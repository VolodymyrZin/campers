import Image from 'next/image';
import css from './NothingFound.module.css';

interface NothingFoundProps {
  onViewAll: () => void;
  onClearFilters: () => void;
}

export default function NothingFound({
  onViewAll,
  onClearFilters,
}: NothingFoundProps) {
  return (
    <div className={css.container}>
      <section className={css.wrapper}>
        <Image
          src="/images/camper-not-found-image.png"
          alt="No campers found"
          width={488}
          height={463}
        />
        <div className={css.text}>
          <h1 className={css.title}>No campers found</h1>
          <p className={css.textUp}>
            We couldn`t find any campers that match your filters.
          </p>
          <p className={css.textDown}>
            Try adjusting your search or clearing some filters.
          </p>
        </div>
        <div className={css.actions}>
          <button
            className={css.clearFiltersBtn}
            type="button"
            onClick={onClearFilters}
          >
            <svg width="14" height="14">
              <use href="/sprite.svg#icon-clear-button" />
            </svg>
            Clear filters
          </button>
          <button
            className={css.viewAllCampersBtn}
            type="button"
            onClick={onViewAll}
          >
            View all campers
          </button>
        </div>
      </section>
    </div>
  );
}

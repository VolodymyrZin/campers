import type { Review } from '@/types/camper';
import css from './Reviews.module.css';
import CamperRating from '../CamperRating/CamperRating';

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <section className={css.reviews}>
      <div className={css.list}>
        {reviews.map(review => (
          <article className={css.review} key={review.id}>
            <div className={css.reviewer}>
              <div className={css.avatar}>{review.reviewer_name[0]}</div>

              <div>
                <h3 className={css.reviewer_name}>{review.reviewer_name}</h3>

                <CamperRating rating={review.reviewer_rating} />
              </div>
            </div>

            <p className={css.comment}>{review.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

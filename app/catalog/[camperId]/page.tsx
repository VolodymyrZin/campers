import BookingForm from '@/components/BookingForm/BookingForm';
import CamperGallery from '@/components/CamperGallery/CamperGallery';
import { getCamperById, getReviews } from '@/lib/api/campers';
import css from './CamperPage.module.css';
import VehicleDetails from '@/components/VehicleDetails/VehicleDetails';

interface CamperPageProps {
  params: Promise<{
    camperId: string;
  }>;
}

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;

  const camper = await getCamperById(camperId);
  const reviews = await getReviews(camperId);

  return (
    <main className={css.container}>
      <section className={css.topSection}>
        <div className={css.gallery}>
          <CamperGallery gallery={camper.gallery} camperName={camper.name} />
        </div>

        <div className={css.info}>
          <section className={css.summary}>
            <h1 className={css.camperName}>{camper.name}</h1>

            {/* <div>
              <p>Rating: {camper.rating}</p>
              <p>Reviews: {camper.totalReviews}</p>
              <p>Location: {camper.location}</p>
            </div> */}

            <div className={css.ratingReviewsLocationWrapper}>
              <p className={css.locationLogoRating}>
                <svg width="15" height="14">
                  <use href="/sprite.svg#icon-star" />
                </svg>
                {camper.rating}
              </p>
              <p>
                ({camper.totalReviews} Reviews)
                <svg width="15" height="14">
                  <use href="/sprite.svg#icon-location-active" />
                </svg>
                {camper.location}
              </p>
            </div>

            <p className={css.price}>€{camper.price}</p>

            <p className={css.description}>{camper.description}</p>
          </section>

          <VehicleDetails camper={camper} />
        </div>
      </section>

      <section className={css.bottomSection}>
        <section className={css.reviews}>
          <h2>Reviews</h2>

          {reviews.map(review => (
            <article key={review.id}>
              <h3>{review.reviewer_name}</h3>
              <p>Rating: {review.reviewer_rating}</p>
              <p>{review.comment}</p>
            </article>
          ))}
        </section>

        <BookingForm camperId={camperId} />
      </section>
    </main>
  );
}

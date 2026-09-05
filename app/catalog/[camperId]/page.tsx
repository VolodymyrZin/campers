import BookingForm from '@/components/BookingForm/BookingForm';
import CamperGallery from '@/components/CamperGallery/CamperGallery';
import { getCamperById, getReviews } from '@/lib/api/campers';
import css from './CamperPage.module.css';
import VehicleDetails from '@/components/VehicleDetails/VehicleDetails';
import Reviews from '@/components/Reviews/Reviews';
import type { Metadata } from 'next';

interface CamperPageProps {
  params: Promise<{
    camperId: string;
  }>;
}

export async function generateMetadata({
  params,
}: CamperPageProps): Promise<Metadata> {
  const { camperId } = await params;
  const camper = await getCamperById(camperId);

  return {
    title: `${camper.name} | TravelTrucks`,
    description: camper.description,
  };
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

            <div className={css.ratingReviewsLocationWrapper}>
              <p className={css.locationLogoRating}>
                <svg width="15" height="14">
                  <use href="/sprite.svg#icon-star" />
                </svg>
                {camper.rating}
              </p>
              <p className={css.location}>
                ({camper.totalReviews} Reviews)
                <svg width="15" height="14">
                  <use href="/sprite.svg#icon-location-active" />
                </svg>
                {camper.location.split(', ').reverse().join(', ')}
              </p>
            </div>

            <p className={css.price}>€{camper.price}</p>

            <p className={css.description}>{camper.description}</p>
          </section>

          <VehicleDetails camper={camper} />
        </div>
      </section>

      <h2 className={css.sectionTitle}>Reviews</h2>
      <section className={css.bottomSection}>
        <Reviews reviews={reviews} />

        <BookingForm camperId={camperId} />
      </section>
    </main>
  );
}

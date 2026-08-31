import BookingForm from '@/components/BookingForm/BookingForm';
import { getCamperById, getReviews } from '@/lib/api/campers';

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
    <main>
      <h1>{camper.name}</h1>
      <p>{camper.description}</p>
      <p>€{camper.price}</p>
      <p>Rating: {camper.rating}</p>
      <p>Location: {camper.location}</p>

      <h2>Reviews</h2>

      {reviews.map(review => (
        <article key={review.id}>
          <h3>{review.reviewer_name}</h3>
          <p>Rating: {review.reviewer_rating}</p>
          <p>{review.comment}</p>
        </article>
      ))}
      <h2>Gallery</h2>

      <div>
        {camper.gallery.map(image => (
          <img key={image.id} src={image.original} alt={camper.name} />
        ))}
      </div>
      <BookingForm camperId={camperId} />
    </main>
  );
}

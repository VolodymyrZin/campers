import type { Camper } from '@/types/camper';
import Link from 'next/link';

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <article>
      <img src={camper.coverImage} alt={camper.name} width={219} height={240} />

      <h2>{camper.name}</h2>

      <p>€{camper.price}</p>
      <p>Rating: {camper.rating}</p>
      <p>Reviews: {camper.totalReviews}</p>
      <p>Location: {camper.location}</p>
      <p>Form: {camper.form}</p>
      <p>Transmission: {camper.transmission}</p>
      <p>Engine: {camper.engine}</p>

      <p>Length: {camper.length}</p>
      <p>Width: {camper.width}</p>
      <p>Height: {camper.height}</p>
      <p>Tank: {camper.tank}</p>
      <p>Consumption: {camper.consumption}</p>
      <Link
        href={`/catalog/${camper.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Show more
      </Link>
    </article>
  );
}

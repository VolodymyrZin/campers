import type { CamperDetails } from '@/types/camper';
import css from './VehicleDetails.module.css';
import { capitalize } from '@/helpers/toUpperCase';

interface VehicleDetailsProps {
  camper: CamperDetails;
}

export default function VehicleDetails({ camper }: VehicleDetailsProps) {
  return (
    <section className={css.vehicleDetails}>
      <h2 className={css.vehicleDetailsTitle}>Vehicle details</h2>

      <div className={css.features}>
        <span>{camper.transmission}</span>
        {camper.amenities.map(a => (
          <span key={a}>{a}</span>
        ))}
        <span>{camper.engine}</span>
        <span>{camper.form}</span>
      </div>
      <div className={css.technicalDetails}>
        <div className={css.detailsWrapper}>
          <span>Form</span>
          <span>{capitalize(camper.form)}</span>
        </div>
        <div className={css.detailsWrapper}>
          <span>Length</span>
          <span>{camper.length.replace('m', ' m')}</span>
        </div>
        <div className={css.detailsWrapper}>
          <span>Width</span>
          <span>{camper.width.replace('m', ' m')}</span>
        </div>
        <div className={css.detailsWrapper}>
          <span>Heigth</span>
          <span>{camper.height.replace('m', ' m')}</span>
        </div>
        <div className={css.detailsWrapper}>
          <span>Tank</span>
          <span>{camper.tank.replace('l', ' l')}</span>
        </div>
        <div className={css.detailsWrapper}>
          <span>Consumption</span>
          <span>{camper.consumption.replace('l/', ' l / ')}</span>
        </div>
      </div>
    </section>
  );
}

'use client';

import { createBooking } from '@/lib/api/bookings';
import toast from 'react-hot-toast';
import css from './BookingForm.module.css';

interface BookingFormProps {
  camperId: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    };

    try {
      const response = await createBooking(camperId, body);

      console.log(response);
      toast.success('Booking request sent successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h1 className={css.formTitle}>Book your campervan now</h1>

      <div className={css.formGroup}>
        <label htmlFor="name">Name</label>

        <input
          id="name"
          type="text"
          name="name"
          className={css.input}
          required
        />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          name="email"
          className={css.input}
          required
        />
      </div>

      <div className={css.actions}>
        <button type="submit" className={css.submitButton}>
          Send
        </button>
      </div>
    </form>
  );
}

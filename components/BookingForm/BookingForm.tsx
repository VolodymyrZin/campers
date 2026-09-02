'use client';

import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { createBooking } from '@/lib/api/bookings';
import { BookingRequest } from '@/types/camper';
import css from './BookingForm.module.css';

interface BookingFormProps {
  camperId: string;
}

export const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]+$/, 'Please enter your name.')
    .min(2, 'Please enter your name.')
    .required('Please enter your name.'),
  email: Yup.string()
    .email('Please enter your email.')
    .required('Please enter your email.'),
});

export default function BookingForm({ camperId }: BookingFormProps) {
  const initialValues: BookingRequest = {
    name: '',
    email: '',
  };

  const handleSubmit = async (
    values: BookingRequest,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await createBooking(camperId, values);
      toast.success('Booking request sent successfully!');
      resetForm();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookingSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form} noValidate>
          <h2 className={css.formTitle}>Book your campervan now</h2>
          <p className={css.formSubtitle}>
            Stay connected! We are always ready to help you.
          </p>

          <div className={css.inputWrapper}>
            <div className={css.formGroup}>
              {touched.name && errors.name && (
                <label className={css.floatingLabel}>Name*</label>
              )}
              <div className={css.fieldInner}>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={`${css.input} ${
                    touched.name && errors.name ? css.inputError : ''
                  }`}
                />
                {touched.name && errors.name && (
                  <span className={css.errorIcon}>!</span>
                )}
              </div>
              {touched.name && errors.name && (
                <span className={css.errorMessage}>{errors.name}</span>
              )}
            </div>

            <div className={css.formGroup}>
              {touched.email && errors.email && (
                <label className={css.floatingLabel}>Email*</label>
              )}
              <div className={css.fieldInner}>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={`${css.input} ${
                    touched.email && errors.email ? css.inputError : ''
                  }`}
                />
                {touched.email && errors.email && (
                  <span className={css.errorIcon}>!</span>
                )}
              </div>
              {touched.email && errors.email && (
                <span className={css.errorMessage}>{errors.email}</span>
              )}
            </div>
          </div>

          <div className={css.actions}>
            <button type="submit" className={css.submitButton}>
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

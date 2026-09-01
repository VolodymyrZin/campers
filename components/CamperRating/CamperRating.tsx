'use client';
import { useState } from 'react';
import { RateStar } from 'ratti';
import css from './CamperRating.module.css';

export default function CamperRating({ rating }: { rating: number }) {
  const [value, setValue] = useState(rating);

  return (
    <RateStar
      className={css.star}
      maxRating={5}
      value={value}
      onChange={setValue}
      precision={0.5}
      readOnly
      activeColorsEnabled
      customActiveColors={['#ffc531']}
    />
  );
}

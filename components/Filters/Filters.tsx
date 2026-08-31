'use client';

import { useState } from 'react';
import type { CamperForm } from '@/types/camper';

interface FiltersProps {
  location: string;
  form?: CamperForm;
  onLocationChange: (value: string) => void;
  onFormChange: (value: CamperForm | undefined) => void;
  onSearch: () => void;
}

export default function Filters({
  location,
  form,
  onLocationChange,
  onFormChange,
  onSearch,
}: FiltersProps) {
  return (
    <div>
      <label htmlFor="location">Location</label>

      <input
        id="location"
        type="text"
        name="location"
        placeholder="Enter location"
        value={location}
        onChange={event => onLocationChange(event.target.value)}
      />
      <fieldset>
        <legend>Vehicle type</legend>

        <label>
          <input
            type="radio"
            name="form"
            value=""
            checked={!form}
            onChange={() => onFormChange(undefined)}
          />
          All
        </label>

        <label>
          <input
            type="radio"
            name="form"
            value="alcove"
            checked={form === 'alcove'}
            onChange={() => onFormChange('alcove')}
          />
          Alcove
        </label>

        <label>
          <input
            type="radio"
            name="form"
            value="panel_van"
            checked={form === 'panel_van'}
            onChange={() => onFormChange('panel_van')}
          />
          Panel Van
        </label>

        <label>
          <input
            type="radio"
            name="form"
            value="integrated"
            checked={form === 'integrated'}
            onChange={() => onFormChange('integrated')}
          />
          Integrated
        </label>

        <label>
          <input
            type="radio"
            name="form"
            value="semi_integrated"
            checked={form === 'semi_integrated'}
            onChange={() => onFormChange('semi_integrated')}
          />
          Semi Integrated
        </label>
      </fieldset>
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

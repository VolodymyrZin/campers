'use client';

import { useState } from 'react';

import type { CamperForm, Engine, Transmission } from '@/types/camper';

interface FiltersProps {
  location: string;
  form?: CamperForm;
  engine?: Engine;
  transmission?: Transmission;

  onLocationChange: (value: string) => void;
  onFormChange: (value: CamperForm | undefined) => void;
  onEngineChange: (value: Engine | undefined) => void;
  onTransmissionChange: (value: Transmission | undefined) => void;
  onSearch: () => void;
}

export default function Filters({
  location,
  form,
  engine,
  transmission,
  onLocationChange,
  onFormChange,
  onEngineChange,
  onTransmissionChange,
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
        <legend>Camper form</legend>

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

      <fieldset>
        <legend>Engine</legend>

        <label>
          <input
            type="radio"
            name="engine"
            value="diesel"
            checked={engine === 'diesel'}
            onChange={() => onEngineChange('diesel')}
          />
          Diesel
        </label>

        <label>
          <input
            type="radio"
            name="engine"
            value="petrol"
            checked={engine === 'petrol'}
            onChange={() => onEngineChange('petrol')}
          />
          Petrol
        </label>

        <label>
          <input
            type="radio"
            name="engine"
            value="hybrid"
            checked={engine === 'hybrid'}
            onChange={() => onEngineChange('hybrid')}
          />
          Hybrid
        </label>

        <label>
          <input
            type="radio"
            name="engine"
            value="electric"
            checked={engine === 'electric'}
            onChange={() => onEngineChange('electric')}
          />
          Electric
        </label>
      </fieldset>
      <fieldset>
        <legend>Transmission</legend>
        <label>
          <input
            type="radio"
            name="electric"
            checked={transmission === 'automatic'}
            onChange={() => onTransmissionChange('automatic')}
          />
          Automatic
        </label>

        <label>
          <input
            type="radio"
            name="transmission"
            checked={transmission === 'manual'}
            onChange={() => onTransmissionChange('manual')}
          />
          Manual
        </label>
      </fieldset>
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

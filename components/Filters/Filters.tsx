'use client';

import { useState } from 'react';

interface FiltersProps {
  location: string;
  onLocationChange: (value: string) => void;
  onSearch: () => void;
}

export default function Filters({
  location,
  onLocationChange,
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
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

'use client';


import type { CamperForm, Engine, Transmission } from '@/types/camper';
import css from './Filters.module.css';

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
  onClearFilters: () => void;
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
  onClearFilters,
}: FiltersProps) {
  return (
    <form className={css.form}>
      <label htmlFor="location" className={css.filterTitle}>
        Location
      </label>

      <div className={css.inputWrapper}>
        <svg className={location ? css.iconActive : css.iconInactive}>
          <use
            href={
              location
                ? '/sprite.svg#icon-location-active'
                : '/sprite.svg#icon-location-inactive'
            }
            width="20"
            height="20"
          />
        </svg>
        <input
          className={css.locationField}
          id="location"
          type="text"
          name="location"
          placeholder="City"
          value={location}
          onChange={event => onLocationChange(event.target.value)}
        />
      </div>
      <h1 className={css.title}>Filters</h1>
      <div className={css.fieldsetWrapper}>
        <fieldset className={css.fieldset}>
          <legend className={css.filterTitle}>Camper form</legend>

          <label className={css.filterLabel}>
            <input
              id="alcove"
              className={css.filterName}
              type="radio"
              name="form"
              value="alcove"
              checked={form === 'alcove'}
              onChange={() => onFormChange('alcove')}
            />
            <span className={css.radioWrapper}>
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-radio-button-circle" />
              </svg>
              <svg className={css.radioDot} width="14" height="14">
                <use href="/sprite.svg#icon-radio-button-dot" />
              </svg>
            </span>
            Alcove
          </label>

          <label className={css.filterLabel}>
            <input
              className={css.filterName}
              type="radio"
              name="form"
              value="panel_van"
              checked={form === 'panel_van'}
              onChange={() => onFormChange('panel_van')}
            />
            <span className={css.radioWrapper}>
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-radio-button-circle" />
              </svg>
              <svg className={css.radioDot} width="14" height="14">
                <use href="/sprite.svg#icon-radio-button-dot" />
              </svg>
            </span>
            Panel Van
          </label>

          <label className={css.filterLabel}>
            <input
              className={css.filterName}
              type="radio"
              name="form"
              value="integrated"
              checked={form === 'integrated'}
              onChange={() => onFormChange('integrated')}
            />
            <span className={css.radioWrapper}>
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-radio-button-circle" />
              </svg>
              <svg className={css.radioDot} width="14" height="14">
                <use href="/sprite.svg#icon-radio-button-dot" />
              </svg>
            </span>
            Integrated
          </label>

          <label className={css.filterLabel}>
            <input
              className={css.filterName}
              type="radio"
              name="form"
              value="semi_integrated"
              checked={form === 'semi_integrated'}
              onChange={() => onFormChange('semi_integrated')}
            />
            <span className={css.radioWrapper}>
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-radio-button-circle" />
              </svg>
              <svg className={css.radioDot} width="14" height="14">
                <use href="/sprite.svg#icon-radio-button-dot" />
              </svg>
            </span>
            Semi Integrated
          </label>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.filterTitle}>Engine</legend>

          <label className={css.filterLabel}>
            <input
              className={css.filterName}
              type="radio"
              name="engine"
              value="diesel"
              checked={engine === 'diesel'}
              onChange={() => onEngineChange('diesel')}
            />
            <span className={css.radioWrapper}>
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-radio-button-circle" />
              </svg>
              <svg className={css.radioDot} width="14" height="14">
                <use href="/sprite.svg#icon-radio-button-dot" />
              </svg>
            </span>
            Diesel
          </label>

          <label className={css.filterLabel}>
            <input
              className={css.filterName}
              type="radio"
              name="engine"
              value="petrol"
              checked={engine === 'petrol'}
              onChange={() => onEngineChange('petrol')}
            />
            <span className={css.radioWrapper}>
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-radio-button-circle" />
              </svg>
              <svg className={css.radioDot} width="14" height="14">
                <use href="/sprite.svg#icon-radio-button-dot" />
              </svg>
            </span>
            Petrol
          </label>

          <label className={css.filterLabel}>
            <input
              className={css.filterName}
              type="radio"
              name="engine"
              value="hybrid"
              checked={engine === 'hybrid'}
              onChange={() => onEngineChange('hybrid')}
            />
            <span className={css.radioWrapper}>
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-radio-button-circle" />
              </svg>
              <svg className={css.radioDot} width="14" height="14">
                <use href="/sprite.svg#icon-radio-button-dot" />
              </svg>
            </span>
            Hybrid
          </label>

          <label className={css.filterLabel}>
            <input
              className={css.filterName}
              type="radio"
              name="engine"
              value="electric"
              checked={engine === 'electric'}
              onChange={() => onEngineChange('electric')}
            />
            <span className={css.radioWrapper}>
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-radio-button-circle" />
              </svg>
              <svg className={css.radioDot} width="14" height="14">
                <use href="/sprite.svg#icon-radio-button-dot" />
              </svg>
            </span>
            Electric
          </label>
        </fieldset>
        <fieldset className={css.fieldset}>
          <legend className={css.filterTitle}>Transmission</legend>
          <label className={css.filterLabel}>
            <input
              className={css.filterName}
              type="radio"
              name="electric"
              checked={transmission === 'automatic'}
              onChange={() => onTransmissionChange('automatic')}
            />
            <span className={css.radioWrapper}>
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-radio-button-circle" />
              </svg>
              <svg className={css.radioDot} width="14" height="14">
                <use href="/sprite.svg#icon-radio-button-dot" />
              </svg>
            </span>
            Automatic
          </label>

          <label className={css.filterLabel}>
            <input
              className={css.filterName}
              type="radio"
              name="transmission"
              checked={transmission === 'manual'}
              onChange={() => onTransmissionChange('manual')}
            />
            <span className={css.radioWrapper}>
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-radio-button-circle" />
              </svg>
              <svg className={css.radioDot} width="14" height="14">
                <use href="/sprite.svg#icon-radio-button-dot" />
              </svg>
            </span>
            Manual
          </label>
        </fieldset>
      </div>
      <button className={css.searchButton} type="button" onClick={onSearch}>
        Search
      </button>
      <button
        className={css.clearFiltersButton}
        type="button"
        onClick={onClearFilters}
      >
        <svg width="14" height="14">
          <use href="/sprite.svg#icon-clear-button" />
        </svg>
        Clear filters
      </button>
    </form>
  );
}

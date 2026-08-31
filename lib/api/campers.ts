import type {
  CamperForm,
  Transmission,
  Engine,
  CampersResponse,
  CamperFilters,
  CamperDetails,
} from '@/types/camper';

import { api } from './api';

export interface GetCampersRequest {
  page: number;
  perPage: number;
  location?: string;
  form?: CamperForm;
  transmission?: Transmission;
  engine?: Engine;
}

export async function getCampers({
  page,
  perPage,
  location,
  form,
  transmission,
  engine,
}: GetCampersRequest): Promise<CampersResponse> {
  const response = await api.get<CampersResponse>('/campers', {
    params: {
      page,
      perPage,
      location,
      form,
      transmission,
      engine,
    },
  });

  return response.data;
}

export async function getCamperFilters(): Promise<CamperFilters> {
  const response = await api.get<CamperFilters>('/campers/filters');
  return response.data;
}
export async function getCamperById(camperId: string): Promise<CamperDetails> {
  const response = await api.get<CamperDetails>(`/campers/${camperId}`);
  return response.data;
}

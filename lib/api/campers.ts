import type {
  CamperForm,
  Transmission,
  Engine,
  CampersResponse,
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

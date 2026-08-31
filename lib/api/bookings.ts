import { BookingRequest, BookingResponse } from '@/types/camper';
import { api } from './api';

export async function createBooking(
  camperId: string,
  body: BookingRequest
): Promise<BookingResponse> {
  const response = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    body
  );
  return response.data;
}

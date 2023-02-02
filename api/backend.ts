import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  _request: VercelRequest,
  response: VercelResponse,
) {
  const API_URL = 'https://storage.googleapis.com/coding-session-rest-api';
  const validPlaceIds = ['GXvPAor1ifNfpF0U5PTG0w', 'ohGSnJtMIC5nPfYRi_HTAg'];
  const placesData = await Promise.all(
    validPlaceIds.map((id) => axios.get(`${API_URL}/${id}`))
  );

  const formattedPlacesData = placesData.map(({ data }) => ({
    name: data.displayed_what,
    address: data.displayed_where,
    opening_hours: data.opening_hours,
    url: data.addresses[0].contacts?.filter((({ contact_type }: { contact_type: string }) => contact_type === 'url'))[0].url,
    phone: data.addresses[0].contacts?.filter((({ contact_type }: { contact_type: string }) => contact_type === 'phone'))[0].call_link,
    id: data.local_entry_id,
  }));

  response.status(200).json({
    body: { places: formattedPlacesData },
  });
}
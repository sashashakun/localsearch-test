import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {

  const API_URL = 'https://storage.googleapis.com/coding-session-rest-api';
  const id = 'GXvPAor1ifNfpF0U5PTG0w';
  const { data } = await axios.get(`${API_URL}/${id}`);

  response.status(200).json({
    body: data,
    query: request.query,
    cookies: request.cookies,
  });
}
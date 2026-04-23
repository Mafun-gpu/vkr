import { apiGet } from './client';
import type { Region } from '../types/region';

export function fetchRegions() {
  return apiGet<Region[]>('/api/regions');
}

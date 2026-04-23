import { apiGet } from './client';
import type { DashboardResponse } from '../types/dashboard';

export function fetchDashboard(regionId?: number) {
  const query = regionId ? `?region_id=${regionId}` : '';
  return apiGet<DashboardResponse>(`/api/dashboard${query}`);
}

import { useEffect, useState } from 'react';
import { fetchDashboard } from '../api/dashboard';
import { fetchRegions } from '../api/regions';
import { KpiCards } from '../components/KpiCards';
import { RegionFilter } from '../components/RegionFilter';
import { TopSpecializationsTable } from '../components/TopSpecializationsTable';
import { VacancyDynamicsChart } from '../components/VacancyDynamicsChart';
import type { DashboardResponse } from '../types/dashboard';
import type { Region } from '../types/region';

export function DashboardPage() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [selectedRegionId, setSelectedRegionId] = useState<number | null>(null);
  const [dashboard, setDashboard] = useState<DashboardResponse | null>(null);
  const [loadingRegions, setLoadingRegions] = useState(true);
  const [loadingDashboard, setLoadingDashboard] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRegions() {
      try {
        setLoadingRegions(true);
        const data = await fetchRegions();
        setRegions(data);
        if (data.length > 0) {
          setSelectedRegionId(data[0].id);
        }
      } catch (requestError) {
        setError(requestError instanceof Error ? requestError.message : 'Failed to load regions');
      } finally {
        setLoadingRegions(false);
      }
    }

    loadRegions();
  }, []);

  useEffect(() => {
    if (selectedRegionId === null) {
      return;
    }

    async function loadDashboard() {
      try {
        setLoadingDashboard(true);
        setError(null);
        const data = await fetchDashboard(selectedRegionId);
        setDashboard(data);
      } catch (requestError) {
        setError(requestError instanceof Error ? requestError.message : 'Failed to load dashboard');
      } finally {
        setLoadingDashboard(false);
      }
    }

    loadDashboard();
  }, [selectedRegionId]);

  return (
    <main className="container">
      <header className="page-header">
        <h1 className="page-title">Regional IT Market Analytics</h1>
        <p className="page-subtitle">MVP dashboard for monitoring labor market trends</p>
      </header>

      <RegionFilter
        regions={regions}
        selectedRegionId={selectedRegionId}
        disabled={loadingRegions || loadingDashboard}
        onSelect={setSelectedRegionId}
      />

      {error && <p className="error">Error: {error}</p>}
      {(loadingRegions || loadingDashboard) && <p className="muted">Loading data...</p>}

      {dashboard && !loadingDashboard && (
        <section className="dashboard-grid">
          <KpiCards kpi={dashboard.kpi} />
          <div className="analytics-grid">
            <VacancyDynamicsChart points={dashboard.vacancy_dynamics} />
            <TopSpecializationsTable items={dashboard.top_specializations} />
          </div>
        </section>
      )}
    </main>
  );
}

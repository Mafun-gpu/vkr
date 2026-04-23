import { KpiCards } from '../components/KpiCards';
import { VacancyDynamicsChart } from '../components/VacancyDynamicsChart';
import { TopSpecializationsTable } from '../components/TopSpecializationsTable';
import { RegionFilter } from '../components/RegionFilter';

export function DashboardPage() {
  return (
    <main className="container">
      <h1>IT Market Dashboard (MVP)</h1>
      <RegionFilter />
      <KpiCards />
      <VacancyDynamicsChart />
      <TopSpecializationsTable />
    </main>
  );
}

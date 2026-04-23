import type { KpiMetrics } from '../types/dashboard';

type KpiCardsProps = {
  kpi: KpiMetrics;
};

export function KpiCards({ kpi }: KpiCardsProps) {
  return (
    <section>
      <h2>KPI</h2>
      <div className="kpi-grid">
        <article className="card"><strong>Vacancies</strong><p>{kpi.vacancies}</p></article>
        <article className="card"><strong>Avg Salary</strong><p>{kpi.average_salary}</p></article>
        <article className="card"><strong>Median Salary</strong><p>{kpi.median_salary}</p></article>
        <article className="card"><strong>Competition</strong><p>{kpi.competition_level}</p></article>
        <article className="card"><strong>Remote Share %</strong><p>{kpi.remote_share}</p></article>
      </div>
    </section>
  );
}

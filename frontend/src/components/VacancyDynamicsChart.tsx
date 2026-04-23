import type { DashboardResponse } from '../types/dashboard';

type VacancyDynamicsChartProps = {
  points: DashboardResponse['vacancy_dynamics'];
};

export function VacancyDynamicsChart({ points }: VacancyDynamicsChartProps) {
  const maxValue = Math.max(...points.map((point) => point.count), 1);

  return (
    <section className="card">
      <h2>Vacancy Dynamics</h2>
      {points.map((point) => (
        <div key={point.period} className="chart-row">
          <span>{point.period}</span>
          <div className="chart-bar-wrap">
            <div className="chart-bar" style={{ width: `${(point.count / maxValue) * 100}%` }} />
          </div>
          <span>{point.count}</span>
        </div>
      ))}
    </section>
  );
}

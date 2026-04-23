import type { KpiMetrics } from '../types/dashboard';
import { formatNumber, formatPercent, formatRub } from '../app/format';

type KpiCardsProps = {
  kpi: KpiMetrics;
};

export function KpiCards({ kpi }: KpiCardsProps) {
  const cards = [
    { label: 'Вакансии', value: `${formatNumber(kpi.vacancies)} чел`, tone: 'positive' },
    { label: 'Средняя зарплата', value: formatRub(kpi.average_salary), tone: 'neutral' },
    { label: 'Медианная зарплата', value: formatRub(kpi.median_salary), tone: 'neutral' },
    { label: 'Конкуренция', value: `${formatNumber(kpi.competition_level)} чел/вак.`, tone: 'negative' },
    { label: 'Удалённая работа', value: formatPercent(kpi.remote_share), tone: 'positive' },
  ];

  return (
    <section className="section">
      <h2 className="section-title">KPI Overview</h2>
      <div className="kpi-grid">
        {cards.map((card) => (
          <article key={card.label} className={`kpi-card tone-${card.tone}`}>
            <p className="kpi-label">{card.label}</p>
            <p className="kpi-value">{card.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

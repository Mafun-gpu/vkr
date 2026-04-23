export type KpiMetrics = {
  vacancies: number;
  average_salary: number;
  median_salary: number;
  competition_level: number;
  remote_share: number;
};

export type DashboardResponse = {
  kpi: KpiMetrics;
  vacancy_dynamics: Array<{ period: string; count: number }>;
  top_specializations: Array<{ name: string; count: number }>;
};

export type KpiMetrics = {
  vacancies: number;
  averageSalary: number;
  medianSalary: number;
  competitionLevel: number;
  remoteShare: number;
};

export type DashboardResponse = {
  kpi: KpiMetrics;
  vacancyDynamics: Array<{ period: string; count: number }>;
  topSpecializations: Array<{ name: string; count: number }>;
};

from pydantic import BaseModel


class KpiMetrics(BaseModel):
    vacancies: int
    average_salary: int
    median_salary: int
    competition_level: float
    remote_share: float


class VacancyDynamicsPoint(BaseModel):
    period: str
    count: int


class TopSpecialization(BaseModel):
    name: str
    count: int


class DashboardResponse(BaseModel):
    kpi: KpiMetrics
    vacancy_dynamics: list[VacancyDynamicsPoint]
    top_specializations: list[TopSpecialization]

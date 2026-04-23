from app.schemas.dashboard import DashboardResponse
from app.seed.mock_data import DASHBOARD_MOCK


def get_dashboard_data(region_id: int | None = None) -> DashboardResponse:
    # Simple MVP placeholder: return static mock payload.
    # Region filtering logic will be added later.
    _ = region_id
    return DashboardResponse(**DASHBOARD_MOCK)

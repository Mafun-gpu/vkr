from fastapi import APIRouter, Query

from app.schemas.dashboard import DashboardResponse
from app.services.dashboard_service import get_dashboard_data

router = APIRouter()


@router.get('/dashboard', response_model=DashboardResponse)
def get_dashboard(region_id: int | None = Query(default=None)) -> DashboardResponse:
    return get_dashboard_data(region_id=region_id)

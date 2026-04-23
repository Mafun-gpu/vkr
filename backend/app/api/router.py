from fastapi import APIRouter

from app.api.dashboard import router as dashboard_router
from app.api.health import router as health_router
from app.api.regions import router as regions_router

api_router = APIRouter()
api_router.include_router(health_router, tags=["health"])
api_router.include_router(regions_router, tags=["regions"])
api_router.include_router(dashboard_router, tags=["dashboard"])

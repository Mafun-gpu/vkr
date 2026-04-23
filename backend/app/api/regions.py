from fastapi import APIRouter

from app.schemas.region import Region
from app.seed.mock_data import REGIONS

router = APIRouter()


@router.get('/regions', response_model=list[Region])
def get_regions() -> list[Region]:
    return REGIONS

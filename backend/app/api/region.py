from fastapi import APIRouter
from app.services.region_service import get_region_costs

router = APIRouter()


@router.get("/api/v1/regions")
def regions():
    return get_region_costs()
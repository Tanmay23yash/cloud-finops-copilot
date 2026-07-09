from fastapi import APIRouter
from app.services.service_service import get_service_costs

router = APIRouter()


@router.get("/api/v1/services")
def services():
    return get_service_costs()
from fastapi import APIRouter
from app.services.cost_service import get_cloud_costs

router = APIRouter()

@router.get("/cost")
def cost():
    return get_cloud_costs()
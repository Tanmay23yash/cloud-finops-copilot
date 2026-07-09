from fastapi import APIRouter
from app.services.trend_service import get_spend_trend

router = APIRouter()

@router.get("/api/v1/spend-trend")
def spend_trend():
    return get_spend_trend()
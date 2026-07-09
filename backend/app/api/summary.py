from fastapi import APIRouter
from app.models.summary_model import SummaryResponse
from app.services.summary_service import get_summary

router = APIRouter()


@router.get("/api/v1/summary", response_model=SummaryResponse)
def summary():
    return get_summary()
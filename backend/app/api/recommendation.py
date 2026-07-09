from fastapi import APIRouter
from app.services.recommendation_service import get_recommendations

router = APIRouter()


@router.get("/api/v1/recommendations")
def recommendations():
    return get_recommendations()
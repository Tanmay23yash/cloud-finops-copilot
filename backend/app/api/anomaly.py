from fastapi import APIRouter
from app.services.anomaly_service import detect_anomalies

router = APIRouter()


@router.get("/api/v1/anomalies")
def anomalies():
    return detect_anomalies()
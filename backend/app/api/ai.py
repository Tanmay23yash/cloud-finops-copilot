from fastapi import APIRouter
from pydantic import BaseModel

from app.services.ai_service import ask_finops_ai
from app.services.anomaly_service import detect_anomalies

router = APIRouter()


class AIRequest(BaseModel):
    question: str


@router.post("/api/v1/ask-ai")
def ask_ai(request: AIRequest):

    anomalies = detect_anomalies()

    answer = ask_finops_ai(
        request.question,
        anomalies
    )

    return {
        "answer": answer
    }
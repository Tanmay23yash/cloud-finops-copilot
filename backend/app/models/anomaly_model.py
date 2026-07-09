from pydantic import BaseModel

class AnomalyResponse(BaseModel):
    date: str
    region: str
    service: str
    currentCost: float
    previousCost: float
    increasePercent: float
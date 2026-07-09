from pydantic import BaseModel


class SummaryResponse(BaseModel):
    totalSpend: float
    potentialSavings: float
    activeAlerts: int
    totalResources: int
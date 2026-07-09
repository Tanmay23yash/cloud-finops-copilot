from fastapi import FastAPI

from app.api.cost import router as cost_router
from app.api.summary import router as summary_router
from app.api.trend import router as trend_router
from app.api.region import router as region_router
from app.api.service import router as service_router


app = FastAPI()

app.include_router(cost_router)
app.include_router(summary_router)
app.include_router(trend_router)
app.include_router(region_router)
app.include_router(service_router)

@app.get("/")
def home():
    return {
        "message": "Cloud FinOps Copilot Backend Running 🚀"
    }
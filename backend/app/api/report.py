from fastapi import APIRouter
from fastapi.responses import FileResponse

from app.services.report_service import generate_report

router = APIRouter()


@router.get("/api/v1/report")
def report():

    pdf = generate_report()

    return FileResponse(
        pdf,
        media_type="application/pdf",
        filename="Weekly_Report.pdf"
    )
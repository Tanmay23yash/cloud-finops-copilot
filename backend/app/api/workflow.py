from fastapi import APIRouter

router = APIRouter()


@router.post("/api/v1/recommendations/{resource}/approve")
def approve(resource: str):

    return {
        "status": "approved",
        "resource": resource,
        "message": "Recommendation approved successfully."
    }


@router.post("/api/v1/recommendations/{resource}/reject")
def reject(resource: str):

    return {
        "status": "rejected",
        "resource": resource,
        "message": "Recommendation rejected successfully."
    }
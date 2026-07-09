from app.services.recommendation_service import get_recommendations


def calculate_savings():

    recommendations = get_recommendations()

    monthly = sum(
        item["estimatedSaving"]
        for item in recommendations
    )

    return {
        "monthlySavings": round(monthly, 2),
        "yearlySavings": round(monthly * 12, 2),
        "recommendations": len(recommendations)
    }
from app.utils.csv_reader import read_cloud_cost_data


def get_recommendations():

    df = read_cloud_cost_data()

    recommendations = []

    for _, row in df.iterrows():

        if row["cpu"] < 20 and row["memory"] < 30:

            recommendations.append({
                "resource": row["resource"],
                "region": row["region"],
                "service": row["service"],
                "cpu": row["cpu"],
                "memory": row["memory"],
                "currentCost": row["cost"],
                "recommendation": "Downsize to t3.small",
                "estimatedSaving": round(row["cost"] * 0.40, 2),
                "reason": "CPU and Memory utilization consistently below threshold"
            })

    return recommendations
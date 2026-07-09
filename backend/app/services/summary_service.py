from app.utils.csv_reader import read_cloud_cost_data


def get_summary():

    df = read_cloud_cost_data()

    total_spend = df["cost"].sum()

    total_resources = len(df)

    return {
        "totalSpend": round(total_spend, 2),
        "potentialSavings": 420,
        "activeAlerts": 2,
        "totalResources": total_resources
    }
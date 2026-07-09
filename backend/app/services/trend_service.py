from app.utils.csv_reader import read_cloud_cost_data


def get_spend_trend():
    df = read_cloud_cost_data()

    trend = (
        df.groupby("date")["cost"]
          .sum()
          .reset_index()
    )

    return trend.to_dict(orient="records")
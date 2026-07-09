from app.utils.csv_reader import read_cloud_cost_data


def detect_anomalies():
    df = read_cloud_cost_data()

    df = df.sort_values("date")

    anomalies = []

    grouped = df.groupby(["region", "service"])

    for (_, _), group in grouped:

        group = group.sort_values("date")

        previous = None

        for _, row in group.iterrows():

            if previous is not None:

                if row["cost"] > previous * 1.5:

                    anomalies.append({
                        "date": row["date"],
                        "region": row["region"],
                        "service": row["service"],
                        "currentCost": row["cost"],
                        "previousCost": previous,
                        "increasePercent": round(
                            ((row["cost"] - previous) / previous) * 100,
                            2
                        )
                    })

            previous = row["cost"]

    return anomalies
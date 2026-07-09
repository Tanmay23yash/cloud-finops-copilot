from app.utils.csv_reader import read_cloud_cost_data


def get_service_costs():
    df = read_cloud_cost_data()

    service_costs = (
        df.groupby("service")["cost"]
        .sum()
        .reset_index()
        .sort_values(by="cost", ascending=False)
    )

    return service_costs.to_dict(orient="records")
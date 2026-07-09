from app.utils.csv_reader import read_cloud_cost_data


def get_region_costs():
    df = read_cloud_cost_data()

    region_costs = (
        df.groupby("region")["cost"]
        .sum()
        .reset_index()
        .sort_values(by="cost", ascending=False)
    )

    return region_costs.to_dict(orient="records")
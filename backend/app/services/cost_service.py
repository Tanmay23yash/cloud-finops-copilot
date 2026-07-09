from app.utils.csv_reader import read_cloud_cost_data

def get_cloud_costs():
    df = read_cloud_cost_data()
    return df.to_dict(orient="records")
from pathlib import Path
import pandas as pd

DATA_DIR = Path(__file__).resolve().parents[2] / "data"

def read_cloud_cost_data():
    csv_path = DATA_DIR / "cloud_cost.csv"
    return pd.read_csv(csv_path)
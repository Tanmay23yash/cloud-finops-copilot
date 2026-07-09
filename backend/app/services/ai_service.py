import os
from pathlib import Path

from dotenv import load_dotenv
from google import genai

BASE_DIR = Path(__file__).resolve().parents[2]
load_dotenv(BASE_DIR / ".env")

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def ask_finops_ai(question: str, anomalies: list):

    prompt = f"""
You are an expert Cloud FinOps Engineer.

Current detected anomalies:

{anomalies}

User Question:
{question}

Answer in a professional but concise manner.

Include:
1. Likely root cause.
2. Business impact.
3. Cost optimization recommendation.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    return response.text
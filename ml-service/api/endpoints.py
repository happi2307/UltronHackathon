from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import pandas as pd

app = FastAPI()

# Load ML models
expense_predictor = joblib.load('../models/expense_predictor.pkl')
investment_analyzer = joblib.load('../models/investment_analyzer.pkl')

class TransactionData(BaseModel):
    amount: float
    category: str
    date: str
    description: str

@app.post("/predict/expenses")
async def predict_expenses(data: TransactionData):
    try:
        prediction = expense_predictor.predict([[
            data.amount,
            data.category,
            pd.to_datetime(data.date).dayofweek
        ]])
        return {"predicted_category": prediction[0]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/analyze/investment")
async def analyze_investment(data: dict):
    try:
        risk_score = investment_analyzer.predict_proba([[
            data["amount"],
            data["duration"],
            data["risk_tolerance"]
        ]])
        return {
            "risk_score": float(risk_score[0][1]),
            "recommendations": generate_recommendations(risk_score[0][1])
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def generate_recommendations(risk_score: float):
    if risk_score < 0.3:
        return ["Consider low-risk bonds", "Focus on stable dividend stocks"]
    elif risk_score < 0.7:
        return ["Mix of growth stocks and bonds", "Consider index funds"]
    else:
        return ["Growth stocks", "Consider emerging markets"] 
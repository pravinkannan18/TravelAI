from pydantic import BaseModel
from typing import Any, Dict, List, Optional


class TripPlanRequest(BaseModel):
    source: str
    destination: str
    budget: str
    dates: str
    days: int
    travelers: int = 2
    accommodation_preference: str = "Any"


class TripPlanResponse(BaseModel):
    # Keep flexible - AI returns structured JSON; accept arbitrary nested content
    data: Dict[str, Any]

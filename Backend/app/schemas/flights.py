from pydantic import BaseModel, Field
from typing import List, Optional


class FlightSegment(BaseModel):
    airline: Optional[str] = None
    flight_number: Optional[str] = None
    departure_time: Optional[str] = None
    arrival_time: Optional[str] = None


class FlightOption(BaseModel):
    price: float = Field(..., description="Price in selected currency raw number")
    airline: Optional[str] = None
    flight_number: Optional[str] = None
    departure_airport: Optional[str] = None
    arrival_airport: Optional[str] = None
    departure_time: Optional[str] = None
    arrival_time: Optional[str] = None
    duration_minutes: Optional[int] = None
    stops: Optional[int] = None


class FlightSearchRequest(BaseModel):
    departure_id: str
    arrival_id: str
    outbound_date: str
    adults: int = 1
    travel_class: str = "ECONOMY"
    currency: str = "USD"


class FlightSearchResponse(BaseModel):
    flights: List[FlightOption]

from fastapi import APIRouter
from ..schemas.flights import FlightSearchRequest, FlightSearchResponse
from ..services.flights import search_google_flights


router = APIRouter(prefix="/flights", tags=["flights"])


@router.post("/search", response_model=FlightSearchResponse)
def search_flights(payload: FlightSearchRequest):
    results = search_google_flights(payload)
    return {"flights": results}
from fastapi import APIRouter
from ..schemas.flights import FlightSearchRequest, FlightSearchResponse
from ..services.flights import search_google_flights


router = APIRouter(prefix="/flights", tags=["flights"])


@router.post("/search", response_model=FlightSearchResponse)
def search_flights(req: FlightSearchRequest):
    flights = search_google_flights(req)
    return {"flights": flights}

from fastapi import APIRouter, Query
from ..services.aviationstack import lookup_airport
from ..schemas.airports import AirportLookupResponse


router = APIRouter(prefix="/airports", tags=["airports"])


@router.get("/lookup", response_model=AirportLookupResponse)
def get_airport(city: str = Query(..., description="City name to lookup airport for")):
    airport = lookup_airport(city)
    return {"airport": airport}

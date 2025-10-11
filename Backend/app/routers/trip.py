from fastapi import APIRouter
from ..schemas.trip import TripPlanRequest, TripPlanResponse
from ..services.aviationstack import lookup_airport
from ..services.flights import search_google_flights
from ..services.trip_planner import plan_trip
from ..schemas.flights import FlightSearchRequest


router = APIRouter(prefix="/trip", tags=["trip"])


@router.post("/plan", response_model=TripPlanResponse)
def plan_trip_endpoint(payload: TripPlanRequest):
    src_airport = lookup_airport(payload.source)
    dst_airport = lookup_airport(payload.destination)

    real_flights = []
    if src_airport and dst_airport and src_airport.iata_code and dst_airport.iata_code:
        # Try to fetch some real flights for the first date in the range if parseable
        dates = payload.dates.split(" to ")
        outbound = dates[0] if dates else ""
        f_req = FlightSearchRequest(
            departure_id=src_airport.iata_code,
            arrival_id=dst_airport.iata_code,
            outbound_date=outbound or "",
        )
        real_flights = [f.model_dump() for f in search_google_flights(f_req)[:3]]

    data = plan_trip(
        user_input=payload.model_dump(),
        source_airport=src_airport.model_dump() if src_airport else None,
        dest_airport=dst_airport.model_dump() if dst_airport else None,
        real_flights=real_flights,
    )
    return {"data": data or {}}

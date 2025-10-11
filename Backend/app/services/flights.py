from typing import List, Optional
import requests
from ..core.config import settings
from ..schemas.flights import FlightOption, FlightSearchRequest


def search_google_flights(req: FlightSearchRequest, rapidapi_key: Optional[str] = None) -> List[FlightOption]:
    key = rapidapi_key or settings.rapidapi_key
    if not key:
        return []

    url = "https://google-flights2.p.rapidapi.com/api/v1/searchFlights"
    params = {
        "departure_id": req.departure_id,
        "arrival_id": req.arrival_id,
        "outbound_date": req.outbound_date,
        "travel_class": req.travel_class,
        "adults": str(req.adults),
        "currency": req.currency,
        "language_code": "en-US",
        "country_code": "US",
        "search_type": "best",
    }
    headers = {
        "x-rapidapi-key": key,
        "x-rapidapi-host": "google-flights2.p.rapidapi.com",
    }

    try:
        resp = requests.get(url, headers=headers, params=params, timeout=15)
        data = resp.json()
    except Exception:
        return []

    if not data or not data.get("status"):
        return []

    itineraries = (data.get("data") or {}).get("itineraries") or {}
    flights = (itineraries.get("topFlights") or []) + (itineraries.get("otherFlights") or [])

    results: List[FlightOption] = []
    for f in flights:
        price = f.get("price")
        dep_time = f.get("departure_time")
        arr_time = f.get("arrival_time")
        airline = None
        flight_number = None
        if f.get("flights"):
            first_leg = f["flights"][0]
            airline = first_leg.get("airline")
            flight_number = first_leg.get("flight_number")

        if price is None:
            continue
        results.append(
            FlightOption(
                price=float(price),
                airline=airline,
                flight_number=flight_number,
                departure_time=dep_time,
                arrival_time=arr_time,
            )
        )

    # Sort by price ascending
    results.sort(key=lambda x: x.price)
    return results

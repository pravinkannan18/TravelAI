from typing import Optional
import requests
from ..core.config import settings
from ..schemas.airports import Airport


def lookup_airport(city_name: str, api_key: Optional[str] = None) -> Optional[Airport]:
    key = api_key or settings.aviationstack_api_key
    if not key:
        return None

    url = f"http://api.aviationstack.com/v1/airports"
    params = {"access_key": key, "search": city_name}

    try:
        resp = requests.get(url, params=params, timeout=10)
        if resp.status_code != 200:
            return None
        payload = resp.json()
        data = payload.get("data") or []
        if not data:
            return None
        a = data[0]
        return Airport(
            city=a.get("city_name", city_name),
            iata_code=a.get("iata_code") or "",
            airport_name=a.get("airport_name") or "",
            country=a.get("country_name"),
            latitude=a.get("latitude"),
            longitude=a.get("longitude"),
        )
    except Exception:
        return None

from pydantic import BaseModel


class Airport(BaseModel):
    city: str
    iata_code: str
    airport_name: str
    country: str | None = None
    latitude: float | None = None
    longitude: float | None = None


class AirportLookupResponse(BaseModel):
    airport: Airport | None

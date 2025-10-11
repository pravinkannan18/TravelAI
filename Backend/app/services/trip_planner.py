from typing import Any, Dict, List, Optional
import json
import re
from groq import Groq
from ..core.config import settings


def _extract_json(text: str) -> Optional[Dict[str, Any]]:
    # Try fenced code block first
    m = re.search(r"```json\n(.*?)\n```", text, re.DOTALL)
    raw = None
    if m:
        raw = m.group(1)
    else:
        m = re.search(r"\{.*\}", text, re.DOTALL)
        if m:
            raw = m.group(0)
        else:
            raw = text
    try:
        return json.loads(raw)
    except Exception:
        return None


def plan_trip(
    user_input: Dict[str, Any],
    source_airport: Optional[Dict[str, Any]],
    dest_airport: Optional[Dict[str, Any]],
    real_flights: Optional[List[Dict[str, Any]]] = None,
    groq_api_key: Optional[str] = None,
) -> Optional[Dict[str, Any]]:
    key = groq_api_key or settings.groq_api_key
    if not key:
        return None

    client = Groq(api_key=key)

    source_airport_str = (
        f"{source_airport.get('iata_code', '')} - {source_airport.get('airport_name', '')}"
        if source_airport
        else f"{user_input['source']} Airport"
    )
    dest_airport_str = (
        f"{dest_airport.get('iata_code', '')} - {dest_airport.get('airport_name', '')}"
        if dest_airport
        else f"{user_input['destination']} Airport"
    )

    real_flights_str = "No real-time flight data available."
    if real_flights:
        lines = ["Real Flight Data (samples):"]
        for f in real_flights[:3]:
            lines.append(
                f"- {f.get('airline','')} {f.get('flight_number','')} | Price: {f.get('price','')} | Stops: {f.get('stops','')}"
            )
        real_flights_str = "\n".join(lines)

    prompt = f"""
You are a professional travel planner. Use the details below to create a complete JSON-only trip plan. Ensure costs fit within the total budget.

Source City: {user_input['source']}
Source Airport: {source_airport_str}
Destination City: {user_input['destination']}
Destination Airport: {dest_airport_str}
Total Budget: {user_input['budget']}
Travel Dates: {user_input['dates']}
Trip Duration: {user_input['days']} days
Travelers: {user_input.get('travelers', 2)}
Accommodation Preference: {user_input.get('accommodation_preference', 'Any')}

{real_flights_str}

Output strictly valid JSON with keys: trip_summary, flight_options, accommodation_options, daily_itinerary, transportation, cost_breakdown, additional_recommendations, booking_options. Keep numbers in INR format where appropriate.
"""

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are a meticulous travel planner. Always return strictly valid JSON with realistic costs and coherent structure.",
            },
            {"role": "user", "content": prompt},
        ],
        temperature=0.6,
        max_tokens=4096,
        top_p=1,
    )

    text = completion.choices[0].message.content
    return _extract_json(text)

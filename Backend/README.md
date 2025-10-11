# TravelAI Backend (FastAPI)

A clean, production-ready API replacing Streamlit scripts with a proper service layer and REST endpoints.

## Endpoints
- GET /api/health
- GET /api/airports/lookup?city=Chennai
- POST /api/flights/search
- POST /api/trip/plan

## Setup
1. Create a `.env` from `.env.example` and fill your API keys:
   - GROQ_API_KEY
   - AVIATIONSTACK_API_KEY
   - RAPIDAPI_KEY

2. Install dependencies and run (Windows PowerShell):

```powershell
cd Backend
python -m venv .venv; .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
$env:GROQ_API_KEY="..."; $env:AVIATIONSTACK_API_KEY="..."; $env:RAPIDAPI_KEY="..."
uvicorn app.main:app --reload --port 8000
```

## Docker
Build and run the backend container:

```powershell
cd Backend
docker build -t travelai-backend .
docker run --rm -p 8000:8000 --env-file .env travelai-backend
```

## Example Requests
- Airports lookup:
```http
GET http://localhost:8000/api/airports/lookup?city=Chennai
```

- Flight search:
```http
POST http://localhost:8000/api/flights/search
Content-Type: application/json

{
  "departure_id": "MAA",
  "arrival_id": "BOM",
  "outbound_date": "2025-11-05",
  "adults": 1,
  "travel_class": "ECONOMY",
  "currency": "INR"
}
```

- Trip plan:
```http
POST http://localhost:8000/api/trip/plan
Content-Type: application/json

{
  "source": "Chennai",
  "destination": "Mumbai",
  "budget": "₹50000",
  "dates": "2025-11-05 to 2025-11-09",
  "days": 5,
  "travelers": 2,
  "accommodation_preference": "3-Star"
}
```

## Notes
- Existing Streamlit files are preserved; you can remove them once the frontend consumes the new API.
- No secrets are hard-coded; use env vars.
- Timeouts and minimal error handling are included; expand as needed.📌 Overview

The Personalized AI Trip Planner is an intelligent travel assistant that integrates LLMs (Large Language Models) with real-time flight data APIs to generate dynamic, personalized itineraries. It considers user preferences like source, destination, budget, and travel dates, and delivers optimized trip plans in natural language.

🚀 Features

✈️ Flight Integration – Fetch live flight schedules and pricing using Aviation APIs.

🤖 AI-Powered Itinerary Generation – Uses OpenAI/gpt-oss-20b (via Groq Cloud) for customized trip planning.

⚡ Real-Time Recommendations – Low-latency, budget-aware, and preference-driven results.

🛠️ Prompt Optimization – Structured, role-based, and constraint-aware prompting for accurate itineraries.

🔐 Secure API Handling – Manages Aviation API & AI model API keys safely.

🌐 Scalable Deployment – Supports modular integration with Python, Flask, or Streamlit apps.

🧠 Research Background

LLMs: GPT-4, GPT-5, Cohere Models, Groq Cloud Models (LLaMA, Qwen, Mistral).

Model Used: openai/gpt-oss-20b hosted on Groq Cloud for cost-effectiveness and scalability.

API Keys: Aviation API (flight search & pricing) + AI API for itinerary generation.

🔄 Workflow

User Input → Source, Destination, Budget, Dates.

Fetch Flights → Using Aviation API.

Generate Trip Plan → AI model (gpt-oss-20b) produces itinerary.

Output → Customized day-wise travel plan with flights, hotels, and attractions.

📊 Example Use Case

User Request:

“Plan me a 5-day trip to Paris from Mumbai starting Oct 15 under $800.”

System Response:

Flight details (filtered by budget).

AI-generated itinerary (day-wise plan, hotels, attractions, activities).

Real-time customization and re-generation.

🔑 Key Learnings

LLMs can optimize multi-turn dialogs for better personalization.

Prompt engineering significantly improves factual accuracy.

Aviation APIs + AI generate scalable, real-time travel solutions.

Secure handling of API keys is critical.

👨‍💻 Contributors

Subhasri – LLM Research

Sathiyapriya – API Key Research

Sahana – Implementation

Swetha – Prompt Optimization

Veera Sangavi – Aviation API Integration

Velvizhi – Final Implementation & Output

📜 License

This project is licensed under the MIT License – feel free to use and modify.



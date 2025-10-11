from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.config import settings
from .routers import health as health_router
from .routers import airports as airports_router
from .routers import flights as flights_router
from .routers import trip as trip_router


def create_app() -> FastAPI:
    app = FastAPI(title=settings.app_name)

    # CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Routers
    app.include_router(health_router.router, prefix=settings.api_prefix)
    app.include_router(airports_router.router, prefix=settings.api_prefix)
    app.include_router(flights_router.router, prefix=settings.api_prefix)
    app.include_router(trip_router.router, prefix=settings.api_prefix)

    return app


app = create_app()

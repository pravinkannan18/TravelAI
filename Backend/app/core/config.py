from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    app_name: str = "TravelAI Backend"
    environment: str = "development"
    api_prefix: str = "/api"
    cors_origins: list[str] = ["*"]

    # External APIs
    groq_api_key: Optional[str] = None
    aviationstack_api_key: Optional[str] = None
    rapidapi_key: Optional[str] = None

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()

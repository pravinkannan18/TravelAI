from fastapi import APIRouter
from ..core.config import settings


router = APIRouter(prefix="/health", tags=["health"])


@router.get("", summary="Health check")
def health_check():
    return {"status": "ok", "app": settings.app_name, "env": settings.environment}

import httpx


def get_http_client(timeout: float = 15.0) -> httpx.Client:
    return httpx.Client(timeout=timeout)


def get_async_http_client(timeout: float = 15.0) -> httpx.AsyncClient:
    return httpx.AsyncClient(timeout=timeout)

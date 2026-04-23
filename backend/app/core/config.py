from pydantic import BaseModel


class Settings(BaseModel):
    app_name: str = "IT Market Monitoring API"
    api_prefix: str = "/api"


settings = Settings()

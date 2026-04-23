from fastapi.testclient import TestClient

from app.main import app


def test_dashboard_returns_mock_payload() -> None:
    client = TestClient(app)
    response = client.get('/api/dashboard')
    assert response.status_code == 200

    payload = response.json()
    assert 'kpi' in payload
    assert 'vacancy_dynamics' in payload
    assert 'top_specializations' in payload

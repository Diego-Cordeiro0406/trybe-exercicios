from fastapi.testclient import TestClient

from app import app

client = TestClient(app)


def test_app():
    response = client.get('/')
    response.status_code == 300

    response.json() == {}

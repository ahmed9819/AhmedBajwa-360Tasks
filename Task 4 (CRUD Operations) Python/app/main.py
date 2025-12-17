from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create app instance
app = FastAPI(title="My Backend API")

# CORS (Optional, frontend communication)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # frontend URL daal sakte ho
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Home route
@app.get("/")
def home():
    return {"message": "Maaz is chutia!"}

# Example route
@app.get("/api/hello")
def hello():
    return {"msg": "Hello World"}

# Run command in terminal:
# uvicorn app.main:app --reload

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# ------------------------------
# PostgreSQL DATABASE URL
# ------------------------------
# Format:
# postgresql://username:password@host:port/database_name

DATABASE_URL = "postgresql://postgres:yourpassword@localhost:5432/mydb"

# ------------------------------
# SQLAlchemy Configuration
# ------------------------------
engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# ------------------------------
# Dependency (FastAPI uses this)
# ------------------------------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

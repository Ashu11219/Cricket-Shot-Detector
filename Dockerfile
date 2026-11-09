# Base image: a small Linux with Python 3.12 already installed
FROM python:3.12-slim-bookworm

# All following commands run inside /app in the container
WORKDIR /app

# Copy only requirements first, so Docker can reuse the installed packages
# on later deploys when only your code changed
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Now copy the rest of the project (app.py, static/, the .keras model)
COPY . .

# Cloud Run tells the app which port to use through the PORT variable
CMD exec uvicorn app:app --host 0.0.0.0 --port ${PORT:-8080}

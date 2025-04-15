FROM python:3.13.3-alpine AS server

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache gcc musl-dev libffi-dev

COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

FROM python:3.13.2-alpine AS server

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache gcc musl-dev libffi-dev

COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

EXPOSE 5000

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers=2", "app:create_app()"]
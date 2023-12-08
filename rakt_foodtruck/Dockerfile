FROM python:3.9-slim

# Install GDAL dependencies
RUN apt-get update && apt-get install -y \
  binutils \
  libproj-dev \
  gdal-bin \
  python3-gdal

WORKDIR /app

COPY . /app

ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

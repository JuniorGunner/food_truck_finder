.PHONY: build run stop shell migrations migrate createsuperuser staticfiles test

# Docker commands
build:
	docker-compose build

run:
	docker-compose up

stop:
	docker-compose down

shell:
	docker-compose exec web /bin/bash

# Django commands
migrations:
	docker-compose exec web python manage.py makemigrations

migrate:
	docker-compose exec web python manage.py migrate

createsuperuser:
	docker-compose exec web python manage.py createsuperuser

staticfiles:
	docker-compose exec web python manage.py collectstatic

test:
	docker-compose exec web python manage.py test

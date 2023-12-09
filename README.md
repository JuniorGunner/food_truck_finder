# FoodTruck Finder Project

Welcome to the FoodTruck Finder Project! This guide will help you get the project up and running on your local machine using Docker. 🚀

## Prerequisites

Before you begin, make sure you have the following installed:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Clone the repository to your local machine:

```bash
git clone https://your-repository-url.git
cd your-project-directory
```

Build the Project 🏗️
To build the Docker images for the project, run:

```bash
make build
```

This command builds the necessary Docker images as defined in your docker-compose.yml file.

Run the Project 🎉
To start the project, use:

```bash
make run
```

This will start all the services defined in your docker-compose.yml file. You can access the web application at http://localhost:8000.

Stop the Project 🛑
To stop the project and remove the containers, use:

```bash
make stop
```

Database Migrations 📚
Run the migrations with:

```bash
make migrations
make migrate
```

These commands create new migration files and apply them to the database, respectively.

Create Superuser Account 👤
To create a superuser account for the Django admin, run:

```bash
make createsuperuser
```

Follow the prompts to set up the username, email, and password.

Populate the Database with Food Trucks 🍔
To populate the database with food trucks from a CSV file, run:

```bash
make populate_trucks
```

Make sure your CSV file is in the correct format and located in the project directory.

Collect Static Files 📁
To collect static files into the static directory, run:

```bash
make collectstatic
```
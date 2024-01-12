# FoodTruck Finder Project

Welcome to the FoodTruck Finder Project! This guide will help you get the project up and running on your local machine using Docker. 🚀

## Tech Stack 🛠️
* Django;
* Django REST Framework;
* Docker;

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
## Examples of use:

### Searching on map (it will filter by applicant, address or food_item)
![image](https://github.com/JuniorGunner/P1-Submission-Claudemir-SF-Junior/assets/12654382/3cc0c19c-b846-46fd-95ed-ec6b52843eb0)

### Listing all foodtrucks (if you don't see any after populate the DB, click search once - fix todo)
![image](https://github.com/JuniorGunner/P1-Submission-Claudemir-SF-Junior/assets/12654382/1b1bf209-3630-4fba-bb24-c8eb2719d9bb)

### Searching by name (applicant)
![image](https://github.com/JuniorGunner/P1-Submission-Claudemir-SF-Junior/assets/12654382/bf85c5a6-4b8e-4d9c-aed7-9cad99be40fd)

### Using DRF browsable API interface (http://localhost:8000/api/) 
![image](https://github.com/JuniorGunner/P1-Submission-Claudemir-SF-Junior/assets/12654382/b09a92b1-fd86-430c-a0d5-afddb94db08b)

### http://localhost:8000/api/foodtrucks/
![image](https://github.com/JuniorGunner/P1-Submission-Claudemir-SF-Junior/assets/12654382/82514a32-4ab3-4b92-bea9-972ee6712987)

### Filtering (click on "Filters" button at the left of "Options" blue button)
![image](https://github.com/JuniorGunner/P1-Submission-Claudemir-SF-Junior/assets/12654382/9a7d9954-2e2b-4d2b-beab-41db536f1e24)
![image](https://github.com/JuniorGunner/P1-Submission-Claudemir-SF-Junior/assets/12654382/7b8d4344-4f9f-4674-b2c0-1d23f60ebfa7)

### Using Postman
![image](https://github.com/JuniorGunner/P1-Submission-Claudemir-SF-Junior/assets/12654382/71a1136c-8efb-4607-84e6-dc938ff3fe18)


# NestJS To-Do list management post API

## Project Overview
NestJS To-Do API is a simple backend for managing to-do lists related to social media post management. This API is built using NestJS, PostgreSQL, and Prisma ORM, and is documented using Swagger. For easier deployment, the API is also containerized with Docker.

## API Endpoints
- GET /post - Get all post data
- POST /post - Create a new post
- GET /post/{id} - Get a post by ID
- PATCH /post/{id} - Update a post by ID
- DELETE /post/{id} - Delete a post by ID


## Tech Stack
- NestJS: A modular, fast, and scalable backend framework based on TypeScript.
- PostgreSQL: A relational database used to store post data.
- Prisma ORM: A modern ORM that simplifies interactions with the PostgreSQL database.
- Swagger (OpenAPI): Interactive API documentation.
- Docker: Used for containerization, making deployment easier. 



# Docker Setup
1. Clone the repository
2. Create a .env file and add the following configuration:
    ```bash
    DATABASE_URL="postgresql://user:user123@database:5432/post_db?schema=public"
    ```
3. Build and start the services with Docker:
    ```bash
    # First-time container build
    $ docker-compose up --build
    ``` 
4. Open Swagger for API documentation:
    ```bash
    http://localhost:3000/api/docs
    ``` 
5. Stop container:
    ```bash
    $ docker-compose down
    ``` 
6. Run container without rebuilding:
    ```bash
    $ docker-compose up
    ``` 


# Local Setup
1. Clone the repository
2. Install dependencies:
    ```bash 
    $ npm install
    ``` 
3. Create a .env file and follow the [.env.example](https://github.com/Annantar4/to-do-list-management-posts-api/blob/master/.env.example) file
4. Run Prisma migrations:
    ```bash 
    $ npx prisma
    ``` 
    ```bash 
    $ npx prisma init
    ```
    ```bash 
    $ npx prisma migrate dev --name init
    ```
5. Compile and run the project:
    ```bash
    # development
    $ npm run start

    # watch mode
    $ npm run start:dev

    # production mode
    $ npm run start:prod
    ```
6. Open Swagger for API documentation:
    ```bash
    http://localhost:3000/api/docs
    ``` 
  

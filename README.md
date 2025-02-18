
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

# Swagger Documentation
Once the API is running, you can access the documentation at http://localhost:3000/api/docs or refer to the [SwaggerDocumentation.pdf](https://github.com/Annantar4/to-do-list-management-posts-api/blob/master/SwaggerDocumentation.pdf) file.

Example requests/responses: 
- Get all post data (GET /post)
  
  Response:
  
  ![image](https://github.com/user-attachments/assets/3b334cfd-9a14-420e-9f47-a226715d015a)

- Create a new post (POST /post)

  Request Body:

  ![image](https://github.com/user-attachments/assets/1b06422f-1327-48a2-82e0-a3459279664d)

  Response:

  ![image](https://github.com/user-attachments/assets/0181e712-e359-4349-b65d-9bd9355c6950)

- Get a post by ID (GET /post/{id})

  Param:

  ![image](https://github.com/user-attachments/assets/1e61ff4c-a967-42fe-93c1-30d3686263c1)

  Response:

  ![image](https://github.com/user-attachments/assets/378806a0-7328-4909-ab10-3b2ba407e937)

- Update a post by ID (PATCH /post/{id})

  Param:

  ![image](https://github.com/user-attachments/assets/55f2f962-b37b-449e-81e0-dd82f14093cf)

  Request Body:

  ![image](https://github.com/user-attachments/assets/d9463843-22a4-47a6-88da-855ef0dd2be2)

  Response:

  ![image](https://github.com/user-attachments/assets/87e71969-285a-4a1a-ad51-8cf95bc83a7e)

- Delete a post by ID (DELETE /post/{id})

  Param:

  ![image](https://github.com/user-attachments/assets/6eb03799-37de-4585-b5f6-d9c12c7be216)
  
  Response:

  ![image](https://github.com/user-attachments/assets/029bdeab-f366-425f-851c-644ed3819516)



   




  






















  

  

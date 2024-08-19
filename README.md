# Restaurant Menu Project
This project is a Next.js application for a restaurant menu that allows users to view different dishes and their details.

## Getting Started
Follow the steps below to set up and run the project.

### Prerequisites
- [Docker](https://www.docker.com/) installed on your machine.
- [Node.js](https://nodejs.org/) installed.

### Installation
1. **Initialize a MySQL database using Docker**
`docker run --name restaurant-db -e MYSQL_ROOT_PASSWORD=YOUR_PASS -e MYSQL_DATABASE=restaurant -p 3306:3306 -d mysql:latest`
2. **Import the SQL file containing the initial data:**
`docker exec -i restaurant-db mysql -u root -pYOUR_PASS restaurant < path/to/backup.sql`
4. **Open project and `run npm install` to install dependencies**
3. **Rename .env copy.local  to .env.local and update it**
```
MYSQL_HOST=127.0.0.1
MYSQL_USER=YOUR_USERNAME
MYSQL_PASSWORD=YOUR_PASS
MYSQL_DATABASE=restaurant
NEXT_PUBLIC_API_URL=http://localhost:3000
```
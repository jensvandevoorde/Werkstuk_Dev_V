# Werkstuk Development V

# GET endpoint players info

This endpoint shows the info of all the players

# POST endpoint players info

This endpoint lets you create new players en insert them in the database

# UPDATE endpoint players info

This endpoint lets you update a specific player based on id with a new username and password

# DELETE endpoint players info

This endpoint lets you delete a specific player based on id

# GET endpoint genders

This endpoint shows the info of all the genders

# POST endpoint genders

This endpoint lets you create new genders en insert them in the database

# UPDATE endpoint genders

This endpoint lets you update a specific gender based on id with a new gender

# DELETE endpoint genders

This endpoint lets you delete a specific gender based on id

# Startup

In the .env file you write:
port = 3000

POSTGRES_USER=tester
POSTGRES_PASSWORD=test
POSTGRES_DB=players

In the terminal(you do this to create containers and images in the docker desktop):
docker-compose up --build

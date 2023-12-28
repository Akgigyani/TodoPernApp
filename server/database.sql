CREATE DATABASE todoapp;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE DATABASE jwt_authentication;

CREATE TABLE users(
    user_id PRIMARY KEY DEFAULT
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
)

-- INSERT INTO users (user_name, user_email, user_password) VALUES ('Zuruck', 'zuruckstifler@yahoo.com', 'zur1886');

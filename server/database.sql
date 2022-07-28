CREATE DATABASE purplehat;

CREATE TABLE info(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(20)

);
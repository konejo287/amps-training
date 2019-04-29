-- Database: store

-- DROP DATABASE store;

CREATE DATABASE store
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	

-- Create table customers

CREATE TABLE customers (

	id SERIAL PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30) NOT NULL
);

CREATE TABLE orders (

	id SERIAL PRIMARY KEY,
	order_time_stamp TIMESTAMP NOT NULL,
	customer_id INT REFERENCES customers (id)
);

INSERT INTO customers (first_name, last_name)
values('mario', 'arcos'),
	  ('meme', 'mcCloud'),
	  ('troy', 'lombardi');

INSERT INTO orders (order_time_stamp, customer_id)
values ('2019-05-22 19:10:25', 1),
	   ('2019-06-20 11:11:25', 2);

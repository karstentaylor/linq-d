BEGIN;

TRUNCATE
users;

INSERT INTO users (id, email, name, password, admin, create_date, bio, dealbreakers, reviews, rating)
VALUES

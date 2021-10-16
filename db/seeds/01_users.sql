
-- table restart method

--1 delte all records in table

--delete from users;
--delete from maps;
--delete from favorites;

--2 restart autoincrement at 1

--ALTER SEQUENCE users_id_seq RESTART WITH 1;
--ALTER SEQUENCE maps_id_seq RESTART WITH 1;
--ALTER SEQUENCE favorites_id_seq RESTART WITH 1;

INSERT INTO users(name, email, password)
VALUES ('Fred Flintstone', 'fred@flintstone.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Barney Rubble', 'barney@rubble.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Dino', 'dino@bambam.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO maps(name, description, user_id, thumbnail_image, longitude, latitude)
VALUES ('Calgary1', 'map of Calgary', 1, 'thumb1', -114.0617764874172, 51.05578274706852),
('Vancouver1', 'map of Vancouver', 1, 'thumb2', -123.12081634019962, 49.26690039195626),
('Edmonton1', 'map of Edmonton', 1, 'thumb3', -113.49446426565282, 53.55097987990605),
('Vancouver2', 'map 2 of Vancouver', 2, 'thumb4', -123.12081634019962, 49.26690039195626),
('Edmonton2', 'map 2 of Edmonton', 2, 'thumb5', -113.49446426565282, 53.55097987990605);

INSERT INTO favorites(user_id, map_id)
VALUES (2, 2),
(2, 4),
(2,5);


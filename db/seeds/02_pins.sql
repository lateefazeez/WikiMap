

--1 delte all records in table

--delete from layers;
--delete from pins;

--2 restart autoincrement at 1

--ALTER SEQUENCE layers_id_seq RESTART WITH 1;
--ALTER SEQUENCE pins_id_seq RESTART WITH 1;

INSERT INTO layers(title, user_id)
VALUES ('main layer', 2);

INSERT INTO pins(contributor_id, map_id, title, description, thumbnail_image, longitude, latitude, layer_id)
VALUES (2, 1, 'sadledome', 'hockey arean in CGY', 'someimage', -114.0519126441508, 51.0375718810928, 1),
(2, 2, 'kits beach', 'popular beach in Vancouver', 'beachpic', -123.15403584863392, 49.27507560274855, 1),
(2, 2, 'stanley park', 'huge park in Van', 'parkpic', -123.14562549326236, 49.30241499050775, 1),
(2, 4, 'kits beach', 'popular beach in Vancouver', 'beachpic', -123.15403584863392, 49.27507560274855, 1),
(2, 1, 'Calgary zoo', 'who knew they had a zoo?', 'zebrepic', -114.02366765778092, 51.04833704292234, 1);

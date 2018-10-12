CREATE TABLE product
(
  product_id SERIAL PRIMARY KEY NOT NULL,
  product_name VARCHAR(40) NOT NULL,
  product_description VARCHAR(80) NOT NULL,
  product_price INTEGER NOT NULL,
  product_img_url TEXT NOT NULL
);
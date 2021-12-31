Create table IF not exists  car(
    License   varchar(20),
    color varchar(10),
    manufacturer varchar(10),
    model varchar(30),
    year int,
    price_per_day int,
    primary key (License)
    );
Create table IF not exists customer(

    username varchar(20),
    email varchar(20),
    name varchar(30),
    password varchar(20),

    primary key (username),
    primary key (email)
);
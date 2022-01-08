Create table IF not exists  car(
    License   varchar(20),
    color varchar(10),
    manufacturer varchar(20),
    car_type varchar(30),
    model varchar(30),
    year int,
    price_per_day int,
    car_status varchar(20),
    region varchar (30),
    image varchar(200),
    primary key (License)
    );
Create table IF not exists customer(

    username varchar(20),
    email varchar(20) unique,
    name varchar(30),
    password varchar(20),
    primary key (username)
);
Create table IF not exists reservations(
     License varchar(20),
     username varchar(20),
     start_date date,
     end_date date,
     reservation_status varchar(30),
     payment int,
     payment_status varchar(30),
     primary key(License,username,start_date,end_date),
     foreign key (License) references car(License),
     foreign key (username) references customer(username)
) ;
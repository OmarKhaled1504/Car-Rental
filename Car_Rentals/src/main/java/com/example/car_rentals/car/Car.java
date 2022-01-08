package com.example.car_rentals.car;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "car")
public class Car {
    @Id
    String License;
    String Color;
    String manufacturer;
    String car_type ;
    String model;
    int year;
    int price_per_day ;
    String car_status ;
    String region ;
    String image ;


    public Car() {

    }

    public Car(String License, String Color, String manufacturer,String car_type, String model, int year,int price_per_day,String car_status,String region,String image) {
        this.License = License;
        this.Color = Color;
        this.manufacturer = manufacturer;
        this.car_type = car_type ;
        this.model = model;
        this.year = year;
        this.price_per_day = price_per_day ;
        this.car_status = car_status ;
        this.region = region ;
    }

    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )

    @Column(
            name = "Id",
            nullable = false,
            precision = 0
    )

    public String getLicense() {
        return this.License;
    }
    public void setLicense(String license) {
        this.License = license;
    }
    public String getColor() {
        return this.Color;
    }

    public void setColor(String color) {
        this.Color = color;
    }

    public String getManufacturer() {
        return this.manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getCar_type() {
        return this.car_type;
    }

    public void setCar_type(String car_type) {
        this.car_type = car_type;
    }

    public String getModel() {
        return this.model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getPrice_per_day() {
        return this.price_per_day;
    }

    public void setPrice_per_day(int price_per_day) {
        this.price_per_day = price_per_day;
    }

    public String getCar_status() {
        return this.car_status;
    }

    public void setCar_status(String car_status) {
        this.car_status = car_status;
    }

    public String getRegion() {
        return this.region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String toString (){
        return "Car{License='" + this.License + "', Color='" + this.Color + "',  manufacturer='" + this.manufacturer + "',car_type = '" +this.car_type +"', model='" + this.model + "', year = '" + this.year + "',price_per_day = '" + this.price_per_day + "',status = '" +this.car_status + "',region = '" +this.region + "',image = '" +this.image+"'}";
    }
}

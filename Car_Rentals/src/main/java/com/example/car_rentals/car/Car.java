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
    String model;
    int year;
    int price_per_day ;

    public Car() {

    }

    public Car(String License, String Color, String manufacturer, String model, int year) {
        this.License = License;
        this.Color = Color;
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.price_per_day = price_per_day ;
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

    public String toString (){
        return "Car{License='" + this.License + "', Color='" + this.Color + "',  manufacturer='" + this.manufacturer + "', model='" + this.model + "', year = '" + this.year + "',price_per_day = '" + this.price_per_day + "'}";
    }
}

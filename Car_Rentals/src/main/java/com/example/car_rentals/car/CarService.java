package com.example.car_rentals.car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarService {
    private final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getCars(Car car) {
        List<String> carTypes = new ArrayList<>();
        List<String> colors = new ArrayList<>();
        List<String> licenses = new ArrayList<>();
        List<String> manufacturers = new ArrayList<>();
        List<String> models = new ArrayList<>();
        List<String> regions = new ArrayList<>();
        List<Integer> year = new ArrayList<>();
        List<String> status = new ArrayList<>();
        int maxPrice;
        if (car.getCar_type().equals("null")) {
            carTypes = this.carRepository.getAllTypes();
            System.out.println(carTypes);
        } else {
            carTypes.add(car.getCar_type());
        }
        if (car.getColor().equals("null")) {
            colors = this.carRepository.getAllColors();
            System.out.println(colors);
        } else {
            colors.add(car.getColor());
        }
        if (car.getManufacturer().equals("null")) {
            manufacturers = this.carRepository.getAllManufacturer();
            System.out.println(manufacturers);
        } else {
            manufacturers.add(car.getManufacturer());
        }
        if (car.getLicense().equals("null")) {
            licenses = this.carRepository.getAllLicense();
            System.out.println(licenses);
        } else {
            licenses.add(car.getLicense());
        }
        if (car.getModel().equals("null")) {
            models = this.carRepository.getAllModel();
            System.out.println(models);
        } else {
            models.add(car.getModel());
        }
        if (car.getRegion().equals("null")) {
            regions = this.carRepository.getAllRegions();
            System.out.println(regions);
        } else {
            regions.add(car.getRegion());
        }
        if (car.getPrice_per_day() == 0) {
            maxPrice = this.carRepository.getMaxPrice();
            System.out.println(maxPrice);
        } else {
            maxPrice = car.getPrice_per_day();
        }
        if (car.getYear() == 0) {
            year = this.carRepository.getAllyear();
            System.out.println(year);
        } else {
            year.add(car.getYear());
        }
        if (! car.getCar_status().equals("All")) {
            status.add(car.getCar_status());
        } else {
            status.add("Available");
            status.add("Out of Service");
        }
        return this.carRepository.filter(carTypes, colors, licenses, manufacturers, models, regions, maxPrice,year,status);
    }

    public void addNewCar(Car car) {
        this.carRepository.insert(car.getLicense(), car.getColor(), car.getManufacturer(), car.getCar_type(), car.getModel(), car.getYear(), car.getPrice_per_day(), car.getCar_status(), car.getRegion(), car.getImage());
    }

    public List<Car> filter(Car car) {
        return null;
    }

    public List<Car> getActive() {
        return this.carRepository.getActive();
    }

    void modify(String license, String status) {
        this.carRepository.modify(license, status);
    }
}


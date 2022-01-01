package com.example.car_rentals.car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List ;
@Service
public class CarService {
    private final CarRepository carRepository ;
    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getCars() {
        return this.carRepository.findAll();
    }

    public void addNewCar(Car car) {
        this.carRepository.insert(car.getLicense(), car.getColor(), car.getManufacturer(), car.getModel(),car.getYear(),car.getPrice_per_day(),car.getStatus());
    }
}


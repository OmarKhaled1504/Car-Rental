package com.example.car_rentals.car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List ;
@RestController
@RequestMapping(
        path = {"api/v1/car"}
)


public class CarController {
    private final CarService carService ;
    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }
    @GetMapping
    public List<Car> getCars() {
        return this.carService.getCars();
    }
    @PostMapping
    public void addNewCar(@RequestBody Car car) {
        System.out.println(car);
        this.carService.addNewCar(car);
    }
}



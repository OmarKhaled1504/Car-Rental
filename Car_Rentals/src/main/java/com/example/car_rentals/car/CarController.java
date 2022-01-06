package com.example.car_rentals.car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List ;
@RestController
@RequestMapping(
        path = {"api/v1/car"}
)
@CrossOrigin

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

    @PostMapping("/insert")
    public void addNewCar(@RequestBody Car car) {
        System.out.println(car);
        this.carService.addNewCar(car);
    }
    @PostMapping("/modify/{license}/{status}")
    public void modify(@PathVariable String license, @PathVariable String status) {
        this.carService.modify(license,status);
    }




}



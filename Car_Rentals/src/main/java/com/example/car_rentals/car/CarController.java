package com.example.car_rentals.car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping(
        path = {"api/v1/car"}
)

public class CarController {
    private final CarService carService;

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping("/filterUser")
    public List<Car> filterUser(@RequestParam List<String> color, @RequestParam  List<String> region,
                                @RequestParam List<String> type, @RequestParam String startDate,
                                @RequestParam String endDate, @RequestParam(defaultValue = "0") String price) {
        System.out.println(color.isEmpty());
        System.out.println(region.isEmpty());
        System.out.println(price);
        int pricee = Integer.parseInt(price);
        return this.carService.getUserCars(color,region,type,startDate,endDate,pricee);
    }

    @GetMapping("/filter")
    public List<Car> filter(@RequestParam(defaultValue = "null") String License, @RequestParam (defaultValue = "null") String Color,
                            @RequestParam (defaultValue = "null") String Manufacturer, @RequestParam(defaultValue = "null") String Model,
                            @RequestParam(defaultValue = "0") String year, @RequestParam(defaultValue = "null") String office,
                            @RequestParam (defaultValue = "0" )String price_day, @RequestParam(defaultValue = "Available") String carStatus,
                            @RequestParam(defaultValue = "null") String carType) {

        List<Car> result = this.carService.getCars(License,Color,Manufacturer,Model,year,office,price_day,carStatus,carType);
        System.out.println(result);
        return result;
    }
//
//    @GetMapping("/filterSearch")
//    public List<Car> getFilter(@RequestParam List<String> Color, @RequestParam String username) {
//        return null;
//    }

    @PostMapping("/insert")
    public void addNewCar(@RequestBody Car car) {
        System.out.println(car);
        this.carService.addNewCar(car);
    }

    @PostMapping("/modify/{license}/{status}")
    public void modify(@PathVariable String license, @PathVariable String status) {
        this.carService.modify(license, status);
    }


}



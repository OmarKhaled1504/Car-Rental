package com.example.car_rentals.reservations;
import java.util.Dictionary;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Tuple;

@RestController
@RequestMapping(
        path = {"api/v1/reservations"}
)
public class reservationsController {
    private final reservationsService reservationsService;

    @Autowired
    public reservationsController(reservationsService reservationsService) {
        this.reservationsService = reservationsService;
    }

    @GetMapping
    public List<reservations> getReservations() {
        return this.reservationsService.getReservations();
    }

    @PostMapping
    public void addNewReservation(@RequestBody reservations reservations) {
        System.out.println(reservations);
        this.reservationsService.addNewReservation(reservations);
    }

    @GetMapping("/details")
    public  List<Map<String,Object>> getAllDetails(@RequestParam (defaultValue = "null") String License,@RequestParam(defaultValue = "null") String username,@RequestParam(defaultValue = "null") String name,
                                                   @RequestParam(defaultValue = "null") String manufacturer,@RequestParam(defaultValue = "null") String model,@RequestParam(defaultValue = "0") String payment){
        return this.reservationsService.getAllDetails();
    }
}

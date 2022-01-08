package com.example.car_rentals.reservations;
import java.util.Dictionary;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public  List<Map<String,Object>> getAllDetails(){
        return this.reservationsService.getAllDetails();
    }
}

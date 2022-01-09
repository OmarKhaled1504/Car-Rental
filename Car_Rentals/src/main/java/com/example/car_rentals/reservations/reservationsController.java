package com.example.car_rentals.reservations;
import java.time.LocalDate;
import java.util.Dictionary;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Tuple;

@RestController
@CrossOrigin("http://localhost:3000/")
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
    public  List<Map<String,Object>> getAllDetails(@RequestParam(defaultValue = "null") String license,
                                                   @RequestParam(defaultValue = "null") String username,
                                                   @RequestParam(defaultValue = "null") String startDate,
                                                   @RequestParam(defaultValue = "All") String reservationStatus,
                                                   @RequestParam(defaultValue = "All") String paymentStatus){
        return this.reservationsService.getAllDetails(license,username,startDate,reservationStatus,paymentStatus);
    }
}

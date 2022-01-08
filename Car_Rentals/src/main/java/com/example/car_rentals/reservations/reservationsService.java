package com.example.car_rentals.reservations;
import java.util.Dictionary;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Tuple;

@Service



public class reservationsService {
    private final reservationsRepository reservationsRepository;

    @Autowired
    public reservationsService(reservationsRepository reservationsRepository) {
        this.reservationsRepository = reservationsRepository;
    }

    public List<reservations> getReservations() {
        return this.reservationsRepository.findAll();
    }

    public void addNewReservation(reservations reservations) {
        this.reservationsRepository.insert(reservations.getLicense(), reservations.getUsername(),reservations.getStart_date(),reservations.getEnd_date(),reservations.getReservation_status(),reservations.getPayment(),reservations.getPayment_status());
;    }

    public  List<Map<String,Object>> getAllDetails() {
        return this.reservationsRepository.getAllDetails();
    }
}

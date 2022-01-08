package com.example.car_rentals.reservations;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service



public class reservationsService {
    private final reservationsRepository reservationsRepository;


    @Autowired

    public reservationsService(reservationsRepository reservationsRepository ) {
        this.reservationsRepository = reservationsRepository;


    }

    public List<reservations> getReservations() {
        return this.reservationsRepository.findAll();
    }

    public void addNewReservation(reservations reservations) {
        this.reservationsRepository.insert(reservations.getLicense(), reservations.getUsername(), reservations.getStart_date(), reservations.getEnd_date(), reservations.getReservation_status(), reservations.getPayment(), reservations.getPayment_status());
        ;
    }

    public List<Map<String, Object>> getAllDetails() {
        return this.reservationsRepository.getAllDetails();
    }

    public List<reservations> reservation_filter(reservations reservations) {
        List<String> usernames = new ArrayList<>();
        List<String> licenses = new ArrayList<>();
        List<LocalDate> dates = new ArrayList<>();
        List<Integer> payments = new ArrayList<>();
        if (reservations.getUsername().equals("null")) {
            usernames = this.reservationsRepository.getAllUsers();
        } else {
            usernames.add(reservations.username);
        }
        if (reservations.getLicense().equals("null")) {
            licenses = this.reservationsRepository.getAllLicenses();
        } else {
            licenses.add(reservations.License);
        }
        if (reservations.getStart_date().equals("null")) {
            dates = this.reservationsRepository.getAllDates();
        } else {
            dates.add(reservations.start_date);
        }
        if (reservations.getPayment() == 0) {
            payments = this.reservationsRepository.getAllPayments();
        } else {
            payments.add(reservations.payment);
        }
    return this.reservationsRepository.reservations_filter(usernames,licenses,dates,payments) ;
    }
}





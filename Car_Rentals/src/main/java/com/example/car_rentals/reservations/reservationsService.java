package com.example.car_rentals.reservations;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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

    public List<Map<String, Object>> getAllDetails(String license,String userName,String startDate,String reservationStatus, String paymentStatus) {
        List<String> usernames = new ArrayList<>();
        List<String> licenses = new ArrayList<>();
        String date ;
        List<String> payments = new ArrayList<>();
        List<String> reservations = new ArrayList<>();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/mm/dd");
        if (userName.equals("null")) {
            usernames = this.reservationsRepository.getAllUsers();
        } else {
            usernames.add(userName);
        }

        if (license.equals("null")) {
            licenses = this.reservationsRepository.getAllLicenses();
        } else {
            licenses.add(license);
        }

        if (startDate.equals("null")) {
            date = this.reservationsRepository.getDate();
        } else {
           // date = LocalDate.parse(startDate, formatter);
            date = startDate;
        }

        if (paymentStatus.equals("All")) {
                payments.add("Paid");
                payments.add("Not Paid");
        } else {
            payments.add(paymentStatus);
        }

        if (reservationStatus.equals("All")) {
            reservations.add("Incoming");
            reservations.add("Picked Up");
        } else {
            reservations.add(reservationStatus);
        }

        return this.reservationsRepository.getAllDetails(licenses,usernames,date,reservations,payments);
    }
//    public List<Map<String, Object>> getAllDetails() {
//        return this.reservationsRepository.getAllDetails();
//    }

//    public List<reservations> reservation_filter(reservations reservations) {
//        List<String> usernames = new ArrayList<>();
//        List<String> licenses = new ArrayList<>();
//        List<LocalDate> dates = new ArrayList<>();
//        List<Integer> payments = new ArrayList<>();
//        if (reservations.getUsername().equals("null")) {
//            usernames = this.reservationsRepository.getAllUsers();
//        } else {
//            usernames.add(reservations.username);
//        }
//        if (reservations.getLicense().equals("null")) {
//            licenses = this.reservationsRepository.getAllLicenses();
//        } else {
//            licenses.add(reservations.License);
//        }
//        if (reservations.getStart_date().equals("null")) {
//            dates = this.reservationsRepository.getAllDates();
//        } else {
//            dates.add(reservations.start_date);
//        }
//        if (reservations.getPayment() == 0) {
//            payments = this.reservationsRepository.getAllPayments();
//        } else {
//            payments.add(reservations.payment);
//        }
//        return null;
////    return this.reservationsRepository.reservations_filter(usernames,licenses,dates,payments) ;
//    return this.reservationsRepository.reservations_filter(usernames,licenses,dates,payments) ;
//    }
}





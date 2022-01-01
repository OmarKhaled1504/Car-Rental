package com.example.car_rentals.reservations;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        this.reservationsRepository.insert(reservations.getLicense(), reservations.getUsername(),reservations.getStart_date(),reservations.getEnd_date(),reservations.getStatus());
;    }
}

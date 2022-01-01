package com.example.car_rentals.reservations;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

public class composite_reservations implements Serializable {
    private String License ;
    private String username ;
    private LocalDate start_date ;
    private LocalDate end_date ;



    public composite_reservations(){

    }
}

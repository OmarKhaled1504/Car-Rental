package com.example.car_rentals.reservations;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "reservations")
@IdClass(composite_reservations.class)
public class reservations {
    @Id
    String License ;
    @Id
    String username ;
    @Id
    LocalDate start_date ;
    @Id
    LocalDate end_date ;
    String status ;
    public reservations(){

    }
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(
            name = "Id",
            nullable = false,
            precision = 0
    )

    public String getLicense() {
        return this.License;
    }

    public void setLicense(String license) {
        License = license;
    }
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(
            name = "Id",
            nullable = false,
            precision = 0
    )

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(
            name = "Id",
            nullable = false,
            precision = 0
    )

    public LocalDate getStart_date() {
        return this.start_date;
    }

    public void setStart_date(LocalDate start_date) {
        this.start_date = start_date;
    }
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(
            name = "Id",
            nullable = false,
            precision = 0
    )

    public LocalDate getEnd_date() {
        return this.end_date;
    }

    public void setEnd_date(LocalDate end_date) {
        this.end_date = end_date;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    public String toString() {
        return "reservations{License='" + this.License + "', username='" + this.username + "', start_date='" + this.start_date + "', end_date='" + this.end_date + "',status = '" + this.status + "'}";
    }

}

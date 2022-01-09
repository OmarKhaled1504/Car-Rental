package com.example.car_rentals.reservations;

import com.example.car_rentals.customer.customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Repository
public interface reservationsRepository extends JpaRepository<reservations, composite_reservations> {

    @Transactional
    @Modifying
    @Query(
            value = "Insert into reservations(License,username,start_date,end_date,reservation_status,payment,payment_status) " +
                    "values (:License,:username,:start_date,:end_date,:reservation_status,:payment,:payment_status)",
            nativeQuery = true)
    void insert(@Param("License") String License, @Param("username") String username, @Param("start_date") LocalDate start_date, @Param("end_date") LocalDate end_date, @Param("reservation_status") String reservation_status, @Param("payment") int payment, @Param("payment_status") String payment_status);

    @Transactional
    @Query(
            value = "SELECT reservations.License, reservations.username, reservations.start_date" +
                    ", reservations.end_date, reservations.reservation_status, " +
                    "customer.email, customer.name, car.color," +
                    "car.manufacturer, car.model, car.year, " +
                    "car.price_per_day" +
                    " FROM `reservations` " +
                    "JOIN customer " +
                    "ON customer.username=reservations.username " +
                    "JOIN car " +
                    "On car.License= reservations.License;",
            nativeQuery = true)
    List<Map<String, Object>> getAllDetails();
    @Query(
            value = "SELECT distinct reservations.username from reservations",
            nativeQuery = true
    )
    List<String> getAllUsers () ;
    @Query(
            value = "SELECT distinct reservations.start_date from reservations",
            nativeQuery = true
    )
    List<LocalDate> getAllDates () ;
    @Query(
            value = "SELECT distinct reservations.license from reservations",
            nativeQuery = true
    )
    List<String> getAllLicenses () ;
    @Query(
            value = "SELECT distinct reservations.payment from reservations",
            nativeQuery = true
    )
    List<Integer> getAllPayments ();


    List<reservations> reservations_filter (@Param("username") List<String> usernames, @Param("license") List<String> licenses,@Param("start_date") List<LocalDate> dates,@Param("payment") List<Integer> payments) ;

}

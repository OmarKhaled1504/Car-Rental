package com.example.car_rentals.reservations;

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
            value = "Insert into reservations(License,username,start_date,end_date,status,payment,payment_stat) " +
                    "values (:License,:username,:start_date,:end_date,:status,:payment,:payment_stat)",
            nativeQuery = true)
    void insert(@Param("License") String License, @Param("username") String username, @Param("start_date") LocalDate start_date, @Param("end_date") LocalDate end_date, @Param("status") String status, @Param("payment") int payment, @Param("payment_stat") String payment_stat);

    @Transactional
    @Query(
            value = "SELECT reservations.License, reservations.username, reservations.start_date" +
                    ", reservations.end_date, reservations.status, " +
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
}

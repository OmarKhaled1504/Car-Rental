package com.example.car_rentals.reservations;

import com.example.car_rentals.car.Car;
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
                    ", reservations.end_date, reservations.reservation_status, reservations.payment, " +
                    "customer.email, customer.name, car.color," +
                    "car.manufacturer, car.model, car.year, " +
                    "car.price_per_day" +
                    " FROM `reservations` " +
                    "JOIN customer " +
                    "ON customer.username=reservations.username " +
                    "JOIN car " +
                    "On car.License= reservations.License where " +
                    "((reservations.License in :Licenses) and (reservations.username in :usernames) and (reservations.start_date >= :start_date) and (reservations.reservation_status in :reservations) and (reservations.payment_status in :payments))",
            nativeQuery = true)
    List<Map<String, Object>> getAllDetails(@Param("Licenses") List<String> Licenses, @Param("usernames") List<String> usernames, @Param("start_date") String start_date, @Param("reservations") List<String> reservations, @Param("payments") List<String> payments);

    @Query(
            value = "SELECT distinct reservations.username from reservations",
            nativeQuery = true
    )
    List<String> getAllUsers();

    @Query(
            value = "SELECT distinct reservations.start_date from reservations",
            nativeQuery = true
    )
    List<LocalDate> getAllDates();

    @Query(
            value = "SELECT distinct reservations.license from reservations",
            nativeQuery = true
    )
    List<String> getAllLicenses();

    @Query(
            value = "SELECT distinct reservations.payment from reservations",
            nativeQuery = true
    )
    List<Integer> getAllPayments();

    @Query(
            value = "SELECT min(reservations.start_date) from reservations",
            nativeQuery = true
    )
    String getDate();


    @Query(
            value = "SELECT reservations.License, reservations.username, reservations.start_date" +
                    ", reservations.end_date, reservations.reservation_status, reservations.payment, " +
                    "customer.email, customer.name, car.color," +
                    "car.manufacturer, car.model, car.year,car.car_type" +
                    " FROM `reservations` " +
                    "JOIN customer " +
                    "ON customer.username=reservations.username " +
                    "JOIN car " +
                    "On car.License= reservations.License where reservations.username = :username ",
            nativeQuery = true
    )
    List<Map<String, Object>> getUserReservation(@Param("username") String username);


    @Modifying
    @Transactional
    @Query(value = "UPDATE reservations SET payment_status = 'Paid' WHERE License = :license and username = :username and start_date = :start_date and end_date = :end_date",
            nativeQuery = true)
    void modify(@Param("username") String username, @Param("license") String license, @Param("start_date") String start_date, @Param("end_date") String end_date);

    @Query(value = "Select COUNT(*) as count , sum(payment) as sum" +
                    " FROM reservations where reservations.start_date between :start_date and :end_date",

            nativeQuery = true)
    List<Map<String, Object>> getReports(@Param("start_date") String start_date, @Param("end_date") String end_date);

    @Query(
            value = "select max(end_date) from reservations",
            nativeQuery = true
    )
    String getMax();

    @Modifying
    @Transactional
    @Query(
            value = "update reservations set reservation_status = 'Picked Up' where start_date <= :date ",
            nativeQuery = true
    )
    void update(@Param("date") String date);
}

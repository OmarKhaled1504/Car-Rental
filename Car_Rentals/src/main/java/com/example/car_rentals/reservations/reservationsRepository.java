package com.example.car_rentals.reservations;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface reservationsRepository extends JpaRepository<reservations,composite_reservations> {
    @Transactional
    @Modifying
    @Query(
           value = "Insert into reservations(License,username,start_date,end_date,status,payment) " +
                   "values (:License,:username,:start_date,:end_date,:status,:payment)",
            nativeQuery = true)
   void insert(@Param("License") String License, @Param("username") String username,@Param("start_date") LocalDate start_date,@Param("end_date") LocalDate end_date, @Param("status") String status,@Param("payment") int payment ) ;

}

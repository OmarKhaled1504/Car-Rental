package com.example.car_rentals.car;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, String> {
    @Modifying
    @Transactional
    @Query(
            value = "Insert into car (License,Color,manufacturer,model,year,price_per_day) values(:License,:Color,:manufacturer,:model,:year,:price_per_day)",
            nativeQuery = true
    )
    void insert(@Param("License") String License, @Param("Color") String Color, @Param("manufacturer") String manufacturer, @Param("model") String model, @Param("year") int year,@Param("price_per_day") int price_per_day);
}


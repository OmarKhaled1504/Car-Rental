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
    @Query(value = "Insert into car (License,Color,manufacturer,model,year,price_per_day,status,region) values(:License,:Color,:manufacturer,:model,:year,:price_per_day,:status,:region)",
            nativeQuery = true)
    void insert(@Param("License") String License, @Param("Color") String Color, @Param("manufacturer") String manufacturer, @Param("model") String model, @Param("year") int year,@Param("price_per_day") int price_per_day,@Param("status") String status,@Param("region") String region);

    @Transactional
    @Query(value = "Select * from car",
            nativeQuery = true)
    List<Car> getAll();

    @Transactional
    @Query(value = "Select * from car where car.status = 'available'",
            nativeQuery = true)
    List<Car> getActive();

    @Query(
            value = "SELECT distinct car.manufacturer from car",
            nativeQuery = true
    )
    List<String> getAllManufacturer () ;
    @Query(
            value = "SELECT distinct car.color from car",
            nativeQuery = true
    )
    List<String> getAllColors () ;


    @Query(
            value = "SELECT distinct car.model from car",
            nativeQuery = true
    )
    List<String> getAllModel () ;

    @Query(
            value = "SELECT distinct car.region from car",
            nativeQuery = true
    )
    List<String> getAllRegions () ;


    @Query(
            value = "SELECT distinct car.license from car",
            nativeQuery = true
    )
    List<String> getAllLicense () ;

    @Query(
            value = "SELECT distinct car.year from car",
            nativeQuery = true
    )
    List<String> getAllyear () ;

    @Query(
            value = "SELECT distinct car.price from car",
            nativeQuery = true
    )
    List<String> getAllprice () ;

    @Modifying
    @Transactional
    @Query(value = "UPDATE car SET status = :status WHERE License = :License",
            nativeQuery = true)
    void modify(@Param("License") String License ,@Param("status") String status);


}


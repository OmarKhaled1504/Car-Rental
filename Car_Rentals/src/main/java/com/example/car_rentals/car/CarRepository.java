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
    @Query(value = "Insert into car (License,Color,manufacturer,car_type,model,year,price_per_day,car_status,region,image) values(:License,:Color,:manufacturer,:car_type,:model,:year,:price_per_day,:car_status,:region,:image)",
            nativeQuery = true)
    void insert(@Param("License") String License, @Param("Color") String Color, @Param("manufacturer") String manufacturer, @Param("car_type") String car_type, @Param("model") String model, @Param("year") int year, @Param("price_per_day") int price_per_day, @Param("car_status") String car_status, @Param("region") String region, @Param("image") String image);

    @Transactional
    @Query(value = "Select * from car",
            nativeQuery = true)
    List<Car> getAll();

    @Transactional
    @Query(value = "Select * from car where car.car_status = 'available'",
            nativeQuery = true)
    List<Car> getActive();

    @Query(
            value = "SELECT distinct car.manufacturer from car",
            nativeQuery = true
    )
    List<String> getAllManufacturer();

    @Query(
            value = " SELECT * from car where ((car_type in :carTypes) and (color in :colors) and (License in :licenses) and (manufacturer in :manufacturers) and (model in :models) and (region in :regions) and (price_per_day <= :maxPrice) and (year in :year) and (car_status in :status)) ",
            nativeQuery = true)
    List<Car> filter(@Param("carTypes") List<String> carTypes, @Param("colors") List<String> colors, @Param("licenses") List<String> licenses, @Param("manufacturers") List<String> manufacturers, @Param("models") List<String> models, @Param("regions") List<String> regions, @Param("maxPrice") int maxPrice, @Param("year") List<Integer> year, @Param("status") List<String> status);

    @Query(
            value = "select * from car c where c.color in :colors and c.car_type in :carTypes and c.region in :regions and c.price_per_day <= :price and c.car_status = 'Available' and c.License not in (select distinct  reservations.License from  reservations where (reservations.start_date <= :startDate and reservations.end_date >= :startDate) or (reservations.start_date <= :endDate and reservations.end_date >= :endDate) or (reservations.start_date >= :startDate and reservations.end_date <= :endDate))",
            nativeQuery = true)
    List<Car> userFilter(@Param("colors") List<String> colors, @Param("carTypes") List<String> carTypes, @Param("regions") List<String> regions, @Param("startDate") String startDate, @Param("endDate") String endDate, @Param("price") int price);

    @Query(
            value = "SELECT distinct car.color from car",
            nativeQuery = true
    )
    List<String> getAllColors();

    @Query(
            value = "SELECT max(car.price_per_day) from car",
            nativeQuery = true
    )
    int getMaxPrice();

    @Query(
            value = "SELECT distinct car.model from car",
            nativeQuery = true
    )
    List<String> getAllModel();

    @Query(
            value = "SELECT distinct car.car_type from car",
            nativeQuery = true
    )
    List<String> getAllTypes();

    @Query(
            value = "SELECT distinct car.region from car",
            nativeQuery = true
    )
    List<String> getAllRegions();


    @Query(
            value = "SELECT distinct car.license from car",
            nativeQuery = true
    )
    List<String> getAllLicense();

    @Query(
            value = "SELECT distinct car.year from car",
            nativeQuery = true
    )
    List<Integer> getAllyear();

//    @Query(
//            value = "SELECT distinct car.price from car",
//            nativeQuery = true
//    )
//    List<Integer> getAllprice();

    @Modifying
    @Transactional
    @Query(value = "UPDATE car SET car_status = :status WHERE License = :License",
            nativeQuery = true)
    void modify(@Param("License") String License, @Param("status") String status);


}


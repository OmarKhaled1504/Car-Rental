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
    @Query(value = "Select * from car where car.status = 'available'",
            nativeQuery = true)
    List<Car> getActive();

    @Query(
            value = "SELECT distinct car.manufacturer from car",
            nativeQuery = true
    )
    List<String> getAllManufacturer();

    @Query(
            value = " SELECT * from car where ((car_type in :carTypes) and (color in :colors) and (License in :licenses) and (manufacturer in :manufacturers) and (model in :models) and (region in :regions) and (price_per_day <= :maxPrice) and (year in :year)) ",
            nativeQuery = true)
    List<Car> filter(@Param("carTypes") List<String> carTypes, @Param("colors") List<String> colors, @Param("licenses") List<String> licenses, @Param("manufacturers") List<String> manufacturers, @Param("models") List<String> models, @Param("regions") List<String> regions, @Param("maxPrice") int maxPrice,@Param("year") List<Integer> year);

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
    @Query(value = "UPDATE car SET status = :status WHERE License = :License",
            nativeQuery = true)
    void modify(@Param("License") String License, @Param("status") String status);


}


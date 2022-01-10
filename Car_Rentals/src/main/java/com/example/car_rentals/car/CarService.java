package com.example.car_rentals.car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class CarService {
    private final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getCars(String License, String Color,String Manufacturer,String Model,String year,String office,String price_day,String carStatus,String carType) {
        List<String> carTypes = new ArrayList<>();
        List<String> colors = new ArrayList<>();
        List<String> licenses = new ArrayList<>();
        List<String> manufacturers = new ArrayList<>();
        List<String> models = new ArrayList<>();
        List<String> regions = new ArrayList<>();
        String years;
        List<String> status = new ArrayList<>();
        int maxPrice;
        if (carType.equals("null")) {
            carTypes = this.carRepository.getAllTypes();
          //  System.out.println(carTypes);
        } else {
            carTypes.add(carType);
        }
        if (Color.equals("null")) {
            colors = this.carRepository.getAllColors();
          //  System.out.println(colors);
        } else {
            colors.add(Color);
        }
        if (Manufacturer.equals("null")) {
            manufacturers = this.carRepository.getAllManufacturer();
         //   System.out.println(manufacturers);
        } else {
            manufacturers.add(Manufacturer);
        }
        if (License.equals("null")) {
            licenses = this.carRepository.getAllLicense();
         //   System.out.println(licenses);
        } else {
            licenses.add(License);
        }
        if (Model.equals("null")) {
            models = this.carRepository.getAllModel();
          //  System.out.println(models);
        } else {
            models.add(Model);
        }
        if (office.equals("null")) {
            regions = this.carRepository.getAllRegions();
          //  System.out.println(regions);
        } else {
            regions.add(office);
            System.out.println("fjdnvdlkf"+regions);
        }
        if (Integer.parseInt(price_day) == 0) {
            maxPrice = this.carRepository.getMaxPrice();
         //   System.out.println(maxPrice);
        } else {
            maxPrice =Integer.parseInt(price_day) ;
        }
        if (Integer.parseInt(year) == 0) {
            years = this.carRepository.getAllyear();
          //  System.out.println(years);
        } else {
            years = year;
        }
        if (!carStatus.equals("All")) {
            status.add(carStatus);
        } else {
            status.add("Available");
            status.add("Out of Service");
        }
        return this.carRepository.filter(carTypes, colors, licenses, manufacturers, models, regions, maxPrice, years, status);
    }

    public void addNewCar(Car car) {
        this.carRepository.insert(car.getLicense(), car.getColor(), car.getManufacturer(), car.getCar_type(), car.getModel(), car.getYear(), car.getPrice_per_day(), car.getCar_status(), car.getRegion(), car.getImage());
    }

    public List<Car> filter(Car car) {
        return null;
    }

    public List<Car> getActive() {
        return this.carRepository.getActive();
    }

    void modify(String license, String status) {
        this.carRepository.modify(license, status);
    }

    public List<Car> getUserCars(List<String> color, List<String> region, List<String> type, String startDate, String endDate, int price) {
        List<String> colors = new ArrayList<>();
        List<String> regions = new ArrayList<>();
        List<String> types = new ArrayList<>();


        if (color.isEmpty()) {
            colors = this.carRepository.getAllColors();
        } else {
            colors = color;
        }
        if (region.isEmpty()) {
            regions = this.carRepository.getAllRegions();
        } else {
            regions = region;
        }
        if (type.isEmpty()) {
            types = this.carRepository.getAllTypes();
        } else {
            types = type;
        }
        if (price == 0) {
            price = this.carRepository.getMaxPrice();
        }


        return this.carRepository.userFilter(colors, types, regions, startDate, endDate, price);
    }
}


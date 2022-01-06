package com.example.car_rentals.customer;
import com.example.car_rentals.car.Car;
import com.example.car_rentals.car.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List ;
@RestController
@RequestMapping(
        path = {"api/v1/customer"}
)
public class customerController {
    private final customerService customerService ;
    @Autowired
    public customerController(customerService customerService) {
        this.customerService = customerService;
    }
    @GetMapping()
    @CrossOrigin
    public List<customer> getcustomers() {
        return this.customerService.getcustomers();
    }
    @PostMapping
    public void addNewcustomer(@RequestBody customer customer) {
        System.out.println(customer);
        this.customerService.addNewcustomer(customer);
    }


    @GetMapping("/verify")
    @CrossOrigin
    public boolean authenticate(@RequestParam String email, @RequestParam String password) {
        boolean result = this.customerService.authenticate(email,password);
        System.out.println("received request from " + email + " " + password + " answer :" + result);
        return result;
    }

}


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
@CrossOrigin
public class customerController {
    private final customerService customerService ;
    @Autowired
    public customerController(customerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping()
    public List<customer> getcustomers() {
        return this.customerService.getcustomers();
    }

    @PostMapping()
    public void addNewcustomer(@RequestBody customer customer) {
        System.out.println(customer);
        this.customerService.addNewcustomer(customer);
    }

    @GetMapping("/verify")
    public boolean authenticate(@RequestParam String email, @RequestParam String password) {
        boolean result = this.customerService.authenticate(email,password);
        System.out.println("received request from " + email + " " + password + " answer :" + result);
        return result;
    }

    @GetMapping("/signup")
    public boolean authenticateSignUp(@RequestParam String email, @RequestParam String username) {
        boolean result = this.customerService.authenticateSignUp(email,username);
        System.out.println("received request from " + email + " " + username + " answer :" + result);
        return result;
    }
    @GetMapping("/filter/{name}/{username}")
    public List<customer> filter(@PathVariable String name, @PathVariable String username) {
        List<customer> result = this.customerService.filter(name,username);
        System.out.println("received request from " + name + " " + username + " answer :" + result);
        return result;
    }
    @GetMapping("/userName")
    public String getUserName(@RequestParam String email) {
        String result = this.customerService.getUserName(email);
        System.out.println(result);
        return result;
    }


}


package com.example.car_rentals.customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List ;
@Service
public class customerService {
    private final customerRepository customerRepository ;
    @Autowired
    public customerService(customerRepository customerRepository) {this.customerRepository = customerRepository;}
    public List<customer> getcustomers() {return this.customerRepository.findAll();}
    public void addNewcustomer(customer customer){
        this.customerRepository.insert(customer.getUsername(),customer.getEmail(),customer.getName(),customer.getPassword()) ;
    }
}

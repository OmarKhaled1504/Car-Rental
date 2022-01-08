package com.example.car_rentals.customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List ;
@Service
public class customerService {
    private final customerRepository customerRepository ;
    @Autowired
    public customerService(customerRepository customerRepository) {this.customerRepository = customerRepository;}
    public List<customer> getcustomers() {return this.customerRepository.findAll();}
    public void addNewcustomer(customer customer){
        this.customerRepository.insert(customer.getEmail(),customer.getUsername(),customer.getName(),customer.getPassword()) ;
    }

    public boolean authenticate(String email, String password) {
        List<customer> result = this.customerRepository.authenticate(email, password);
        return !result.isEmpty();
    }

    public boolean authenticateSignUp (String email ,String username){
        List<customer> result = this.customerRepository.authenticateSignUp(email,username);
        return result.isEmpty();
    }

    public List<customer> filter(String name , String username){
        List<String> usernames = new ArrayList<>();
        List<String> names = new ArrayList<>();
        if(name.equals("null")){
            names =  this.customerRepository.getAllNames();
        }else {
            names.add(name);
        }
        if (username.equals("null")){
            usernames = this.customerRepository.getAllUserNames();
        }else{
            usernames.add(username);
        }
        return this.customerRepository.filter(names,usernames);
    }
}

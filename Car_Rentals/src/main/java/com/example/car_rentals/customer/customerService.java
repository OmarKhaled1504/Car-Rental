package com.example.car_rentals.customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;
import java.io.UnsupportedEncodingException;
import java.security.*;




import java.util.ArrayList;
import java.util.List ;
@Service
public class customerService {
    MessageDigest md = MessageDigest.getInstance("MD5");

    private final customerRepository customerRepository ;
    @Autowired
    public customerService(customerRepository customerRepository) throws NoSuchAlgorithmException {this.customerRepository = customerRepository;}
    public List<customer> getcustomers() {return this.customerRepository.findAll();}
    public void addNewcustomer(customer customer) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        //byte[] bytesOfMessage = customer.getPassword().getBytes("UTF-8");
        md.update(customer.getPassword().getBytes());
        byte[] digest = md.digest();
        String myHash = DatatypeConverter
                .printHexBinary(digest).toUpperCase();
        System.out.println("Sign UP"+myHash);
        this.customerRepository.insert(customer.getEmail(),customer.getUsername(),customer.getName(),myHash) ;
    }

    public boolean authenticate(String email, String password) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        md.update(password.getBytes());
        byte[] digest = md.digest();
        String myHash = DatatypeConverter
                .printHexBinary(digest).toUpperCase();
        System.out.println("Sign In"+myHash);
        List<customer> result = this.customerRepository.authenticate(email, myHash);
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

    public String getUserName (String email){
        return this.customerRepository.getUserName(email);
    }
}

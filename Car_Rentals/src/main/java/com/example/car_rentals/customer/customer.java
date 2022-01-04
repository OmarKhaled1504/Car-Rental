package com.example.car_rentals.customer;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
@Entity
@Table(
        name = "customer"
)
public class customer {
       @Id


       String email ;
       String username ;
       String name ;
       String password ;
       public  customer(){

}
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(
            name = "Id",
            nullable = false,
            precision = 0
    )




    public String getEmail() {
        return this.email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsername() {
        return this.username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return this.password;
    }
    public void setPassword(String password) {
        this.password = password;
    }







}

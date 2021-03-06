package com.example.car_rentals.customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Repository
public interface customerRepository extends JpaRepository<customer,String>{
    @Modifying
    @Transactional
    @Query(
            value = "Insert into customer(email,name,username,password) values(:email,:name,:username,:password)",
            nativeQuery = true
    )
    void insert (@Param("email") String email,@Param("username") String username,@Param("name") String name,@Param("password") String password );

    @Query(
            value = "SELECT * from customer where email = :email and password = :password ",
            nativeQuery = true
    )
    List<customer> authenticate(@Param("email") String email, @Param("password") String password);
    @Query(
            value = "SELECT * from customer where email = :email OR username = :username ",
            nativeQuery = true
    )
    List<customer> authenticateSignUp (@Param("email") String email,@Param("username") String username) ;

    @Query(
            value = "SELECT distinct customer.username from customer",
            nativeQuery = true
    )
    List<String> getAllUserNames () ;

    @Query(
            value = "SELECT distinct customer.name from customer",
            nativeQuery = true
    )
    List<String> getAllNames () ;

    @Query(
            value = "SELECT * from customer where (username in :username and name in :name) ",
            nativeQuery = true
    )
    List<customer> filter (@Param("name") List<String> name,@Param("username") List<String> username);


    @Query(
            value = "SELECT customer.username from customer where email = :email ",
            nativeQuery = true
    )
    String getUserName (@Param("email") String email);

}

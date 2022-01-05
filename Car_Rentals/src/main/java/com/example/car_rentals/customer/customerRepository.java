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
            value = "Insert into customer(email,name,username,password) values(:email,:username,:name,:password)",
            nativeQuery = true
    )
    void insert (@Param("email") String email,@Param("username") String username,@Param("name") String name,@Param("password") String password );
}

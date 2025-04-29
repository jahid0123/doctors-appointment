package com.jmjbrothers.house_rent_management_system.repository;

import com.jmjbrothers.house_rent_management_system.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}

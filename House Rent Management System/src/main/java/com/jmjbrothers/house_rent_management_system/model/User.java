package com.jmjbrothers.house_rent_management_system.model;

import com.jmjbrothers.house_rent_management_system.constants.Role;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
@Entity
@Table(name = "rent_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(value = EnumType.STRING)
    private Role role;

    private String phone;

    @Column(name = "balance_credits")
    private Integer balanceCredits = 0;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();


}

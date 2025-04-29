package com.jmjbrothers.house_rent_management_system.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;

@Data
@RequiredArgsConstructor
@Entity
@Table(name = "rent_credit_packages")
public class CreditPackage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "credit_amount", nullable = false)
    private Integer creditAmount;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;


}


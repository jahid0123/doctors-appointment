package com.jmjbrothers.house_rent_management_system.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
@Entity
@Table(name = "rent_property_post_transactions")
public class PropertyPostTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "property_id", nullable = false)
    private Property property;

    @Column(name = "credits_used", nullable = false)
    private Integer creditsUsed = 10;

    @Column(name = "date_posted")
    private LocalDateTime datePosted = LocalDateTime.now();

    // Getters and Setters
}


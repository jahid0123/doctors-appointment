package com.jmjbrothers.house_rent_management_system.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class LoginRequest {

    private String email;
    private String password;
}

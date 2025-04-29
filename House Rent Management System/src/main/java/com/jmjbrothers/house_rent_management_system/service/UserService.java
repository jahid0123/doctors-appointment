package com.jmjbrothers.house_rent_management_system.service;

import com.jmjbrothers.house_rent_management_system.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;



}

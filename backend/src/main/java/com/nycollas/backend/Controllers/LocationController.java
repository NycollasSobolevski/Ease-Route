package com.nycollas.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nycollas.backend.DTO.Locations.SaveLocationDTO;
import com.nycollas.backend.Service.AuthService;
import com.nycollas.backend.Service.UserService;

@RestController
@RequestMapping("/location")
public class LocationController {
    
     @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;


    @PostMapping("/AddFavorite")
    public ResponseEntity<String> AddFAvorite (
        @RequestBody SaveLocationDTO body
    ){

        try {
            
            return new ResponseEntity<String>("Point added", HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<String>("Unknow server error", HttpStatus.BAD_REQUEST);
        }
    }

}

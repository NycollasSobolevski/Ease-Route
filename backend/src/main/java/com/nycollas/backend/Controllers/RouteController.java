package com.nycollas.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nycollas.backend.Service.AuthService;
import com.nycollas.backend.Service.UserService;

@RestController
@RequestMapping("/route")
public class RouteController {
    
    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @GetMapping("/getLocation")
    public ResponseEntity<String> GetLocation(
        // @RequestHeader("Authorization") String token,
        // @RequestParam("longitude") String longitude,
        // @RequestParam("latitude") String latitude
    )
    {
        try {

            System.out.println("token");
            // var user = authService.ValidateToken(token);
            

            // System.out.println(user.toString());
            return ResponseEntity.ok("asdads");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<String>("Unknow server error", HttpStatus.BAD_REQUEST);
        }

    }
}

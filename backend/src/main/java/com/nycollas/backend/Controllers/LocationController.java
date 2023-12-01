package com.nycollas.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nycollas.backend.DTO.Locations.SaveLocationDTO;
import com.nycollas.backend.Model.UserModel;
import com.nycollas.backend.Service.AuthService;
import com.nycollas.backend.Service.UserService;

@RestController
@RequestMapping("/location")
public class LocationController {
    
    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;



    @PostMapping("/addFavorite")
    public ResponseEntity<String> AddFavorite (
        @RequestBody SaveLocationDTO body,
        @RequestHeader("Authorization") String token
    ){
        try {
            String[] userToken = token.split(" ");
            UserModel user = this.userService.findByIdentify(authService.ValidateToken(userToken[1]))
                .stream()
                .findFirst()
                .get();
            var favorites = user.getFavorites();
            favorites.add(body);
            user.setFavorites(favorites);
            userService.save(user);
            return new ResponseEntity<String>("Point added", HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage() );
            return new ResponseEntity<String>("Unknow server error", HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/removeFavorite")
    public ResponseEntity<String> removeFavorite (
        @RequestBody SaveLocationDTO body,
        @RequestHeader("Authorization") String token
    ){

        try {
            String[] userToken = token.split(" ");
            UserModel user = this.userService.findByIdentify(authService.ValidateToken(userToken[1]))
                .stream()
                .findFirst()
                .get();
            var favorites = user.getFavorites();
            // favorites.indexOf(body);
            favorites.remove(body);
            user.setFavorites(favorites);
            userService.save(user);
            return new ResponseEntity<String>("Point Removed", HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<String>("Unknow server error", HttpStatus.BAD_REQUEST);
        }
    }

}

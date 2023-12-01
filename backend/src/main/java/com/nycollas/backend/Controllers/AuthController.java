package com.nycollas.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nycollas.backend.DTO.Auth.SubscribeUserDto;
import com.nycollas.backend.Model.UserModel;
import com.nycollas.backend.Service.UserService;
import com.nycollas.backend.Services.Passwords;


@RestController
@RequestMapping("/auth")
public class AuthController {
    
    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<UserModel> getAllUsers() {
        List<UserModel> users = this.userService.findAll();
        return users;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createUser(
        @RequestBody UserModel body
    ) 
    {
        if (body.getName() == null || body.getName().isEmpty()) 
            return ResponseEntity.badRequest().body("Name is required");
        if (body.getPassword() == null || body.getPassword().isEmpty()) 
            return ResponseEntity.badRequest().body("Password is required");
        if(body.getEmail() == null || body.getEmail().isEmpty())
            return ResponseEntity.badRequest().body("Email is required");


        
        UserModel user = new UserModel(){
            {
                setName(body.getName());
                setPassword(body.getPassword());
                setEmail(body.getEmail());
                setAge(body.getAge());
            }
        };
        this.userService.create(user);
        return ResponseEntity.ok("User created");
    }

    @PostMapping("/test")
    public ResponseEntity<String> testFunctions(
        @RequestBody String body
    ) 
    {
        
        String salt = Passwords.GenerateSalt(5);
        System.out.println(salt);
        return ResponseEntity.ok(salt);
    }

}

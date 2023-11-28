package com.nycollas.backend.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nycollas.backend.DTO.Auth.UserLogin;
import com.nycollas.backend.Model.UserModel;
import com.nycollas.backend.Service.AuthService;
import com.nycollas.backend.Service.UserService;
import com.nycollas.backend.Tools.Password;


@RestController
@RequestMapping("/auth")
public class AuthController {
    private AuthService authService = new AuthService();
    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public ResponseEntity<String> Login(
        @RequestBody UserLogin body
    ) 
    {

        try{
            
            UserModel user = this.userService.findByIdentify(body.getIdentify())
                .stream()
                .findFirst()
                .get();
    
            System.out.print(user.getName());
            if(!Password.CompareHash(body.getPassword(), user.getPassword()))
                return new ResponseEntity<String>("Login or password dont matches", HttpStatus.UNAUTHORIZED);
            
            System.out.println(user.getName());

            String token = this.authService.createToken(user);

            return new ResponseEntity<String>(token, HttpStatus.OK);
    
        } catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<String>("Unknow server error", HttpStatus.BAD_REQUEST);
        }
    }
 
    @PostMapping("/subscribe")
    public ResponseEntity<String> Subscribe(
        @RequestBody UserModel body
    )
    {
        System.out.println("Subscribe ");
        boolean userIfExists = this.userService
            .findByIdentify(body.getName())
            .stream().findFirst()
            .isPresent();
        if(userIfExists)
            return new ResponseEntity<>("This username already exists", HttpStatus.UNAUTHORIZED);

        if(!userIfExists)
            userIfExists = this.userService.findByIdentify(body.getEmail())
            .stream().findFirst()
            .isPresent();
        if(userIfExists)            
            return new ResponseEntity<>("This email already exists", HttpStatus.UNAUTHORIZED);

            
        try {
            UserModel user = new UserModel();       
            user.setAge(body.getAge());
            user.setEmail(body.getEmail());
            user.setName(body.getName());
            user.setPassword( Password.ApplyHash(body.getPassword()) );
            
            System.out.println("=========================================== try ===============================================");
            this.userService.create(user);

            return new ResponseEntity<>("User Created Successfully", HttpStatus.OK);
            
        } catch (Exception e) {
            System.out.print(e);
            return new ResponseEntity<>("Unknow server error", HttpStatus.BAD_REQUEST);
        }



    }

    @GetMapping("/test")
    public String Test()
    {
        // return this.userService.GetHash("123", this.userService.GenerateSalt(5));

        return "asdfasdfasdf";
    }
}

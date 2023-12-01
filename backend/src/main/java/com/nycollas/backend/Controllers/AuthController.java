package com.nycollas.backend.Controllers;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nycollas.backend.DTO.Auth.ReturnTokenDTO;
import com.nycollas.backend.DTO.Auth.UserLogin;
import com.nycollas.backend.DTO.Locations.SaveLocationDTO;
import com.nycollas.backend.Model.UserModel;
import com.nycollas.backend.Service.AuthService;
import com.nycollas.backend.Service.UserService;
import com.nycollas.backend.Tools.Password;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public ResponseEntity<ReturnTokenDTO> Login(
        @RequestBody UserLogin body
    ) 
    {
        ReturnTokenDTO json = new ReturnTokenDTO();
        try{
            UserModel user = this.userService.findByIdentify(body.getIdentify())
                .stream()
                .findFirst()
                .get();
    
            if(!Password.CompareHash(body.getPassword(), user.getPassword())){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            

            String token = this.authService.createToken(user);
            json.setToken(token);
            json.setIdentify(user.getName());
            return new ResponseEntity<ReturnTokenDTO>(json, HttpStatus.OK);
    
        } catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
 
    @PostMapping("/subscribe")
    public ResponseEntity<String> Subscribe(
        @RequestBody UserModel body
    )
    {
        ReturnTokenDTO json = new ReturnTokenDTO();

        System.out.println("Subscribe ");
        boolean userIfExists = this.userService
            .findByIdentify(body.getName())
            .stream().findFirst()
            .isPresent();
        if(userIfExists){
            return new ResponseEntity<>( HttpStatus.UNAUTHORIZED);
        }

        if(!userIfExists)
            userIfExists = this.userService.findByIdentify(body.getEmail())
            .stream().findFirst()
            .isPresent();
        if(userIfExists){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

            
        try {
            UserModel user = new UserModel();       
            user.setAge(body.getAge());
            user.setEmail(body.getEmail());
            user.setName(body.getName());
            user.setPassword( Password.ApplyHash(body.getPassword()) );
            user.setFavorites(new ArrayList<SaveLocationDTO>());
            System.out.println("=========================================== try ===============================================");
            this.userService.create(user);
            return new ResponseEntity<>("User Created Successfully", HttpStatus.OK);
            
        } catch (Exception e) {
            System.out.print(e);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }



    }

    @GetMapping("/test")
    public String Test(
        @RequestParam("longitude") String longitude,
        @RequestParam("latitude") String latitude
    )
    {
        // return this.userService.GetHash("123", this.userService.GenerateSalt(5));
        // System.out.println(text);
        // return text;
        System.out.println("${latitude}" + latitude);
        System.out.println("${longitude}" + longitude);

        return "text";
    }
}
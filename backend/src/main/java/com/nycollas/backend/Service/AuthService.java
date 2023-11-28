package com.nycollas.backend.Service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.nycollas.backend.Exception.AuthException;
import com.nycollas.backend.Model.UserModel;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jet.issuer}")
    private String issuer;

    public String createToken(UserModel user){
        try{
            final var anAlgorithm = Algorithm.HMAC256(secret);
            
            final String aToken = JWT.create()
                .withIssuer(issuer)
                .withSubject(user.getEmail())
                .withExpiresAt(new Date(new Date().getTime() + 24 * 60 * 60 * 1000))
                .sign(anAlgorithm);
            return aToken;
        }
        catch (IllegalArgumentException e){
            throw new AuthException(e.getMessage());
        }
        catch (JWTCreationException e) {
            throw new AuthException(e.getMessage());
        }
    }


    public String ValidateToken (String token){
        try{
            final var anAlgorithm = Algorithm.HMAC256(secret);
            final var decoded = JWT.require(anAlgorithm)
                .withIssuer(token)
                .build()
                .verify(token);
            final var anSubjet =  decoded.getSubject();
            return anSubjet;
        }
        catch (Exception e){
            return "";
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel resp = this.userService
            .findByIdentify(username)
            .stream()
            .findFirst()
            .get();
        
        if(resp.getEmail().equals(username))
            return resp;
        else{
            throw new UsernameNotFoundException("User not found");
        }
    }
}
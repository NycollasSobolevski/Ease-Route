package com.nycollas.backend.Model;

import java.util.Collection;
import java.util.List;

import org.apache.logging.log4j.message.StringFormattedMessage;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.nycollas.backend.DTO.Locations.SaveLocationDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel implements UserDetails {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private short  age;
    private List<SaveLocationDTO> favorites;

    public UserModel(String name, short age) {
        this.name = name;
        this.age = age;
    }
    public UserModel() {
    }
    public UserModel( String _id, String name, short age){
        // UserModel(id, name, age)
        this.name = name;
        this.id = _id;
        this.age = age;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }
    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

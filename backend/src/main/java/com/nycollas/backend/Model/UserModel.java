package com.nycollas.backend.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private short age;

    public UserModel(String name, short age) {
        this.name = name;
        this.age = age;
    }
    public UserModel() { }
}

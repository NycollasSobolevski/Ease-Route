package com.nycollas.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nycollas.backend.DTO.Locations.SaveLocationDTO;
import com.nycollas.backend.Model.UserModel;
import java.util.*;

public interface IUserRepository extends MongoRepository<UserModel, String> {
    

    @Query("{ 'name' : ?0 }")
    List<UserModel> findByName(String name);

    @Query("{ 'age' : ?0, 'name' : ?1 }")
    List<UserModel> findByAgeAndName( short age, String name );

    @Query("{ 'email' : ?0}")
    List<UserModel> findByEmail(String email);


}

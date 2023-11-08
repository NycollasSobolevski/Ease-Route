package com.nycollas.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nycollas.backend.Model.UserModel;
import com.nycollas.backend.Repository.IUserRepository;


@Service
public class UserService {
    
    @Autowired
    private IUserRepository userRepository;

    public List<UserModel> findAll() {
        return this.userRepository.findAll();
    }
    public void delete( UserModel user ) {
        this.userRepository.delete(user);
    }
    public void create( UserModel user ) {
        this.userRepository.save(user);
    }
    public void update( UserModel user ) {
        this.userRepository.update(user);
    }

    public UserModel save(UserModel user) {
        return this.userRepository.save(user);
    }
}

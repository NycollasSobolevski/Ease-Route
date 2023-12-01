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
    public List<UserModel> findByIdentify( String identify ){
        List<UserModel> list = 
            this.userRepository.findByName( identify ) ;
        if(list.isEmpty())
            list = this.userRepository.findByEmail(identify);

        
        return list;
    }
    public void delete( UserModel user ) {
        this.userRepository.delete(user);
    }
    public void create( UserModel user ) {
        System.out.println("User: " + user);
        this.userRepository.save(user);
    }
    public void update( UserModel user ) {
        // this.userRepository.update(user);
    }

    public UserModel save(UserModel userModel) {
        return this.userRepository.save(userModel);
    }

    public void save(String id, String name, short age) {
        this.userRepository.save(new UserModel(id, name, age));
    }

    public List<UserModel> findByName(String name) {
        return (List<UserModel>) this.userRepository.findByName(name);
    }

    public UserModel findByEmail(String email) {
        return (UserModel) this.userRepository.findByEmail(email);
    }

    public List<UserModel> findByAgeAndName(short age, String name) {
        return (List<UserModel>) this.userRepository.findByAgeAndName(age, name);
    }

    public void delete(String id) {
        this.userRepository.deleteById(id);
    }


}

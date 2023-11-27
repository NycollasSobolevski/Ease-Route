package com.nycollas.backend.Service;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.security.AlgorithmConstraints;
import java.security.MessageDigest;
import java.util.Base64;
import java.util.List;
import java.util.Random;

import org.apache.logging.log4j.message.Message;
import org.bouncycastle.crypto.Digest;
import org.bouncycastle.util.Bytes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.tags.MessageTag;

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
        this.userRepository.save(user);
    }
    public void update( UserModel user ) {
        // this.userRepository.update(user);
    }

    
    public UserModel save(UserModel user) {
        return this.userRepository.save(user);
    }
}

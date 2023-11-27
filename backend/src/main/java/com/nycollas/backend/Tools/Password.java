package com.nycollas.backend.Tools;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Password {
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public static String ApplyHash (String password) {
        return encoder.encode(password);
    }

    public static Boolean CompareHash (String password, String hash){
        return encoder.matches(password, hash);
    }
}

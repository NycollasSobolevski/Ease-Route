package com.nycollas.backend.Services;

import java.nio.charset.StandardCharsets;
import java.util.Random;

public class Passwords {

    public static String GenerateSalt(int quantity) {
        Random rand = new Random();
        byte[] saltBytes = new byte[quantity];
        rand.nextBytes(saltBytes);
        String salt = new String(saltBytes, StandardCharsets.UTF_8);
        return salt;
    }


    // Random rnd = new Random();
//     byte[] saltBytes = new byte[qtd];
//     rnd.NextBytes(saltBytes);
//     string salt = System.Convert.ToBase64String(saltBytes);
//     return salt;
}

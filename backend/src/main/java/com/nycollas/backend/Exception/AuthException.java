package com.nycollas.backend.Exception;


public class AuthException extends RuntimeException {

    public AuthException(final String message) {
        super(message);
    }

}
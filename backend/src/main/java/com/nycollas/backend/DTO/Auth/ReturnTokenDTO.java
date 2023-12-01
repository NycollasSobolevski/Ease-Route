package com.nycollas.backend.DTO.Auth;

import lombok.Data;

@Data
public class ReturnTokenDTO {
    public String token;
    public String identify;
}

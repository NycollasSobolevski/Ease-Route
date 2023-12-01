package com.nycollas.backend.DTO.Locations;

import lombok.Data;

@Data
public class SaveLocationDTO {
    private long longitude;
    private long latitude;
    private String title;
}

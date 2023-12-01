package com.nycollas.backend.Model;

import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("favorite-locations")
public class FavoritesLocations {
    @Id
    private String id;
    private long longitude;
    private long latitude;
    private String Label;


    public FavoritesLocations(long _lat, long _long, String _label) {
        this.setLabel(_label);
        this.setLatitude(_lat);
        this.setLongitude(_long);
    }
    public FavoritesLocations() {
    }
}

import axios from "axios";


export default class LocationService{
    static url_base = "";
    static usertoken = sessionStorage.getItem("usertoken")??"";

    static authorization = {'Authorization': `Bearer ${this.usertoken}`};

    static AddFavorite = async ( geolocation ) => {
        const url = `${this.url_base}/addFavorite`;
        if (this.usertoken === "") return;
        return await axios.post(url, geolocation, {headers: this.authorization});
    }

    static RemoveFavorite = async ( geolocation ) => {
        const url = `${this.url_base}/removeFavorite`;
        if(this.usertoken === "") return;
        return await axios.post(url, geolocation, {headers: this.authorization});
    }
}
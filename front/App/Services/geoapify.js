import {GEOAPIFY_TOKEN, GEOAPIFY_URL} from "@env";
import axios from "axios";

export default class GeoapifyService{

    static async getCityByCoords(lat, lon){
        
    }
    static getCoordsByString = async (urlEncoded) => {
        const url = `https://api.geoapify.com/v1/geocode/search?text=${urlEncoded}&apiKey=${GEOAPIFY_TOKEN}`;
        const res = await axios.get(url);
        return res;
    }
}
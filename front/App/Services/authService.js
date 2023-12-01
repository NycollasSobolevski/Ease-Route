import axios from "axios"


export default class AuthService {
    static urlBase = "localhost:8080/auth";
    static Login = async (params) => {
        const url = `${this.urlBase}/login`
        return await axios.post(url, params)
    }

    static Subscribe = async ( params ) => {
        const url = `${this.urlBase}/subscribe`;
        return await axios.post(url, params)
    }
}
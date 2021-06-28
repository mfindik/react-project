import axios from "axios"

export default class SehitlerimizServisi{
    getSehitlerimiz(){
        return axios.get(`http://localhost:49793/api/angular/sehitlerimiz`)
    }

    getKoyDetay(yerNo){
        return axios.get("http://localhost:49793/api/angular/koydetay?yerNo=" + yerNo)
    }

}


import axios from "axios"

export default class KoyServisi{
    getKoyler(){
        return axios.get(`http://localhost:49793/api/angular/koyler`)
    }

    getKoyDetay(yerNo){
        return axios.get("http://localhost:49793/api/angular/koydetay?yerNo=" + yerNo)
    }

}
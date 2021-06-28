import { GEZI_EKLE, GEZI_SIL } from "../aksiyon/geziAksiyonlari";
import { geziOgeleri } from "../ilkDeger/geziOgeleri";

const baslangicDurumu = { geziOgeleri : geziOgeleri, };

export default function geziReduktor(durum=baslangicDurumu, {type, payload}){
    switch (type) {
        case GEZI_EKLE:
            let koy = durum.geziOgeleri.find((g) => g.koy.yerNo === payload.yerNo);
            if (koy) {
                koy.kacKere++;
                return{
                    ...durum,
                };
            } else{
                return {
                    ...durum,
                    geziOgeleri: [...durum.geziOgeleri,{kacKere:1, koy:payload}], 
                }; 
            }
    
        case GEZI_SIL:
                return{
                    ...durum,
                    geziOgeleri:durum.geziOgeleri.filter((g)=>g.koy.yerNo !== payload.yerNo),
                };
        default:
           return durum;
    }
}
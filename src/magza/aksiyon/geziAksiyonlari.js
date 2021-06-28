export const GEZI_EKLE = "GEZI_EKLE"
export const GEZI_SIL = "GEZI_SIL"
export function geziEkle(koy){
    return{
        type : GEZI_EKLE,
        payload : koy
    }
}

export function geziSil(koy){
    return{
        type : GEZI_SIL,
        payload : koy
    }
}
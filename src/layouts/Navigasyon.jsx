import React, {useState} from 'react'
import { Menu, Container} from 'semantic-ui-react'
import GirisYap from './GirisYap'
import CikisYap from './CikisYap'
import GezilenYerler from './GezilenYerler'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navigasyon() {
    //-----Durum------------Durumu değistirecek metot---durumun ilk değeri
    const {geziOgeleri} = useSelector(durum => durum.gezi)
    const [kimlikDogrulama, setKimlikDogrulama] = useState(true)
    const gecmis = useHistory()
    function cikisYapalim(){
        setKimlikDogrulama(false)
        gecmis.push("/")
    }
    function girisYapalim(){
        setKimlikDogrulama(true)
    }
    function anaSayfa(){
        gecmis.push("/")
    }
    function denemeSayfam(){
        gecmis.push("/denemesayfam")
    }
    return (
        <div>
            <Menu inverted fixed="top">
            <Container>
                <Menu.Item name="Ana Sayfa" onClick={anaSayfa}/>
                <Menu.Item name="Deneme Sayfam" onClick={denemeSayfam} />

                <Menu.Menu position='right'>
                    {
                    //geziOgeleri 0 dan büyükse GezilenYerleri render et 
                    }
                    {geziOgeleri.length>0&&<GezilenYerler/>}
                    {kimlikDogrulama?<GirisYap cikisYapNavidenGeliyor={cikisYapalim}/>
                                    :<CikisYap girisYapNavidenGeliyor={girisYapalim}/>}
                </Menu.Menu>
            </Container>
            </Menu>
        </div>
    )
}


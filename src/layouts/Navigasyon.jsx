import React, {useState} from 'react'
import { Menu, Container} from 'semantic-ui-react'
import GirisYap from './GirisYap'
import CikisYap from './CikisYap'
import SepetOzeti from './SepetOzeti'
import { useHistory } from 'react-router-dom'

export default function Navigasyon() {
    //-----Durum------------Durumu değistirecek metot---durumun ilk değeri
    const [kimlikDogrulama, setKimlikDogrulama] = useState(true)
    const gecmis = useHistory()
    function cikisYapalim(){
        setKimlikDogrulama(false)
        gecmis.push("/")
    }
    function girisYapalim(){
        setKimlikDogrulama(true)
    }
    return (
        <div>
            <Menu inverted fixed="top">
            <Container>
                <Menu.Item name='Ana Sayfa' />
                <Menu.Item name='Mesajlar' />

                <Menu.Menu position='right'>
                    <SepetOzeti/>
                    {kimlikDogrulama?<GirisYap cikisYapNavidenGeliyor={cikisYapalim}/>
                                    :<CikisYap girisYapNavidenGeliyor={girisYapalim}/>}
                </Menu.Menu>
            </Container>
            </Menu>
        </div>
    )
}


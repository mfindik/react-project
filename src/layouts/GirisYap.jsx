import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

export default function GirisYap({cikisYapNavidenGeliyor}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/903690758653431813/sdF36KRZ_400x400.jpg"/>
                <Dropdown pointing="top left" text="Musa">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={cikisYapNavidenGeliyor} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

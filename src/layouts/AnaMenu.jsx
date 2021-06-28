import React from 'react'
import { useHistory } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'



export default function AnaMenu() {
    const gecmis = useHistory()

    function sehitlerimiz(){
        gecmis.push("/sehitlerimiz")
    }
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item name='Ilgaz' />
                <Menu.Item name='Köyler' />
                <Menu.Item name="Şehitler" onClick={sehitlerimiz} />
                <Menu.Item name='Seçimler' />

            </Menu>
        </div>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, } from 'semantic-ui-react'

export default function SepetOzeti() {
    return (
        <div>
            <Dropdown item text='Gezilen Köyler'>
                <Dropdown.Menu>
                    <Dropdown.Item>Bucurayenice</Dropdown.Item>
                    <Dropdown.Item>Aktaş</Dropdown.Item>
                    <Dropdown.Item>Söğütcük</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/gezilenkoyler">Tamamını Gör</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

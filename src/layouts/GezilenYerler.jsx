import React from 'react'
import {  NavLink } from 'react-router-dom';
import { Dropdown,Label } from "semantic-ui-react";
import { useSelector } from 'react-redux';

export default function GezilerYerler() {

    const {geziOgeleri} = useSelector(durum => durum.gezi)
    //useSelector ne yapıyor : 13.Gün:2:37:41
    return (
        <div>
            <Dropdown item text='Gezilen Köyler'>
                <Dropdown.Menu>
                    {
                        geziOgeleri.map((geziOge)=>(
                          <Dropdown.Item key={geziOge.koy.yerNo}>
                              {geziOge.koy.yerAdi}
                              <Label>
                                  {geziOge.kacKere}
                              </Label>
                          </Dropdown.Item>   
                        ))
                    }
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/gezilenkoyler">Tamamını Gör</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

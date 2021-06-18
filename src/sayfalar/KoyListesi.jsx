import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import KoyServisi from "../servisler/koyServisi";

export default function KoyListesi() {
    //Benim koyler diye verilerim var ve bunun varsayılan değere boş bir dizi (useState([]))
    //setKoyleri değiştirebilmek içinde verilerimi kullanıyorum buna hook deniyormuş.
    const [koyler, setKoyler] = useState([]);

    useEffect(() => {
        let koyServisi = new KoyServisi()
        koyServisi.getKoyler().then(sonuc => setKoyler(sonuc.data))

    }, [])
    //console.log(koyler)
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Koy No</Table.HeaderCell>
                        <Table.HeaderCell>Koy Adı</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        koyler.map(koy => (
                            <Table.Row key={koy.yerNo}>
                                <Table.Cell>{koy.yerNo}</Table.Cell>
                                <Table.Cell>{koy.yerAdi}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}

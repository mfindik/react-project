import React, { useState, useEffect } from "react";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom"
import KoyServisi from "../servisler/koyServisi";
import { useDispatch } from "react-redux";
import { geziEkle } from "../magza/aksiyon/geziAksiyonlari";
import { toast } from "react-toastify";
//toast: Gezilen yerler eklenirken animasyon oynatıyor ayrıca index.js içinde css'i var

export default function KoyListesi() {
    //Benim koyler diye verilerim var ve bunun varsayılan değere boş bir dizi (useState([]))
    //setKoyleri değiştirebilmek içinde verilerimi kullanıyorum buna hook deniyormuş.
    //useDispatch : bir aksiyon fonksiyon çağırmak için kullanılır
    const sevkEt = useDispatch();
    const [koyler, setKoyler] = useState([]);

    useEffect(() => {
        let koyServisi = new KoyServisi()
        koyServisi.getKoyler().then(sonuc => setKoyler(sonuc.data))
    }, [])

    const birGeziEkle = (koy) => {
        sevkEt(geziEkle(koy))
        toast.success(`${koy.yerAdi} gezilen yerlere eklendi!`)
    };
    return (
        <div>
            <h1>KÖY LİSTESİ</h1>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Koy No</Table.HeaderCell>
                        <Table.HeaderCell>Koy Adı</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        koyler.map(koy => (
                            <Table.Row key={koy.yerNo}>
                                <Table.Cell>{koy.yerNo}</Table.Cell>
                                <Table.Cell><Link to={`/koyler/${koy.yerNo}`}>{koy.yerAdi}</Link></Table.Cell>
                                <Table.Cell><Button onClick={() => birGeziEkle(koy)}>Gezilenlere ekle</Button></Table.Cell>
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

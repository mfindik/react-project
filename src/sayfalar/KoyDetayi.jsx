import React, { useState, useEffect, } from "react";
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import KoyServisi from "../servisler/koyServisi";

export default function KoyDetayi() {
    let { yerNo } = useParams();
   
    const [koy, setKoy] = useState({});

    useEffect(() => {
        let koyServisi = new KoyServisi()
        koyServisi.getKoyDetay(yerNo).then(sonuc => setKoy(sonuc.data))

    }, [])
    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated="right"
                            size="mini"
                            src="/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>{koy.yerNo}</Card.Header>
                        <Card.Header>{koy.yerAdi}</Card.Header>
                        <Card.Meta>{koy.yerMuhtari}</Card.Meta>
                        <Card.Description>
                           {koy.yerBilgi}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            <Button basic color="green">
                                Approve
                            </Button>
                            <Button basic color="red">
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
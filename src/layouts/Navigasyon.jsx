import React from 'react'
import { Button, Menu, Container } from 'semantic-ui-react'
import SepetOzeti from './SepetOzeti'

export default function Navigasyon() {
    return (
        <div>
            <Menu inverted fixed="top">
            <Container>
                <Menu.Item
                    name='home'
                   
                />
                <Menu.Item
                    name='messages'
                    
                />

                <Menu.Menu position='right'>
                    <SepetOzeti/>

                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}


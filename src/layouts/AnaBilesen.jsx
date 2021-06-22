import React from 'react'
import KoyListesi from '../sayfalar/KoyListesi'
import AnaMenu from './AnaMenu'
import { Route } from 'react-router';
import { Grid, GridColumn } from 'semantic-ui-react'
import KoyDetayi from '../sayfalar/KoyDetayi';
import GezdigimKoyler from '../sayfalar/GezdigimKoyler';
export default function AnaBilesen() {
  return (
    <div>
      <Grid columns={2}>
        <Grid.Row>
          <GridColumn width={4}>
            <AnaMenu />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={KoyListesi}/>
            <Route exact path="/koyler" component={KoyListesi}/>
            <Route path="/koyler/:yerNo" component={KoyDetayi}/>
            <Route path="/gezilenkoyler" component={GezdigimKoyler}/>
            
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  )
}


import React from 'react'
import KoyListesi from '../sayfalar/KoyListesi'
import AnaMenu from './AnaMenu'
import { Route } from 'react-router';
import { Grid, GridColumn } from 'semantic-ui-react'
import KoyDetayi from '../sayfalar/KoyDetayi';
import GezdigimKoyler from '../sayfalar/GezdigimKoyler';
import zDenemeSayfam from '../sayfalar/zDenemeSayfam';
import Sehitlerimiz from '../sayfalar/Sehitlerimiz';
import { ToastContainer } from 'react-toastify';//toast: Gezilen yerler eklenirken animasyon oynatıyor ayrıca index.js içinde css'i var
export default function AnaBilesen() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid columns={2}>
        <Grid.Row>
          <GridColumn width={4}>
          <h3>Burası Sol Menü</h3>
            <AnaMenu />
          </GridColumn>
          <GridColumn width={12}>
          <h3>Burası Aktif alan</h3>
            <Route exact path="/" component={KoyListesi}/>
            <Route exact path="/koyler" component={KoyListesi}/>
            <Route path="/koyler/:yerNo" component={KoyDetayi}/>
            <Route path="/gezilenkoyler" component={GezdigimKoyler}/>
            <Route path="/sehitlerimiz" component={Sehitlerimiz}/>
            <Route path="/denemesayfam" component={zDenemeSayfam}/>
            
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  )
}


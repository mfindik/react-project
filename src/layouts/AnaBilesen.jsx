import React from 'react'

import AnaMenu from './AnaMenu'
import KoyListesi from '../sayfalar/KoyListesi'
import { Grid, GridColumn } from 'semantic-ui-react'
export default function AnaBilesen() {
  return (
    <div>
      <Grid columns={2}>
        <Grid.Row>
          <GridColumn width={4}>
            <AnaMenu />
          </GridColumn>
          <GridColumn width={12}>
            <KoyListesi />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  )
}


import React from 'react'
import {  Container, Grid, Icon, Segment } from 'semantic-ui-react';
import DisplaceBalance from './DisplaceBalanceComponent';

const DisplaceBalances = () => {
  return (
   
    <Segment textAlign="center"> 
      <Grid columns={2} divided> 
        <Grid.Row>
          <Grid.Column>
              <DisplaceBalance size="tiny" color="green" side="side" value="1,405.50" title="Incoming"/>
          </Grid.Column>
          <Grid.Column>
              <DisplaceBalance size="tiny" color="red" side="left" value="623.50" title="Expenses"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplaceBalances

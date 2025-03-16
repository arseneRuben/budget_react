import React from 'react'
import {   Grid, Segment } from 'semantic-ui-react';
import DisplaceBalance from './DisplaceBalanceComponent';

const DisplaceBalances = ({incomes, expenses}) => {
  return (
   
    <Segment textAlign="center"> 
      <Grid columns={2} divided> 
        <Grid.Row>
          <Grid.Column>
              <DisplaceBalance size="tiny" color="green" side="side" value={incomes} title="Incoming"/>
          </Grid.Column>
          <Grid.Column>
              <DisplaceBalance size="tiny" color="red" side="left" value={expenses} title="Expenses"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplaceBalances

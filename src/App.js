import './App.css';
import {  Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import MainHeader from './components/MainHeaderComponent';
import NewEntryFormComponent from './components/NewEntryFormComponent';

function App() {
  return (
   <Container>
      <MainHeader title="Budget" type="h1"/>
    <Statistic size="small">
      <Statistic.Label>Your Balance:</Statistic.Label>
      <Statistic.Value>2,550.53</Statistic.Value>
    </Statistic>

    <Segment textAlign="center"> 
      <Grid columns={2} divided> 
        <Grid.Row>
          <Grid.Column>
            <Statistic size="tiny" color="green">
              <Statistic.Label style={{textAlign:"left"}}>Incoming:</Statistic.Label>
              <Statistic.Value>1,045</Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign:"left"}}>Expenses:</Statistic.Label>
                <Statistic.Value>623.50</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <MainHeader type="h3" title="History"/>
    <Segment color='red'>
      <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'> Something</Grid.Column>
          <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered></Icon>
            <Icon name="trash" bordered></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment color='green'>
      <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'> Something else</Grid.Column>
          <Grid.Column width={3} textAlign='right'>$2,00</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered></Icon>
            <Icon name="trash" bordered></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment color='red'>
      <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'> Something</Grid.Column>
          <Grid.Column width={3} textAlign='right'>$100,00</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered></Icon>
            <Icon name="trash" bordered></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <MainHeader title=" Add new transaction" type="h3"/>
    <NewEntryFormComponent />
   </Container>
  );
}

export default App;

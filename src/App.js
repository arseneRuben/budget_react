import './App.css';
import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import MainHeader from './components/MainHeaderComponent';

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
    <Form unstackable>
      <Form.Group>
        <Form.Input
           icon = "tags"
           width={12}
           label = "Description"
           placeholder="New shinny thing" />
         <Form.Input
           icon = "dollar"
           width={4}
           label = "Value"
           iconPosition='left'
           placeholder="100.00" />
      </Form.Group>
      <Button.Group style={{marginTop : 20}}>
        <Button>Cancel</Button>
        <Button.Or/>
        <Button primary>  Ok</Button>
      </Button.Group>
    </Form>
   </Container>
  );
}

export default App;

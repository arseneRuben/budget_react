import './App.css';
import {  Container, Grid, Icon, Segment } from 'semantic-ui-react';
import MainHeader from './components/MainHeaderComponent';
import NewEntryFormComponent from './components/NewEntryFormComponent';
import DisplaceBalance from './components/DisplaceBalanceComponent';
import DisplaceBalances from './components/DisplaceBalancesComponent';
import EntryLine from './components/EntryLineComponent';

function App() {
  return (
   <Container>
      <MainHeader title="Budget" type="h1"/>
   
    <DisplaceBalance size="small" color="black" side="side" value="2,550.53" title="Your Balance"/>

    <DisplaceBalances/>

    <MainHeader type="h3" title="History"/>
    <EntryLine description=" Income " value="10.00"  isExpense = {true}/>
    <EntryLine description=" Something else" value="2.00"  isExpense={false}/>
    <EntryLine description=" Something " value="100.00"  isExpense={true}/>
    <EntryLine description=" Salary " value="1000.00"  isExpense = {false}/>

    
    
    <MainHeader title=" Add new transaction" type="h3"/>
    <NewEntryFormComponent />
   </Container>
  );
}

export default App;

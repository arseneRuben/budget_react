import './App.css';
import {  Container, Grid, Icon, Segment } from 'semantic-ui-react';
import MainHeader from './components/MainHeaderComponent';
import NewEntryFormComponent from './components/NewEntryFormComponent';
import DisplaceBalance from './components/DisplaceBalanceComponent';
import DisplaceBalances from './components/DisplaceBalancesComponent';
import { useState } from 'react';
import EntryLines from './components/EntryLinesComponent';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  return (
   <Container>
    <MainHeader title="Budget" type="h1"/>
    <DisplaceBalance size="small" color="black" side="side" value="2,550.53" title="Your Balance"/>
    <DisplaceBalances/>

    <MainHeader type="h3" title="History"/>
    <EntryLines entries={entries}/>

    <MainHeader title=" Add new transaction" type="h3"/>
    <NewEntryFormComponent />
   </Container>
  );
}

export default App;
var initialEntries=[
  {
    description:"Work income",
    value : "1000",
    isExpense : false
  },
  {
    description:"Water bill",
    value : "20,20",
    isExpense : true
  },
  {
    description:"Baby shower",
    value : "600",
    isExpense : false
  },
  {
    description:"Rent",
    value : "300",
    isExpense : true
  },
  {
    description:"Fruits",
    value : "40",
    isExpense : true
  },
  {
    description:"Power Bill",
    value : "60,6",
    isExpense : true
  },
]
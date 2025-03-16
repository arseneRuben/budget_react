import './App.css';
import {  Container  } from 'semantic-ui-react';
import MainHeader from './components/MainHeaderComponent';
import NewEntryFormComponent from './components/NewEntryFormComponent';
import DisplaceBalance from './components/DisplaceBalanceComponent';
import DisplaceBalances from './components/DisplaceBalancesComponent';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLinesComponent';
import EditModal from './components/EditModalComponent';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [expenses, setExpenses] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [balance, setBalance] = useState(0);



  useEffect(() => {
    if(!isOpen && entryId){
      const index=entries.findIndex(entry => entry.id = entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntries()
    }
    // eslint-disable-next-line 
  }, [isOpen]);

  useEffect(() => {
    let incomes=0;
    let expenses = 0;
    entries.map(entry => {
      if(entry.isExpense){
         return expenses+=Number(entry.value);
      } else {
         return incomes+=Number(entry.value);
      }
    });
    let balance = incomes - expenses;
    setBalance(balance);
    setExpenses(expenses);
    setIncomes(incomes);
  }, entries)

  function resetEntries(){
    setDescription('')
    setValue('')
    setIsExpense(true)
  }
  function deleteEntry(id){
    console.log(id)
    const result = entries.filter(entry => entry.id!==id);
    setEntries(result)
  }

  function editEntry(id){
    if(id){
      console.log(id)
      const index = entries.findIndex(entry => entry.id = id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description)
      setValue(entries.value)
      setIsExpense(entries.isExpense)
      setIsOpen(true)

    }
  }


  function addEntry() {
    const result = entries.concat({id:entries.length+1, description, value, isExpense});
    setEntries(result);
  }
  return (
   <Container>
    <MainHeader title="Budget" type="h1"/>
    <DisplaceBalance size="small" color="black" side="side" value={balance} title="Your Balance"/>
    <DisplaceBalances incomes={incomes} expenses={expenses}/>

    <MainHeader type="h3" title="History"/>
    <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry}/>

    <MainHeader title=" Add new transaction" type="h3"/>
    <NewEntryFormComponent  addEntry={addEntry} description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense}/>
    <EditModal  isOpen={isOpen}  setIsOpen={setIsOpen} addEntry={addEntry} description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense}/>
    
   </Container>
  );
}

export default App;
var initialEntries=[
  {
    id:"1",
    description:"Work income",
    value : 1000,
    isExpense : false
  },
  {
    id:"5",
    description:"Water bill",
    value : 200,
    isExpense : true
  },
  {
    id:"6",
    description:"Baby shower",
    value : 600,
    isExpense : false
  },
  {
    id:"2",
    description:"Rent",
    value : 300,
    isExpense : true
  },
  {
    id:"3",
    description:"Fruits",
    value : 40,
    isExpense : true
  },
  {
    id:"4",
    description:"Power Bill",
    value : 606,
    isExpense : true
  },
]
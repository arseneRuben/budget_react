import './App.css';
import {  Container  } from 'semantic-ui-react';
import MainHeader from './components/MainHeaderComponent';
import NewEntryFormComponent from './components/NewEntryFormComponent';
import DisplaceBalance from './components/DisplaceBalanceComponent';
import DisplaceBalances from './components/DisplaceBalancesComponent';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLinesComponent';
import EditModal from './components/EditModalComponent';
import { useSelector } from 'react-redux';

function App() {
  const entries = useSelector((state) => state.entries)

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
    //  setEntries(newEntries);
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
    //setEntries(result);
  }
  return (
    <Container>
      <MainHeader title="Budget" type="h1"/>
      <DisplaceBalance size="small" color="black" side="side" value={balance} title="Your Balance"/>
      <DisplaceBalances incomes={incomes} expenses={expenses}/>

      <MainHeader type="h3" title="History"/>
      <EntryLines entries={entries}  editEntry={editEntry}/>

      <MainHeader title=" Add new transaction" type="h3"/>
      <NewEntryFormComponent  addEntry={addEntry} description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense}/>
      <EditModal  isOpen={isOpen}  setIsOpen={setIsOpen} addEntry={addEntry} description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense}/>
      
    </Container>
   
  );
}

export default App;

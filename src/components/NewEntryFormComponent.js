import React, { useState } from 'react'
import {   Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancelComponent';
import EntryForm from './EntryForm';
import { useDispatch } from 'react-redux';
import { addEntryRedux } from '../actions/entries.actions';
import {v4 as uuidv4} from 'uuid'

const NewEntryFormComponent = () => {

const [description, setDescription] = useState('');
const [value, setValue] = useState('');
const [isExpense, setIsExpense] = useState(true);
const dispatch = useDispatch();

function addEntry(){
  dispatch(addEntryRedux({
    id:uuidv4(),
    description,
    value,
    isExpense
  }));
  setDescription("");
  setValue("");
  setIsExpense(true);

}

return (
    <Form unstackable>
    <EntryForm  description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense}/>
     
     <ButtonSaveOrCancel addEntry={addEntry}/>
    </Form>
  )
}

export default NewEntryFormComponent

import React from 'react'
import {   Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancelComponent';
import EntryForm from './EntryForm';

const NewEntryFormComponent = ({addEntry, description, value, isExpense, setDescription, setValue, setIsExpense}) => {


  return (
    <Form unstackable>
    <EntryForm  description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense}/>
     
     <ButtonSaveOrCancel addEntry={addEntry}/>
    </Form>
  )
}

export default NewEntryFormComponent

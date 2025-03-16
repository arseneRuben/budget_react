import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

const EditModal = ({isOpen, setIsOpen, description, value, isExpense, setDescription, setValue, setIsExpense}) => {
  return (
    <Modal open={isOpen}>
        <Modal.Header> Edit Entry</Modal.Header>
        <Modal.Content> 
                <EntryForm  description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense} />
            <Modal.Actions>
                <Button onClick={()=> setIsOpen(false)}>Close</Button>
                <Button onClick={()=> setIsOpen(false)} primary>Ok</Button>

            </Modal.Actions>
        </Modal.Content>
    </Modal>
  )
}

export default EditModal

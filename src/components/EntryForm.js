import React, { Fragment } from 'react'
import {  Checkbox, Form, Segment } from 'semantic-ui-react';

function EntryForm({description,setDescription, value, setValue, isExpense, setIsExpense}) {
  return (
    <Fragment>
    <Form.Group>
        <Form.Input
        icon = "tags"
        width={12}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        label = "Description"
        placeholder="New shinny thing" />
        <Form.Input
        icon = "dollar"
        width={4}
        label = "Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}

        iconPosition='left'
        placeholder="100.00" />
  </Form.Group>
  <Segment compact>
        <Checkbox label="is expense" toggle checked={isExpense}  onChange={() => setIsExpense(oldState => !oldState)} />
      </Segment>
  </Fragment>
  )
}

export default EntryForm

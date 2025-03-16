import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLineComponent';

const EntryLines = ({entries}) => {
  return (
    <Container>
         { entries.map((entry, index) =>  <EntryLine key={index} description={entry.description} value={entry.value}  isExpense = {entry.isExpense}/>)}
    </Container>
  )
}

export default EntryLines

import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLineComponent';

const EntryLines = ({entries, editEntry}) => {
  return (
    <Container>
         { entries.map((entry) =>  <EntryLine key={entry.id} {...entry}  editEntry={editEntry}/>)}
    </Container>
  )
}

export default EntryLines

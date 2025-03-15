import React from 'react'
import { Header } from 'semantic-ui-react'

const MainHeader = (props) => {
  return (
    <Header as={props.type}>{props.title}</Header>
  )
}

export default MainHeader

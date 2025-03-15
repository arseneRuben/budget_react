import React from 'react'
import {  Statistic } from 'semantic-ui-react';

const DisplaceBalance = (props) => {
  return (
    <Statistic size={props.size} color={props.color}>
        <Statistic.Label style={{textAlign:props.side}}>{props.title}:</Statistic.Label>
        <Statistic.Value>{props.value}</Statistic.Value>
  </Statistic>
  )
}

export default DisplaceBalance

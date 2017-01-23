import React from 'react';
import {  Column, FormHorizontal, ControlLabel, Group, Input } from 're-bulma';

const DetailRow = (props) => {
  if (!props.label) {
    return (
      <Column size="isFull">
        <FormHorizontal style={{ marginBottom: props.spacing }}>
          <ControlLabel></ControlLabel>  
          <Group>
            <Input type="text" size="isSmall" isExpanded/>
          </Group>
        </FormHorizontal>
      </Column>
    )
  }
  return (
    <Column>
        <FormHorizontal style={{ marginBottom: props.spacing }} >
          <ControlLabel>{props.label}</ControlLabel>
          <Input value={ props.value } isExpanded />
        </FormHorizontal>
    </Column>    
  )
}

export default DetailRow;
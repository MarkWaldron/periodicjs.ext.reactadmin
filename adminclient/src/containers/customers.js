import React, { Component } from 'react';
import { Container, Content, FormHorizontal, Group, ControlLabel, Button, Title, Table, Tr, Td, Tbody, Thead, Th, Input, Columns, Column, Label } from 're-bulma';
import styles from '../styles';

export default class Customers extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Container style={styles.mainContainer}>
        <Title style={{ textAlign: "center" }} size="is1">Customers</Title>
        <details open>
          <summary style={styles.detailsSummary}>Customer Search</summary>
          <Column size="isHalf" offset="isOffsetOneQuarter">
          <Content>
              <FormHorizontal>
                <ControlLabel>Create Date Range</ControlLabel>
                <Group>
                  <Input type="text" placeholder="mm/dd/yyyy" isExpanded />
                  <Input type="text" placeholder="mm/dd/yyyy" isExpanded />
                  <Button color="isInfo">Go</Button>
                </Group>  
              </FormHorizontal>
              <FormHorizontal>
                <ControlLabel>Search</ControlLabel>
                <Group>
                  <Input type="text" placeholder="" isExpanded />
                  <Button color="isInfo">Go</Button>
                </Group>  
              </FormHorizontal>
            </Content>  
          </Column>
        </details>
        <details open>
          <summary style={styles.detailsSummary}>Customer Results ([#] Records)</summary>
        </details>        
      </Container>
    )
  }
}

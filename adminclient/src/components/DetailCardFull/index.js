import React, { Component } from 'react';
import { Content, Column, Columns, } from 're-bulma';
import DetailRow from './DetailRow.js';
import styles from '../../styles';

export default class DetailCardFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || []
    }
  }
  
  render() {
    return (
      <Column size="isFull">
        <details open>
          <summary style={styles.detailsSummary}>{this.props.title}</summary>
          <Content>
            <Columns size="isFull">
              <Column size="isHalf">
                {this.state.data.map((entry, i) => { 
                if(i % 2 === 0)return (
                  <DetailRow label={entry.label} value={entry.value} spacing={this.props.spacing}/>
                )
                })}
              </Column>
              <Column size="isHalf">
                {this.state.data.map((entry, i) => { 
                if(i % 2 === 1)return (
                  <DetailRow label={entry.label} value={entry.value} spacing={this.props.spacing}/>
                )
                })}
              </Column>
            </Columns>
          </Content>
        </details>
      </Column>
      
    )
  }
}

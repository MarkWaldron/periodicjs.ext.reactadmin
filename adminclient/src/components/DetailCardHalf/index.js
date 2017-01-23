import React, { Component } from 'react';
import { Content, Column, } from 're-bulma';
import DetailRow from './DetailRow.js';
import styles from '../../styles';

export default class DetailCardHalf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || []
    }
  }
  
  render() {
    return (
      <Column size="isHalf">
        <details open>
          <summary style={styles.detailsSummary}>{this.props.title}</summary>
          <Content>          
            {this.state.data.map((entry, i) => { 
            return (
              <DetailRow label={entry.label} value={entry.value} spacing={this.props.spacing}/>
            )
          })}
          </Content>  
        </details>
      </Column>
      
    )
  }
}

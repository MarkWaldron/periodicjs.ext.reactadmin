import React, { Component } from 'react';
import { Container, Table, Tr, Td, Tbody, Tfoot, Thead, Th } from 're-bulma';
import styles from '../styles';
import fetch from 'node-fetch';

let GIFS;


var APPLICATIONS = [
  {name: "Mark Waldron", appGuid: "AP-123123", addressStreet: "40 Conger Street", addressState: "NJ", addressCity: "Bloomfield"},
  {name: "Test User1", appGuid: "AP-321321", addressStreet: "40 Conger Street", addressState: "NJ", addressCity: "Bloomfield"},
  {name: "Test User2", appGuid: "AP-432344", addressStreet: "40 Conger Street", addressState: "NJ", addressCity: "Bloomfield"},
  {name: "Test User3", appGuid: "AP-654982", addressStreet: "40 Conger Street", addressState: "NJ", addressCity: "Bloomfield"}
];


export default class Applications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: []
    }
  }
  componentDidMount() {
    let _this = this;
    fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
    .then(results => {
      return results.json();
    })
    .then(results => {
      console.log(results.data)
      _this.setState({
        gifs: results.data
      })
    })
    .catch(err => {
      console.log('Error with Fetch');
    })
  }
  render() {
    return (
      <Container style={styles.mainContainer}>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Source</Th>
              <Th>URL</Th>
              <Th>Image</Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.gifs.map(function(gif, i) {
              return (
                <Tr key={i}>
                  <Td>{gif.id}</Td>
                  <Td>{gif.source_tld}</Td>
                  <Td>{gif.url}</Td>
                  <Td><img src={gif.images.fixed_height.url} /></Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Container>
    )
  }
}

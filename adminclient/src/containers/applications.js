import React, { Component } from 'react';
import { Container, Table, Tr, Td, Tbody, Thead, Th, Input, Columns, Column, Label } from 're-bulma';
import styles from '../styles';
import SearchBar from '../components/SearchBar';
import request from 'superagent';
import DetailCardFull from '../components/DetailCardFull/index.js';
import DetailCardHalf from '../components/DetailCardHalf/index.js';

export default class Applications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
      applicationData: [
        { label: 'Application GUID', value: 'AP-1234567890' },
        { label: 'Selected Loan Type', value: 'Unsecured Individual Loan' },
        { label: 'Application Status', value: 'Rejected' },
        { label: 'Furthest Status Reached', value: 'Awaiting Documents' },
        { label: 'Application Date', value: '01/22/2016' },
        { label: 'Last Modified Date', value: '01/22/2016' },
        { label: 'Close Date', value: '01/22/2016' },
        { label: 'Adverse Action Code(s)', value: '001, 002' },
      ],
      applicantData: [
        { label: 'Applicant GUID', value: 'AT-1234567890' },
        { label: 'Customer GUID', value: 'CT-1234567890' },
        { label: 'First Name', value: 'Bobby' },
        { label: 'Last Name', value: 'Walker'},
        { label: 'Birthdate', value: '03/30/1990' },
        { label: 'Citizenship', value: 'U.S. Citizen' },
        { label: 'Applicant Status', value: 'Awaiting Documents' },
        { label: 'Review State', value: 'Awaiting Customer Response' }
      ],
      loanRequestedData: [
        { label: 'Loan Type', value: 'Unsecured Individual Loan' },
        { label: 'Loan Amount', value: '$10,000.00' },
        { label: 'Loan Term', value: '36' },
        { label: 'Loan Purpose', value: 'Wedding' },
        { label: 'How They Heard About Us', value: 'Business / Retailer' },
        { label: 'Business Referral', value: 'Wedgewood' },
        { label: 'Cosigner Relationship', value: 'n/a' }
      ],
      loanSelectedData: [
        { label: 'Loan Type', value: 'Unsecured Individual Loan' },
        { label: 'Loan Amount', value: '$10,000.00' },
        { label: 'Loan Term', value: '36' },
        { label: 'Monthly Payment Amount', value: '$300.00' },
        { label: 'APR', value: '19.99%' },
        { label: 'Interest Rate', value: '14.99%' },
        { label: 'Origination Fee Rate', value: '5.00%' },
        { label: 'Origination Fee Amount', value: '$500.00' },
        { label: 'Cosigner Required?', value: 'No' }
      ],
      sourceTrackingData: [
        { label: 'Source', value: 'Facebook' },
        { label: 'Landing Page', value: '/?utm_source=facebook' },
        { label: 'Referral Date', value: '01/01/2017' },
        { label: 'Referrer URL', value: 'www.facbeook.com' }
      ],
      applicationReview: [
        { label: 'Application Reviewer', value: 'ijaz@promisefin.com' },
        { label: 'Review Start Date', value: '01/22/2016' },
        { label: 'Last Review Activity Date', value: '01/22/2016' },
      ],
      loanApprovalData: [
        { label: 'Primary Applicant Verified', value: 'Yes' },
        { label: 'Cosigner Verified', value: 'n/a' }
      ],
      cosignerApplicantData: [
        { label: 'Applicant GUID', value: '' },
        { label: 'Customer GUID', value: '' },
        { label: 'First Name', value: '' },
        { label: 'Last Name', value: '' },
        { label: 'Birthdate', value: '' },
        { label: 'Citizenship', value: '' },
        { label: 'Applicant Status', value: '' },
        { label: 'Review State', value: '' }        
      ]
    }
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    let url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }
  render() {
    return (
      <Container style={styles.mainContainer}>
        <Columns>
          <DetailCardFull data={this.state.applicationData} title="Application Overview" spacing="5px" />
        </Columns>
        <Columns>
          <DetailCardHalf data={this.state.applicantData} title="Primary Applicant" spacing="5px" />
          <DetailCardHalf data={this.state.cosignerApplicantData} title="Cosigner Applicant" spacing="5px" />
        </Columns>
        <Columns>
          <DetailCardHalf data={this.state.loanRequestedData} title="Loan Requested" spacing="5px" />
          <DetailCardHalf data={this.state.loanSelectedData} title="Loan Selected" spacing="5px" />
        </Columns>
        <Columns>
          <DetailCardFull data={this.state.sourceTrackingData} title="Source Tracking" spacing="5px" />
        </Columns>
        <Columns>
          <DetailCardHalf data={this.state.applicationReview} title="Application Review" spacing="5px" />
          <DetailCardHalf data={this.state.loanApprovalData} title="Loan Approval" spacing="5px" />
        </Columns>  
      </Container>
    )
  }
}

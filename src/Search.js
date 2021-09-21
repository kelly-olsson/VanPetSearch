import React, { useState, Component } from "react"
// import 'react-virtualized/styles.css'
import './search.css'
import RegisterTable from "./RegisterTable"
import DeceasedAnimalTable from "./DeceasedAnimalTable"
import LostFoundTable from "./LostFoundTable"

class Search extends Component {
  constructor() {
    super()
    this.state = {
      allRecords: [],
      records: [],
      loading: false
    }
    this.handleClickRegister = this.handleClickRegister.bind(this)
    this.handleClickDeceased = this.handleClickDeceased.bind(this)
    this.handleClickLostFound = this.handleClickLostFound.bind(this)
  }

  async handleClickRegister() {
    this.setState({ loading: true })
    await fetch("https://opendata.vancouver.ca/api/records/1.0/search/?dataset=animal-control-inventory-register&q=&rows=500&sort=dateimpounded&facet=breed&facet=sex&facet=dateimpounded&facet=approxweight&facet=source&facet=status")
      .then(response => response.json())
      .then(data => {
        this.setState(() => {return {allRecords: data.records}})
      })
      this.setState(() => {return {recordComponents: this.state.allRecords.map(record => <RegisterTable key={record.recordid} age={record.fields.age_category} status={record.fields.status}
      dateimpounded={record.fields.dateimpounded} name={record.fields.name} animalid={record.fields.animalid} color={record.fields.color}
      breed={record.fields.breed} sex={record.fields.sex} source={record.fields.source} />)}})
      this.setState({ loading: false })
  }

  async handleClickDeceased() {
    this.setState({ loading: true })
    await fetch("https://opendata.vancouver.ca/api/records/1.0/search/?dataset=animal-control-inventory-deceased-animal&q=&rows=500&sort=deadanimaldate&facet=deadanimalid&facet=deadanimaldate&facet=catother&facet=dogs")
      .then(response => response.json())
      .then(data => {
        this.setState(() => {return {allRecords: data.records}})
      })
      this.setState(() => {return {recordComponents: this.state.allRecords.map(record => <DeceasedAnimalTable key={record.recordid} deadanimalid={record.fields.deadanimalid} deadanimaldate={record.fields.deadanimaldate}
      cats={record.fields.catother} dogs={record.fields.dogs} description={record.fields.description} sex={record.fields.sex}
      aco={record.fields.aco} />)}})
      this.setState({ loading: false })
  }

  async handleClickLostFound() {
    this.setState({ loading: true })
    await fetch("https://opendata.vancouver.ca/api/records/1.0/search/?dataset=animal-control-inventory-lost-and-found&q=&rows=1000&sort=date&facet=breed&facet=color&facet=date&facet=datecreated&facet=sex&facet=state")
      .then(response => response.json())
      .then(data => {
        this.setState(() => {return {allRecords: data.records}})
      })
      this.setState(() => {return {recordComponents: this.state.allRecords.map(record => <LostFoundTable key={record.recordid} breed={record.fields.breed} color={record.fields.color}
      date={record.fields.date} name={record.fields.name} sex={record.fields.sex} state={record.fields.state} />)}})
      this.setState({ loading: false })
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <p>Please click on the search category to get started.</p>
        <div className='tableButtons'>
          <button onClick={this.handleClickRegister}>Animals in Custody</button>
          <button onClick={this.handleClickDeceased}>Animals Found Deceased</button>
          <button onClick={this.handleClickLostFound}>Pets Reported Lost</button>
        </div>
        <div>
          {this.state.loading ? <p>Loading...this may take a moment.</p> : this.state.recordComponents}        
        </div>
      </div>
    )
  }
}

export default Search
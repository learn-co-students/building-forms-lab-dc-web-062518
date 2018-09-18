// Add BandInput component
import React, { Component } from 'react'
import { connect } from "react-redux"

class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({type: "ADD_BAND", band: this.state})
    this.setState({
      name: ""
    })
  }


  render() {
    return(
      <div>
        <h2>New Band</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name</label>
          <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.name}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect()(BandInput)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import uuid from 'uuid'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange =(e)=>{
    this.setState({name: e.target.value})
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.addBand({...this.state, id: uuid()})
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="col-md-4 control-label">Band Name</label>
          <input value={this.state.name} type='text' onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch=>{
  return { addBand: band => dispatch({type: 'ADD_BAND', band}) }
}

export default connect(null, mapDispatchToProps)(BandInput)

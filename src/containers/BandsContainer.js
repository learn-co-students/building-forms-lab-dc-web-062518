import React, { Component } from 'react'
import { connect } from "react-redux"
import BandInput from "../components/BandInput"

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(band => <li>{band.name}</li>)

  render() {
    return(
      <div>
        <BandInput />
        <ul>
          {this.props.bands ? this.renderBands() : null }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bands: state.bands
})

export default connect(mapStateToProps)(BandsContainer)

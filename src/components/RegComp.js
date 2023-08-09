import React, { Component } from 'react'

 class RegComp extends Component {
  render() {
    console.log('regular comp')

    return (
      <div>
        Regular comp {this.props.name}
      </div>
    )
  }
}

export default RegComp


import React, { Component } from 'react'

 class RComp extends Component {
  render() {
    console.log('R comp')
    return (
      <div>
        Rcomp name {this.props.name}
        Rcomp comments {this.props.comments}
      </div>
    )
  }
}

export default RComp

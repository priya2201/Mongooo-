import React, { PureComponent } from 'react'

 class PpureCOmp extends PureComponent {
  render() {
    console.log(' p pure comp')
    return (
      <div>
      Pure Name   {this.props.name}
      Pure Comments {this.props.comments}
      </div>
    )
  }
}

export default PpureCOmp

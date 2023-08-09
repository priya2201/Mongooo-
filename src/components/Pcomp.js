import React, { PureComponent } from 'react'
import PpureCOmp from './PpureCOmp'
import RComp from './RComp'

 class Pcomp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'siaa',
         comments:''
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'pia',
                comments:'fulfilled'
            })
        },1000)
    }
    
  render() {
    console.log("p parent  comp ")
    return (
      <div>
        parent comp
        <PpureCOmp name={this.state.name}/>
        <PpureCOmp comments={this.state.comments}/>
        <RComp name={this.state.name}/>
        <RComp comments={this.state.comments}/>

      </div>
    )
  }
}

export default Pcomp

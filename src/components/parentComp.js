import React, { Component ,PureComponent} from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

 class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'sia'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'sia'
            })
        },2000
        )
    }
    
  render() {
    console.log('parent comp')
    return (
      <div>
        parent comp
        <MemoComp name={this.state.name}/>
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp

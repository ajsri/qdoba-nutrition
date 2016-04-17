import React from 'react'
import ReactDOM from 'react-dom'

class QdobaNutrition extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "Qdoba Nutrition"
    }
  }
  render(){
    return(
      <div>{this.state.title}</div>
    )
  }
}

ReactDOM.render(<QdobaNutrition/>, document.getElementById('app'));


import React from 'react'
import ReactDOM from 'react-dom'
import menuItems from './items.json'

class QdobaNutrition extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "Qdoba Nutrition",
      order: [],
      menu: {},
      nutrition: {
        calories: 0, fat: 0, protein: 0, carbs: 0, sodium: 0
      }
    }
  }

  componentDidMount(){
    let menu = {
      sauce: [],
      toppings: [],
      meat: [],
      base: [],
      beans: [],
      rice: []
    }
    menuItems.forEach((item, i) => {
      let cat = item.category.toLowerCase()
      menu[cat].push(item)
    })
    this.setState({menu})
  }

  updateOrder(item, e) {
    let order = this.state.order
    if(e.target.checked){
      order.push(item)
      this.setState({order})
    }
    else{
      order.splice(order.indexOf(item), 1)
      this.setState({order})
    }
    this.calculateNutrition(order)
  }

  calculateNutrition(order){
    let calories = 0, fat = 0, protein = 0, carbs = 0, sodium = 0
    order.forEach((item, i) => {
      calories += parseInt(item.calories)
      protein += parseInt(item.protein)
      fat += parseInt(item.fat)
      carbs += parseInt(item.carbohydrates)
      sodium += parseInt(item.sodium)
    })
    let nutrition = {
      calories, fat, protein, carbs, sodium
    }
    this.setState({nutrition})
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        {this.state.order.length > 0 &&
          <div>
            <div>Calories: {this.state.nutrition.calories}</div>
            <div>Protein: {this.state.nutrition.protein}</div>
            <div>Fat: {this.state.nutrition.fat}</div>
            <div>Carbs: {this.state.nutrition.carbs}</div>
            <div>Sodium: {this.state.nutrition.sodium}</div>
          </div>
        }
        {Object.keys(this.state.menu).map((cat, i) => {
          return(
            <div key={i}>
              <h1>{cat}</h1>
              {this.state.menu[cat].map((item, i) => {
                return(
                  <div className="checkbox" key={i}>
                    <label>
                      <input type="checkbox"
                             onClick={(e)=>this.updateOrder(item, e)}/>
                      {item.name}
                    </label>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

ReactDOM.render(<QdobaNutrition/>, document.getElementById('app'));


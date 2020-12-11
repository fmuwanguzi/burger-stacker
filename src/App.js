import React, {Component} from 'react'
import './App.css';
import Ingredients from './components/Ingredients'
import Burger from './components/Burger'

class App extends Component {
  state = {
    ingredientList: this.props.ingredientList,
    stack: []
  }

  handleClick = (e, idx) => {
    const stackCopy = [...this.state.stack]
    stackCopy.unshift(this.state.ingredientList[idx])
    this.setState({
      stack: stackCopy
    })
  }

  handleClear = (e) => {
    this.setState({
      stack: []
    })
  }

  render() {
    return (
      <div className="App">
        <Ingredients allIngredients={this.state.ingredientList} moveIngredients={this.handleClick}/>
        <Burger burger={this.state.stack} clear={this.handleClear}/>
      </div>
    );

  }
}
export default App;

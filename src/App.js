import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import Recipes from './Component/Recipes';
import Router from './Component/Router'
class App extends React.Component {
constructor(){
  super();
  this.state={
    recipes:[]
    
  }
}
  getRecipe = async (e)=>{
    const recipeName=e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call= await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
    const data = await api_call.json();
    
    this.setState({
      recipes:data.recipes
    })

    console.log(this.state.recipes)
  }

  filterdeRecipe =(eve)=>{
    const filt=this.state.recipes.filter(rec=>rec.recipe_id===eve.recipe_id)
    this.setState({filterd:filt})
    
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
         <div className='app-title'>Recipe Search</div>
        </header>
        <Form getRecipe={this.getRecipe}/>
       <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
  
}

export default App;

import React from 'react'
import { Link } from "react-router-dom";

class Recipe extends React.Component{
    state={
        activerecipe:[]
    }
    componentDidMount=async()=>{
        const recipeTitle=this.props.location.state.recipes;
    
    const Req= await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
    const Res = await Req.json();
    
    this.setState({
        activerecipe:Res.recipes[0]
    })

    console.log(this.state.activerecipe)
 
    }
    render(){
        console.log(this.props)
      // const { recip } = this.state.activerecipe
        return(
            <div className='container'>
                <div className='active-recipe'>
                    <img className='avtive-recipe__img' src={this.state.activerecipe.image_url} alt={this.state.activerecipe.recipeTitle}/>
                    <h3 className="active-recipe__title">{ this.state.activerecipe.title }</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{ this.state.activerecipe.publisher }</span>
            </h4>
            <p className="active-recipe__website">Website: 
              <span><a href={this.state.activerecipe.publisher_url}>{this.state.activerecipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
                </div>
            </div>

        )
    }
}
export default Recipe
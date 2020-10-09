import React from 'react'
import { Link } from "react-router-dom";

const Recipes =(props)=>(
    <div className='container'>
      <div className='row'>
      
         {
          props.recipes.map((recipe)=>{
            return(
              <div key={recipe.recipe_id} className='col-md-4' style={{marginBottom:"2 rem"}}>
             <div className='recipes__box' >
               <div className='recipe__box_img'>
               <img src={recipe.image_url} alt={recipe.title}/>
               </div>
              <div className='recipe__box_text'>
              <h5 className='recipes__title'>
                {recipe.title.length < 20 ? `${recipe.title}`: `${recipe.title.substring(0,25)}...`}
                </h5>
              <p className='recipes__subtitle'>
            <span>PUBLISHER:{recipe.publisher}</span>
              </p>
              </div>
              <button className="recipe_buttons">
               
               <Link to={{pathname:`/recipe/${recipe.recipe_id}`,
               state:{recipe:recipe.title}}} >View REcipe</Link>
              </button>
           
            </div>
            </div>
            )
          })
        }
    
      </div>
    </div>
)
export default Recipes;
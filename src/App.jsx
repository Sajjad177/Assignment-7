
import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Recipes from './Component/Recipes/Recipes'
import Sidebar from './Component/SideBar/Sidebar'

function App() {
  const [recipes,setRecipes] = useState([])

  const handelCook = (recipe) =>{
    const newRecipes = recipes.find((recipeId => recipeId.id === recipe.id))

    if(!newRecipes){
      setRecipes([...recipes,recipe])
    }else{
      alert('Already select')
    }
  }

  return (
    <>
      <Header></Header>
      <div className='container m-auto flex justify-between mb-20 gap-5'>
        <Recipes
          handelCook={handelCook}>
        </Recipes>

        <Sidebar
          recipes ={recipes}>
        </Sidebar>
      </div>
    </>
  )
}

export default App

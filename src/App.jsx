
import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Recipes from './Component/Recipes/Recipes'
import Sidebar from './Component/SideBar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [recipes,setRecipes] = useState([])
  // const [preparing,setPreparing] = useState([])

  const handelCook = (recipe) =>{
    const newRecipes = recipes.find((recipeId => recipeId.id === recipe.id))

    if(!newRecipes){
      setRecipes([...recipes,recipe])
    }else{
      toast('Already Selected')   
    }
  }

  // const handelPreparing = (cook) =>{
  //  console.log('clicked')
  // //  console.log(cook)
  //     const  newCooking = [...preparing,cook] 
  //     setPreparing(newCooking)
  // }



  return (
    <>
      <Header></Header>
      <div className='container m-auto flex justify-between mb-20 gap-5'>
        <Recipes
          handelCook={handelCook} 
          >
        </Recipes>
        <Sidebar
          // currentCook = {currentCook}
          recipes ={recipes}
          // preparing = {preparing}
          // handelPreparing={handelPreparing}
          >
        </Sidebar>
        
        <ToastContainer />
        
      </div>
    </>
  )
}

export default App

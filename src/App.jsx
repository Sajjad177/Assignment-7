
import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Recipes from './Component/Recipes/Recipes'
import Sidebar from './Component/SideBar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [recipes,setRecipes] = useState([])
  const [preparing,setPreparing] = useState([])
  const [totalTime,setTotalTime] = useState(0)
  const [totalCalories,setTotalCalories] = useState(0)

  const handelCook = (recipe) =>{
    const newRecipes = recipes.find((recipeId => recipeId.id === recipe.id))

    if(!newRecipes){
      setRecipes([...recipes,recipe])
    }else{
      toast('Already Selected')   
    }
  }

  const handelPreparing = (cook,time,calories,id) => {
            
      console.log('your id is',id)

      const cookMaking = [...preparing,cook]
      setTotalTime(totalTime + parseInt(time.slice(0,2)))
      setTotalCalories(totalCalories + parseInt(calories.slice(0,3)))

      const isExist = recipes.filter((item => item.id != id))
      // console.log(isExist)
      setRecipes(isExist)
      setPreparing(cookMaking)
  }

  return (
    <>
      <Header></Header>
      <div className='container m-auto flex justify-between mb-20 gap-5'>
        <Recipes
          handelCook={handelCook} 
          >
        </Recipes>

        <Sidebar
          recipes ={recipes}
          preparing={preparing}
          handelPreparing={handelPreparing} 
          totalTime={totalTime}
          totalCalories={totalCalories}>
        </Sidebar>
        
        <ToastContainer />
        
      </div>
    </>
  )
}

export default App

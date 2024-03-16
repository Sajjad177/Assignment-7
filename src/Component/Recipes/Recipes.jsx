import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({handelCook}) => {
    // console.log(handelCurrentCook)
    const [recipes,setRecipes] = useState([])

    useEffect(() => {
        fetch('Recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className='grid grid-cols-2'>
            {
                recipes.map((recipe,idx) => 
                <Recipe 
                    key={idx} 
                    recipe ={recipe}
                    handelCook ={handelCook}
                    >
                </Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handelCook:PropTypes.func
};

export default Recipes;
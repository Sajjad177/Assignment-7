
import PropTypes from 'prop-types';
import { MdAccessTime } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe,handelCook}) => {
    const {image,name,description,ingredients,time,calories} = recipe
    
    return (
        <div>
            
            <div className='border-2 m-5 p-5 space-y-3 rounded-xl lg:w-[400px] '>
                <img className='rounded-xl h-80' src={image} alt="" />
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className='border-b-2 border-gray-300 pb-8'>{description}</p>
                <h2 className='font-bold'>Ingredients : {ingredients.length}</h2>
                <ul className='border-b-2 border-gray-300 pb-9'>
                    <li>. {ingredients[0]}</li>
                    <li>. {ingredients[1]}</li>
                    <li>. {ingredients[2]}</li>
                </ul>
                <div className='flex justify-between' >
                    <div className='flex items-center gap-3'>
                        <span className='text-xl'><MdAccessTime /></span>
                        <h4>{time.slice(0,2)} minute</h4>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-xl'><AiOutlineFire /></span>
                        <h4>{calories}</h4>
                    </div>
                </div>
                <button onClick={() => handelCook(recipe)} className='btn bg-[#0BE58A] rounded-3xl'>Want to cook</button>
                
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object.isRequired,
    handelCook:PropTypes.func.isRequired
};

export default Recipe;
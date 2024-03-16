
import PropTypes from 'prop-types';
import Select from '../Select/Select';
import FoodPreparing from "../FoodPreparing/FoodPreparing"
import { useState } from 'react'


const Sidebar = ({recipes}) => {
            
    //! preparing section 

        const [preparing,setPreparing] = useState([])
        const [totalTime,setTotalTime] = useState(0)
        const [totalCalories,setTotalCalories] = useState(0)


        const handelPreparing = (cook,time,calories,id) => {
            console.log('your id is',id)
            const cookMaking = [...preparing,cook]
            // setPreparing(cookMaking)
            setTotalTime(totalTime + parseInt(time.slice(0,2)))
            setTotalCalories(totalCalories + parseInt(calories.slice(0,3)))
            
            // const isExist = preparing.filter((item) => item.id !== id)
            // setPreparing(isExist);
            setPreparing(cookMaking)
        }

        


    return (
        <div className=' w-[35vw] p-5 rounded-xl my-5 border-2 border-gray-500'>
            <h4 className='text-2xl font-bold p-5 text-center border-b-2 border-gray-600'>Want to cook : {recipes.length} </h4>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            {
                recipes.map((recipe,idx)=>
                 <Select
                    key={idx}
                    recipe = {recipe}
                    idx = {idx}
                    handelPreparing = {handelPreparing}
                    >
                 </Select>)
            }
            
            <h4 className='text-2xl font-bold p-5 text-center border-b-2 border-gray-600'> Currently cooking: {preparing.length} </h4>

            {/* preparing section  */}
            <div className='overflow-x-auto'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                </table>
            </div>
            {
                preparing.map((cooked,idx) =>
                 <FoodPreparing
                    key={idx}
                    cooked = {cooked}>
                 </FoodPreparing>)
            }
            <div className='flex gap-10'>
                <h5>Total Time = {totalTime} <br /> minute</h5> 
                <h5>Total Calories = <br /> {totalCalories} calories </h5>
            </div>
            
        </div>
    );
};

Sidebar.propTypes = {
    recipes:PropTypes.array.isRequired,
    handelPreparing:PropTypes.func,
    currentCook:PropTypes.func
};

export default Sidebar;
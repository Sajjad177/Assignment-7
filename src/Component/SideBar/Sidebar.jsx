
import PropTypes from 'prop-types';
import Select from '../Select/Select';
import FoodPreparing from "../FoodPreparing/FoodPreparing"
// import { useState } from 'react'


const Sidebar = ({recipes,preparing,handelPreparing,totalTime,totalCalories}) => {
            
    //! preparing section 

        // const [preparing,setPreparing] = useState([])
        // const [totalTime,setTotalTime] = useState(0)
        // const [totalCalories,setTotalCalories] = useState(0)
        // // const [exist,setExist] = useState([])


        // const handelPreparing = (cook,time,calories,id) => {

        //     console.log('your id is',id)
        //     const cookMaking = [...preparing,cook]

        //     setTotalTime(totalTime + parseInt(time.slice(0,2)))
        //     setTotalCalories(totalCalories + parseInt(calories.slice(0,3)))

        //     const isExist = preparing.filter((item => item.id != id))
        //     console.log(isExist)

        //     setPreparing(cookMaking)
        // }

        


    return (
        <div className=' w-[35vw] p-5 rounded-xl my-5 border-2 border-gray-500'>
            <h4 className='text-2xl font-bold p-5 text-center border-b-2 border-gray-600'>Want to cook : {recipes.length} </h4>
                <div className='overflow-x-auto'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='w-5 flex flex-1'>Name</th>
                                <th className='text-center'>Time</th>
                                <th className='pr-2 pl-10'>Calories</th>
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
            
            <h4 className='text-2xl font-bold p-5 text-center border-b-2 border-gray-600'> Currently cooking : {preparing.length} </h4>

            {/* preparing section  */}
            <div className='overflow-x-auto'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='w-9'>Name</th>
                            <th className='text-center'>Time</th>
                            <th className='text-center'>Calories</th>
                        </tr>
                    </thead>
                </table>
            </div>
            {
                preparing.map((cooked,idx) =>
                 <FoodPreparing
                    key={idx}
                    idx={idx}
                    cooked = {cooked}>
                 </FoodPreparing>)
            }
            <div className='flex justify-center gap-16'>
                <h5 className='pl-20'>Total Time = {totalTime} <br /> minute</h5> 
                <h5 className='pl-24'>Total Calories = <br /> {totalCalories} calories </h5>
            </div>
            
        </div>
    );
};

Sidebar.propTypes = {
    recipes:PropTypes.array.isRequired,
    handelPreparing:PropTypes.func,
    currentCook:PropTypes.func,
    preparing:PropTypes.object,
    totalTime:PropTypes.array,
    totalCalories:PropTypes.array
};

export default Sidebar;
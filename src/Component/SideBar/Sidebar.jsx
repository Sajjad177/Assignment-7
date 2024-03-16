
import PropTypes from 'prop-types';
import Select from '../Select/Select';
import FoodPreparing from "../FoodPreparing/FoodPreparing"


const Sidebar = ({recipes,preparing,handelPreparing,totalTime,totalCalories}) => {
    console.log(typeof handelPreparing)
    return (
        <div className=' lg:w-[35vw] lg:p-5 lg:m-0 m-3 rounded-xl my-5 border-2 border-gray-500'>
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

            <div className='overflow-x-auto'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='lg:w-9'>Name</th>
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
                <h5 className='lg:pl-20'>Total Time = {totalTime} <br /> minute</h5> 
                <h5 className='lg:pl-24'>Total Calories = <br /> {totalCalories} calories </h5>
            </div>
            
        </div>
    );
};

Sidebar.propTypes = {
    recipes:PropTypes.array.isRequired,
    preparing:PropTypes.array.isRequired,
    handelPreparing:PropTypes.func,
    // currentCook:PropTypes.func,
    totalTime:PropTypes.number,
    totalCalories:PropTypes.number
};

export default Sidebar;
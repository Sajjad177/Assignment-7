
import PropTypes from 'prop-types';
import Select from '../Select/Select';

const Sidebar = ({recipes}) => {
    // console.log(recipes)
    return (
        <div className='bg-gray-500 w-[35vw] p-5 rounded-xl my-5'>
            <h4 className='text-2xl font-bold p-5 text-center border-b-2 border-gray-600'>Want to cook : {recipes.length} </h4>
                <table className='table'>
                    <thead>
                        <tr className=''>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                </table>
            {
                recipes.map((recipe,idx)=>
                 <Select
                    key={idx}
                    recipe = {recipe}
                    idx = {idx}>
                 </Select>)
            }
        </div>
    );
};

Sidebar.propTypes = {
    recipes:PropTypes.object.isRequired
};

export default Sidebar;
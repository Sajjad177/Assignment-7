
import PropTypes from 'prop-types';

const Select = ({recipe,idx,handelPreparing}) => {
    // console.log(recipe)
    const {name,time,calories} = recipe
    return (
        <div className='py-3'>
            <table className='table'>
                <tr className="bg-base-200">
                    <th>{idx + 1}</th>
                    <td>{name}</td>
                    <td>{time.slice(0,2)}</td>
                    <td>{calories.slice(0,3)}</td>
                    <button onClick={()=>handelPreparing(recipe.id)} className='btn bg-[#0BE58A]'>Preparing</button>
                </tr>
            </table>
            
        </div>
    );
};

Select.propTypes = {
    recipe:PropTypes.array.isRequired,
    idx:PropTypes.number.isRequired,
    handelPreparing:PropTypes.func
};

export default Select;
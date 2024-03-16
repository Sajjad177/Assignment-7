
import PropTypes from 'prop-types';


const Select = ({recipe,idx,handelPreparing}) => {
    const {name,time,calories} = recipe
    return (
        <div className=''>
            <div className='flex lg:flex-row flex-col items-center bg-base-200 my-4 justify-center'>
                <th className='w-1 p-2 lg:flex hidden'>{idx + 1}</th>
                <table className='table flex items-center justify-center'>
                
                    <tbody>
                        <tr className="text-black">
                            <th className='w-5 flex flex-1'>{name} <br/> </th>
                            <td className='text-center'>{time.slice(0,2)} <br /> min</td>
                            <td className='text-center'>{calories.slice(0,3)} <br /> calories</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={()=>handelPreparing(recipe,time,calories,recipe.id)} className='btn bg-[#0BE58A] rounded-3xl'>Preparing</button>
            </div>

        </div>
        
    );
    
};

Select.propTypes = {
    recipe:PropTypes.array.isRequired,
    idx:PropTypes.number.isRequired,
    handelPreparing:PropTypes.func,
};

export default Select;
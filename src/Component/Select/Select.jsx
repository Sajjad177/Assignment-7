
import PropTypes from 'prop-types';


const Select = ({recipe,idx,handelPreparing}) => {

    const {name,time,calories} = recipe
    return (
        <div className=''>
            <div className='flex items-center bg-base-200 my-4'>
                <th className='w-1 p-2'>{idx + 1}</th>
                <table className='table'>
                    <tr className="">
                        {/* <th className='w-1'>{idx + 1}</th> */}
                        <th className='w-12'>{name}</th>
                        <td className='text-center'>{time.slice(0,2)}</td>
                        <td className='text-center '>{calories.slice(0,3)}</td>
                    </tr>
                </table>
                <button onClick={()=>handelPreparing(recipe,time,calories)} className='btn bg-[#0BE58A]'>Preparing</button>
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
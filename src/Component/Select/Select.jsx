
import PropTypes from 'prop-types';

const Select = ({recipe,idx}) => {
    
    const {name,time,calories} = recipe
    return (
        <div>
             <div className="">
                <table className="table">
                    <tbody>
                    <tr className='bg-purple-200'>
                        <p>{idx + 1}</p>
                        <td>{name}</td>
                        <td>{time.slice(0,2)}<br /> min</td>
                        <td className=''>{calories.slice(0,3)}<br /> calories</td>
                        <button className='btn bg-[#0BE58A] border-none rounded-3xl mt-2'>Preparing</button>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Select.propTypes = {
    recipe:PropTypes.array.isRequired,
    idx:PropTypes.number.isRequired
};

export default Select;
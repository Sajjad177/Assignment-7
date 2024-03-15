
import PropTypes from 'prop-types';

const Select = ({recipe,idx}) => {
    // {idx + 1}
    // {name}
    // {time.slice(0,2)}
    // {calories.slice(0,3)}
    const {name,time,calories} = recipe
    return (
        <div className='py-3'>
            <table className='table'>
                <tr className="bg-base-200">
                    <th>{idx + 1}</th>
                    <td>{name}</td>
                    <td>{time.slice(0,2)}</td>
                    <td>{calories.slice(0,3)}</td>
                    <button className='btn bg-[#0BE58A]'>Preparing</button>
                </tr>
            </table>
            
        </div>
    );
};

Select.propTypes = {
    recipe:PropTypes.array.isRequired,
    idx:PropTypes.number.isRequired
};

export default Select;
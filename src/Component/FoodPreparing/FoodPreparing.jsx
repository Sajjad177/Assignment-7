import PropTypes from 'prop-types'

const FoodPreparing = ({cooked,idx}) => {

    const {name,time,calories} = cooked
    return (
        <div className='my-5'>
            
            <div className='overflow-x-auto bg-base-200 flex items-center'>
                <p className='w-1 p-2 lg:flex hidden'>{idx + 1}</p>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th className='lg:w-5 flex flex-1'>{name}</th>
                            <th className='text-center'>{time}</th>
                            <th className='text-center'>{calories}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
FoodPreparing.propTypes ={
    cooked:PropTypes.object,
    idx:PropTypes.number.isRequired,
}
export default FoodPreparing;
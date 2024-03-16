import PropTypes from 'prop-types'

const FoodPreparing = ({cooked}) => {

    const {name,time,calories} = cooked
    return (
        <div className='my-5'>
            
            <div className='overflow-x-auto bg-base-200'>
                <table className='table'>
                    <tr>
                        <th>{name}</th>
                        <th>{time}</th>
                        <th>{calories}</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};
FoodPreparing.propTypes ={
    cooked:PropTypes.object
}
export default FoodPreparing;
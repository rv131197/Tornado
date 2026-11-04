import {DUMMY_URL} from '../utilities/constants';

const ItemsList = (props) => {
    console.log(props.data)
    const {name} = props.data;
    return  <div className="font-normal text-xs border-b-2 border-gray-200 m-2 p-2 text-left flex justify-between">
        <div className='w-6/12'>
        <div className="font-bold" >        
                      <span >  {props.data.name}</span>
                       <span> - ₹{props.data.price ?props.data.price/100 : props.data.defaultPrice/100 }</span> 
                           
        </div>
        <p>{props.data.description}</p>
        
        </div>
        <div className='w-3/12'>
            <button className='absolute bg-amber-50 p-2'>Add +</button>
        <img className="" src={DUMMY_URL} />  
        </div>
     </div>
}

export default ItemsList;
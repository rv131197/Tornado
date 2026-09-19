import restaurantsList from '../utilities/mockData';
import RestuarantCard from './RestuarantCard';
import {SEARCH_ICON_URL} from '../utilities/constants';
import { useState } from 'react';


const Body = () => {
    const [resList, setResList] = useState(restaurantsList)
    return (
        <div className='bodycontainer'>
            <div className='btn-container'>
            <div className='searchbar-container'>
                <input className='input' type='text' placeholder='search for'></input>
                <img className='searchicon' src={SEARCH_ICON_URL} />
            </div>

            <div className='filter-container'>
                <button className='filter-btn' onClick={()=>{
                    const newResList = resList.filter(res => res.info.avgRating > 4)
                    setResList(newResList)
                }}>
                    Filter Restuarants
                    </button>
            </div>
            </div>
            

            <div className='restuarant-container'>
                {resList.map(resData => <RestuarantCard key={resData.info.id} res = {resData}/>)}
            </div>
                    </div>
    )
}

export default Body;
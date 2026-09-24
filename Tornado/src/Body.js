import RestuarantCard from './RestuarantCard';
import Shimmer from './Shimmer';
import {SEARCH_ICON_URL, SWIGGY_URL, DATA_UPDATE_URL} from '../utilities/constants';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';


const Body = () => {
    const [resList, setResList] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [filteredData, setFilterData] = useState('');
    const { params } = useParams(); 

    useEffect(()=> {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL);
        const jsonData = await data.json();
        setResList(jsonData.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setSearchData(jsonData.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(searchData);
    }

    const fetchMoreData = async() => {
        const data = await fetch(DATA_UPDATE_URL+params);
        const moreData = await data.json();
        console.log(moreData);
    } 


    return resList.length === 0 ? <Shimmer /> : (
        <div className='bodycontainer'>
            <button onClick={() => fetchMoreData()}>Load More Data..</button>
            <div className='btn-container'>
            <div className='searchbar-container'>
                <input className='input' type='text' 
                placeholder='search for' value={filteredData} 
                onChange={(e) => {
                    setFilterData(e.target.value);
                }}></input>
               <button className='search-btn' onClick={() => {
                const searchData = resList.filter((res) => res.info.name.toLowerCase().includes(filteredData.toLowerCase()));
                setSearchData(searchData);
               }}>

                <img className='searchicon' src={SEARCH_ICON_URL} /></button> 
            </div>

            <div className='filter-container'>
                <button className='filter-btn' onClick={()=>{
                    const newResList = resList.filter(res => res.info.avgRating > 4)
                    setResList(newResList)
                }}>
                    Top Rated Restuarants
                    </button>
            </div>
            </div>
            

            <div className='restuarant-container'>
                {searchData.map(resData => <Link key={resData.info.id} to={'/restuarants/'+resData.info.id}><RestuarantCard  res = {resData}/></Link>)}
            </div>
                    </div>
    )
}

export default Body;
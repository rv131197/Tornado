import { useState, useEffect } from "react";
import { RESTUARANT_MENU_API } from '../utilities/constants'

const useFetchMenu = (resId) => {
const [resInfo, setResInfo] = useState(null);

useEffect(()=>{
    fetchData();
}, [])

    
    const fetchData = async () => {
        const data = await fetch(RESTUARANT_MENU_API+resId);
        
        const json = await data.json();
        // console.log
        setResInfo(json.data);
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    }
    return resInfo;
}

export default useFetchMenu;
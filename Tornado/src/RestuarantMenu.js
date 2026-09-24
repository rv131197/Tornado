import { useEffect, useState } from "react";
import {RESTUARANT_MENU_API, styleLogo, CDN_LINK_IMAGE } from '../utilities/constants'
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestuarantMenu = () => {
    const { id } = useParams();
    const [resDetails, setResDetails] = useState({});
    const [resMenu, setResMenu] = useState({})

    useEffect(() => {
        fetchRestuarantMenu();
    }, [])

    const fetchRestuarantMenu = async () => {
            const data = await fetch(RESTUARANT_MENU_API+id);
            const json = await data.json();
            console.log(json.data)
            setResDetails(json.data.cards[2].card.card.info)
            setResMenu(json.data.cards[4])
        }

        if(Object.keys(resDetails).length === 0) return <Shimmer />

    return(
        <div>
            <div className="res-details-container">
                <h1>{resDetails.name} </h1>
                <img className='logo' style={styleLogo} src={CDN_LINK_IMAGE+resDetails.cloudinaryImageId} />
                <p>{resDetails.costForTwo} - {resDetails.costForTwo}</p>
                <p>{resDetails.cuisines.join(", ")} </p>
                <p>Delivery Time - {resDetails.sla.deliveryTime}mins</p>
            </div>
            <div className="res-menu-container">

            </div>
        </div>
    )
}

export default RestuarantMenu;
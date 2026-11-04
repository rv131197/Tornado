import useFetchMenu from "../utilities/useFetchMenu";
import {styleLogo, CDN_LINK_IMAGE } from '../utilities/constants'
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import RestuarantAccordian from "./RestuarantAccordian";

const RestuarantMenu = () => {
    const { id } = useParams();
    const resInfo = useFetchMenu(id);

    if(!resInfo) return <Shimmer />
    const resDetails = resInfo.cards[2].card.card.info
    const menu = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    const categories = menu.filter(res => res.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    return(
        <div>
            <div className="res-details-container text-center">
                <h1 className="font-bold mt-4">{resDetails.name} </h1>
                <img className='logo p-4' style={styleLogo} src={CDN_LINK_IMAGE+resDetails.cloudinaryImageId} />
                <p className="font-bold text-m">{"Cost"} - {resDetails.costForTwo}</p>
                <p className="font-bold text-xs m-2">{resDetails.cuisines.join(", ")} </p>
                <p className="font-bold text-xs mb-2">Delivery Time - {resDetails.sla.deliveryTime}mins</p>
                <div className="font-bold text-xl m-4">
                    
                    {categories.map(cat =>  <RestuarantAccordian key={cat.card.card.title} data={cat.card.card}/>)}
                </div>

            </div>
            {/* <div className="res-menu-container">
            </div> */}
        </div>
    )
}

export default RestuarantMenu;
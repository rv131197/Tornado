import {styleLogo, CDN_LINK_IMAGE} from '../utilities/constants'

const RestuarantCard = (props) => {
    console.log(props)
    const {res} = props;
        return (
                <div className='card' key={res.info.id}>
                <img className='logo' style={styleLogo} src={CDN_LINK_IMAGE+res.info.cloudinaryImageId} />
                <h1>{res.info.name}</h1>
                <h2>{res.info.cuisines.join(', ')}</h2>
                <h3>Rating: {res.info.avgRating}</h3>
                <h4>{res.info.sla.deliveryTime}mins</h4>
                <h4>{res.info.costForTwo}</h4>
            </div>
            )
       
}

export const Promoted = (RestuarantCard) => {
    return (props) => {
        console.log("promoted:", props)
        return <div>
            <label className="absolute bg-black text-white">
                Promoted
            </label>
            <RestuarantCard {...props} />
        </div>
    }
}

export default RestuarantCard;
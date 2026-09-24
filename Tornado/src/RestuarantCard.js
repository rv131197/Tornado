import {styleLogo, CDN_LINK_IMAGE} from '../utilities/constants'

const RestuarantCard = (props) => {
    const {res} = props;
    console.log(res)
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

export default RestuarantCard;
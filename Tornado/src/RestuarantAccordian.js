import ItemsList from "./ItemsList";
import { useState } from "react";

const RestuarantAccordian = (props) => {
    const {title, itemCards } = props.data;
    const [open, setOpen] = useState(false);

    const handleClick = () =>{
        return open === false ? setOpen(true) : setOpen(false);
        
    }
    return (
        <div>
        
         <div className="w-6/12 shadow-xl my-4 mx-auto py-0.5 px-4 bg-gray-50 font-bold text-l " key={title} >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span >{title}{" "}({itemCards.length})</span>
            <span> ↓ </span>
            </div>
            <div className="m-4">
         {itemCards.map(item => open && <ItemsList key={item.card.info.id} data={item.card.info} />)}
         </div>
         </div>
         
         
         </div>
    )
}
       



export default RestuarantAccordian;
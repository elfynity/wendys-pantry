import Link from "next/link"
import Image from "next/image"

const Box = ({children, title, price=""}) => {

return(
  <>
  <div className="box">
    <h4>{title}</h4>
    {children}
    {price && <p className="headingP" >{price}</p>}
  </div>  
  </>
)
}


export const Order = () => {
return(
  <>
  <div id="orders">

    <Box title="1. Send Your Details">
      <ul>
        <li>Your name</li>
        <li>Your address</li>
      </ul>

    </Box>

    <Box title="2. Order Your Food">
      <ul>
        <li>Which days do you want delivery?</li>
        <li>What meals do you want?</li>
      </ul>
    </Box>

    <Box title="3. Confirm Order">
      <ul>
        <li>I will let you know the cost and send bank details</li>
        <li>Do the direct EFT</li>
      </ul>     
     
    </Box>

    </div>{/* orders */}
  </>
)
}

export const Timetable = () => {
return(
  <>

 
  <div id="days">
    <Box title="Monday" >
      <ul>
        <li>Chicken a la King</li>
        <li>Dessert of the day</li>
        <li>Smoothie </li>
      </ul>
    </Box>

    <Box title="Thursday">
      <ul>
        <li>Spaghetti Bolognaise</li>
        <li>Dessert of the day</li>
        <li>Smoothie </li>
      </ul>
    </Box>


  </div> 


    
  </>
)
}
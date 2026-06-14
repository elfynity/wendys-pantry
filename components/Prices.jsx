import { priceData } from "@/data/priceData"

export const Prices = () => {

return(
  <>
  <div className="tableRows">

  {priceData.map(item=> {
    return(
    <div key={item.title} className="tableRow">
      <span className="title">{item.title}</span>
      <span className="description">{item.description}</span>
      <span className="price">{item.price}</span>
    </div>
    )
  }
  )}

  </div>
  </>
)
}
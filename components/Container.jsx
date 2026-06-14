import { ReactNode } from "react"

export const Container = ({children, id="", bgColor="", pad="pad", wrap="wrapper", customClass=""}) => {
return (
<>
  <div 
    id={id}
    className={`${pad} ${bgColor} ${customClass}`}
  >
    <div className={wrap}>
      {children}
    </div>   
  </div>   
</>
)}
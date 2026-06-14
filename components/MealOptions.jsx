import Image from "next/image"
import { mealData } from "@/data/MealData"




export const MealOptions = () => {
return(
  <>

  <div className="meals">
    {mealData.map(meal=> {
      return(
        <div key={meal.title} className="meal"> 
          <Image
            className={meal.color}
            src={meal.icon}
            alt={meal.title}
            width={meal.width}
            height={meal.height}
            priority
            unoptimized
            sizes="100vw"
            style={{
              width:'auto', 
              height:'80px'
            }}
          />
          <h3>{meal.title}</h3>
          <p>{meal.description}</p>
        </div>
      )
    }
    )}

  </div>{/* meals */}

  </>
)

}



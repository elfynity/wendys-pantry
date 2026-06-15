import Image from "next/image";
import { Container } from "@/components/Container";
import { NoShow } from "@/components/NoShow";
import { MealOptions } from "@/components/MealOptions";
import { Timetable, Order } from "@/components/Boxes";
import { Prices } from "@/components/Prices";


export default function Home() {
  return (
   <>

  <NoShow>
    <h3>Home food deliveries in Westville, Durban. Order your meals online and have home cooked suppers delivered to your door.</h3>
  </NoShow>


   <Container wrap="textWrapper center">
    <h1>Freshly Prepared, Home-Cooked Meals Delivered to Your Door</h1>
    <p>Home cooked meals, cooked on the day, fresh from my kitchen to your door. Large portions made in a mom's kitchen with wholesome ingredients</p>
   </Container> 


    <Container id="how" customClass="tanBG">
      <h2>How it works</h2>
      <ol>
        <li>Place your order the day before, before 3pm. </li>
        <li>Pay and send pop to Wendy's <a href="https://wa.me/27767555354">whatsapp</a> or <a href="mailto:devgirl@disroot.org">email</a> or pay and clear. </li>
        <li>Use your full name as your reference.</li> 
      </ol>
    </Container>

    <Container id="meals">
      <h2>Our Meal Options</h2>
      <MealOptions />      
    </Container>

    <Container id="timetable" customClass="tanBG">

      <h2>Delivery Timetable for Fresh Meals</h2>

       <Prices />

      <ul>
        <li>Limited to Westville, subject to change</li>
        <li>Deliveries between 5.30pm to 7.30pm</li>
        <li>Any of the meals can also be ordered frozen on any day if in stock.</li>
        
      </ul>






    </Container>



    <Container id="terms" customClass="tanBG center">
      <h2>Terms & Disclaimer</h2>
      <p>Our kitchen handles all types of ingredients, so please take precaution if you hve allergies.</p>
    </Container>

    <Container id="order">
      <h2>Place your order</h2>

      <Order />

      <div className="break"></div>

    <div className="center">
      <a className="icons" href="https://wa.me/27767555354">
        <Image
          src="/icons/whatsapp-me.svg"
          alt="Whatsapp Wendy"
          width={555}
          height={130}
          priority
          unoptimized
          sizes="100vw"
          style={{
            width:'auto', 
            height:'60px'
          }}
        />
      </a>
    </div>

      
    </Container>




   </>
  );
}

import Image from "next/image"
import Link from "next/link"
import { Container } from "./Container"




const HeaderLink = ({icon, src}) => {
return(
  <>
     
    <a href={src}>

    <Image
      className="icons"
      src={icon}
      alt="Call me"
      width={50}
      height={50}
      unoptimized
      sizes="100vw"
      style={{
        width:'auto', 
        height:'25px'
      }}
    />

  </a>
    

  </>
)

}

export const Header = () => {
  return(
  <>

    <Container 
      customClass="tanBG"
      pad="smlPad"
    >
      <header>

        <div id="slogan">
          <p>Don't cook! <br />Supper is on it's way.</p>
        </div>
      
        <Link id="logo" href="/">
          <Image
            src="/wendys-pantry-logo.png"
            alt="Wendys Pantry Logo"
            width={688}
            height={391}
            priority
            unoptimized
            sizes="100vw"
            style={{
              width:'auto', 
              height:'150px'
            }}
          />
        </Link>

        <div id="links">

          <HeaderLink 
            icon="/icons/instagram.svg" 
            src="https://www.instagram.com/wendyspantryza/"
          />

          <HeaderLink 
            icon="/icons/whatsapp.svg" 
            src="https://wa.me/27767555354"
          />


        </div>

      </header>
    </Container> 

    <Container pad="smlPad">
      <div id="menu" className="buttonLink">
        <a href="#how">How it works &raquo; </a>
        <a href="#meals">Meals &raquo; </a>
        <a href="#timetable">Timetable &raquo; </a>
        <a href="#terms">Terms &raquo; </a>
        <a href="#order">Order Now &raquo; </a>
      </div>
    </Container>

  </>
    
  )
}




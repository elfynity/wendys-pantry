import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return(
    <>

    <Image
      className="decal"
      src="/70s-decal.svg"
      alt="70s decal"
      width={281}
      height={233}
      priority
      unoptimized
      sizes="100vw"
      style={{
        width:'auto', 
        height:'150px'
      }}
    />


    <Container customClass="footerContainer">
      <footer>
          <p>&copy; Copyright Wendys Kitchen {currentYear} | Attribution to Freepik & Clipart Library </p>
      </footer>
    </Container>

    </>
  )
}
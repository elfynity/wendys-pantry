import Image from "next/image"
import { ButtonLink } from "./ButtonLink"



export const Banner = ({src, width=1000, height=400, type="", heading, description, text, url="#"}
) => {
  return(
    <>


    {/* desktop banner */}
    <div 
      className={"bannerContainer contentPadding " + type}
      style={{ backgroundImage: `url(/${src})`}} >

   

      <div className="banner wrapper">

      
        <div className="textBox">
          <h2 className="pretendH1">{heading}</h2>
          <p>{description}</p>
          <br />
          
          {text && <ButtonLink text={text} url={url} />}

        </div>{/* textBox */}
       

        </div>{/* banner */}
      </div>{/* bannerContainer */}


       {/* mobile banner */}
       <div className="bannerMobile">

        <div className="contentPadding blueBg">
          <h2 className="pretendH1">{heading}</h2>
          <p>{description}</p>
          <br />
          
          {text && <ButtonLink text={text} url={url} />}

        </div>{/* textBox */}

        <Image
          src={"/" + src}
          alt={heading}
          width={width}
          height={height}
          style={{
            width:'100%', 
            height:'auto', 
            aspectRatio:width +  '/' + height
          }}
        />

       </div>{/* mobile banner */}




    
    </>
  )
}
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With a deep passion for both game development and 3D animation, I specialize in creating immersive, interactive experiences and stunning visual content. My expertise spans the following areas:</p>
                          
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Gameplay development" />
                                <h5>Gameplay Development</h5>
                                <p>Designing engaging mechanics, interactive experiences, and smooth player journeys across multiple platforms.</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Level Design" />
                                <h5>Level Design</h5>
                                <p>Crafting immersive worlds and carefully designed environments that enhance storytelling and gameplay flow.</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="3D Modeling" />
                                <h5>3D Modeling</h5>
                                <p>Creating realistic and stylized 3D models for characters, environments, and props that bring stories to life.</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Product Animation" />
                                <h5>Product Animation</h5>
                                <p>Bringing products to life through visually captivating animations that showcase their features and functionality.</p>
                            </div>
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

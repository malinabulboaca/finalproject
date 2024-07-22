import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

function CarouselImages() {
  return (
    <div className="slider-animated">
      <Carousel
        showArrows={true}
        showIndicators={true}
        showStatus={false}
        interval={2000}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img
            src="images/carusel/poza1.jpg"
            style={{ borderRadius: "1rem" }}
          />
        </div>
        <div>
          <img
            src="images/carusel/poza2.jpg"
            style={{ borderRadius: "1rem" }}
          />
        </div>
        <div>
          <img
            src="images/carusel/poza3.jpg"
            style={{ borderRadius: "1rem" }}
          />
        </div>
        <div>
          <img
            src="images/carusel/poza4.jpg"
            style={{ borderRadius: "1rem" }}
          />
        </div>
        <div>
          <img
            src="images/carusel/poza5.jpg"
            style={{ borderRadius: "1rem" }}
          />
        </div>
        <div>
          <img
            src="images/carusel/poza6.jpg"
            style={{ borderRadius: "1rem" }}
          />
        </div>
        <div>
          <img
            src="images/carusel/poza7.jpg"
            style={{ borderRadius: "1rem" }}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselImages;

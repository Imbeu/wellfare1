import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import classnames from "classnames";

// banner
import banner0 from "../../../src/image/banner/banner0.png";
import banner1 from "../../../src/image/banner/banner1.png";
import banner2 from "../../../src/image/banner/banner2.png";

function Home_banner() {
  const StyledSlider = styled(Slider)`
    .slick-slide > div {
      margin: 0 10px;
    }
    .slick-list {
      margin: 0 -10px;
    }

    .slick-dots {
      bottom: -35px;
    }
  `;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="homeBannerContainer">
      <div className="homeBannerBox">
        <StyledSlider {...settings}>
          <div className="homeBannerImageBox">
            <img className="homeBannerImage" src={banner0} alt="0번째 배너" />
          </div>
          <div className="homeBannerImageBox">
            <img className="homeBannerImage" src={banner1} alt="1번째 배너" />
          </div>
          <div className="homeBannerImageBox">
            <img className="homeBannerImage" src={banner2} alt="2번째 배너" />
          </div>
        </StyledSlider>
      </div>
    </div>
  );
}

export default Home_banner;

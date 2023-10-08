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
    .slick-dots {
      bottom: -45px;
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
        <div className="homeBannerShadowBox"></div>
        <div className="homeBannerTextContainer">
          <div className="homeBannerTextBox">
            <h1 className="homeBannerText">
              최고의 복지 <br /> Wellfare에서 <br /> 안성맞춤의 서비스를
              만나보세요.
            </h1>
          </div>
        </div>
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

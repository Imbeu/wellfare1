// banner
import banner from "../../../src/image/banner/banner.png";

function Home_banner() {
  return (
    <div className="homeBannerContainer">
      <div className="homeBannerBox">
        <div className="homeBannerTextContainer">
          <div className="homeBannerTextBox">
            <h1 className="homeBannerText">
              최고의 복지 <br /> Wellfare에서 <br /> 안성맞춤의 서비스를
              만나보세요.
            </h1>
          </div>
        </div>
        <div className="homeBannerImageBox">
          <img className="homeBannerImage" src={banner} alt="2번째 배너" />
        </div>
      </div>
    </div>
  );
}

export default Home_banner;

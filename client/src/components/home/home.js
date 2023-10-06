import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import classnames from "classnames";

// image

// store

// splited page
import Home_banner from "./home_banner";
import Service from "../service/service";

function Home() {
  return (
    <>
      <Helmet>
        <title>Wellfare :: 최고의 복지</title>
      </Helmet>
      <Home_banner />
      {/* <div className="homeMainContainer">
        <div className="homeMainBox">
          <div className="homeMainTitle">서비스 목록</div>
          <Service />
        </div>
      </div> */}
    </>
  );
}

export default Home;

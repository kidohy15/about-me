import React, { useEffect, useRef } from "react";
import {
  MainViewInner,
  MainViewWrapper,
  TextContainer,
} from "./MainPage.styles";
import gsap from "gsap";

const MainPage = () => {
  // const fadeRef = useRef();

  useEffect(() => {
    gsap.to(".fadeIn1", {
      delay: 1.1,
      opacity: 0,
    });
    gsap.to(".fadeIn2", {
      delay: 1.9,
      opacity: 0,
    });
    gsap.to(".fadeIn3", {
      delay: 4,
      opacity: 0,
    });
  });

  return (
    <MainViewWrapper>
      <MainViewInner>
        <TextContainer>
          <p>
            <span className="text1">안녕하세요</span>
            <br />
            <span className="text2">개발자</span>
            <br />
            <span className="text3">김동현 입니다.</span>
          </p>
          <div className="box">

          <div className=" box1 fadeIn1"></div>
          <div className=" box2 fadeIn2"></div>
          <div className=" box3 fadeIn3"></div>
          </div>
          {/* <div className="box box1"></div>
          <div className="box box2"></div>
          <div className="box box3"></div> */}
          <div>
            <img src="" alt="my_pictur" />
          </div>
        </TextContainer>
      </MainViewInner>
    </MainViewWrapper>
  );
};

export default MainPage;

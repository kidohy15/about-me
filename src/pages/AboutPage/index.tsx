import React, { useState } from "react";
import {
  AboutWrapper,
  DevContainer,
  InfoContainer,
  JapanContainer,
  MedicineContainer,
  PerfumeContainer,
} from "./AboutPage.styles";
import { Link } from "react-scroll";

interface AboutProps {
  aboutBtn: BtnType;
}

type BtnType = "info" | "perfume" | "medicine" | "japan" | "dev";

const AboutPage = ({ aboutBtn = "info" }: AboutProps) => {
  const [activeBtn, setActiveBtn] = useState(aboutBtn);

  // const onClickBtn = () => {

  // }

  // if (activeBtn === 'perfume') {
  //   const offset = $(".perfume").offset();
  //   $('html, body').animate({scrollTop : offset.top}, 400);
  // } else if (activeBtn === 'perfume') {

  // } else if (activeBtn === 'perfume') {

  // }

  return (
    <>
      <AboutWrapper>
        <div className="about__menu">
          <Link to="info" spy={true} smooth={true}>
            <button
              onClick={() => setActiveBtn("info")}
              className={activeBtn === "info" ? "about__menu--active info" : "info"}
            >
              인적사항
            </button>
          </Link>
          <Link to="perfume" spy={true} smooth={true}>
            <button
              onClick={() => setActiveBtn("perfume")}
              className={activeBtn === "perfume" ? "about__menu--active" : ""}
            >
              2009
            </button>
          </Link>
          <Link to="medicine" spy={true} smooth={true}>
            <button
              onClick={() => setActiveBtn("medicine")}
              className={activeBtn === "medicine" ? "about__menu--active" : ""}
            >
              2014
            </button>
          </Link>
          <Link to="japan" spy={true} smooth={true}>
            <button
              onClick={() => setActiveBtn("japan")}
              className={activeBtn === "japan" ? "about__menu--active" : ""}
            >
              2019
            </button>
          </Link>
          <Link to="dev" spy={true} smooth={true}>
            <button
              onClick={() => setActiveBtn("dev")}
              className={activeBtn === "dev" ? "about__menu--active" : ""}
            >
              2021
            </button>
          </Link>
        </div>

        <InfoContainer id="info">
          <div className="inner">내 이력 사항 이동</div>
        </InfoContainer>

        <PerfumeContainer id="perfume">
          <div className="inner">
            <div className="contents">
              <h3>향수</h3>
              <p>향수 설명 관련 프로젝트 이동</p>
            </div>
          </div>
        </PerfumeContainer>

        <MedicineContainer id="medicine">
          <div className="inner">제약 향수 설명 관련 프로젝트 이동</div>
        </MedicineContainer>

        <JapanContainer id="japan">
          <div className="inner">일본 향수 설명 관련 프로젝트 이동</div>
        </JapanContainer>

        <DevContainer id="dev">
          <div className="inner">개발 향수 설명 관련 프로젝트 이동</div>
        </DevContainer>

        <section className="interest">
          <div className="inner">관심사 향수 설명 관련 프로젝트 이동</div>
        </section>
      </AboutWrapper>
    </>
  );
};

export default AboutPage;

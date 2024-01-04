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
        <InfoContainer id="info">
          <div className="inner">
            <div className="infoContents">
              <div className="infoContents--item">이름</div>
              <div className="infoContents--item">학교</div>
              <div className="infoContents--item">경력</div>
              <div className="infoContents--item">교육</div>
            </div>
          </div>
        </InfoContainer>


      </AboutWrapper>
    </>
  );
};

export default AboutPage;

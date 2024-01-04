import styled from "styled-components";

export const AboutWrapper = styled.div`
  flex-direction: column;
  position: relative;
  /* margin-top: 120px; */
  justify-content: center;

  & > .about__menu {
    z-index: 99;
    position: fixed;
    left: 0;
    width: 12%;
    height: 80vh;
    padding-top: 120px;
    margin: auto 0;
    top: 0;
    bottom: 0;
    /* display: flex; */
    /* margin: 50px; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > a {
      /* width: 100% */
      width: 100%;
      height: 25%;
      border: 1px solid #c8c8c8;
      /* padding: 50px 100px; */

      button {
        width: 100%;
        height: 100%;
        font-size: 150%;
        background-color: rgba(109, 109, 110, 0.7);
        color: #fff;
        cursor: pointer;
      }
      button.info {
        width: 100%;
        height: 100%;
        font-size: 150%;
        background-color: rgba(0, 0, 0, 0.85);
        color: #fff;
        cursor: pointer;
      }

      button.about__menu--active {
        width: 100%;
        height: 100%;
        font-size: 150%;
        background-color: red;
        opacity: 0.63;
        color: #fff;
      }
      button.about__menu--active.info {
        width: 100%;
        height: 100%;
        font-size: 150%;
        background-color: black;
        opacity: 0.63;
        color: #fff;
      }
    }
  }

  & > section {
    width: 100vw;
    height: 100vh;
    /* margin: 20px 0; */
    /* display: flex; */
    border-bottom: 1px solid #c8c8c8;
    display: flex;
    justify-content: center;

    & > .inner {
      padding: 120px 7% 120px;
      width: 90vw;
      height: 100vh;
      position: absolute;
      margin: 0 auto;
      left: 11%;

      & > .contents {
        margin: 40px 40px 10px 40px;
        height: 90%;
        /* margin-top: 20px; */
        padding: 20px 20px 0px 20px;
        background-color: #fff;
        opacity: 0.95;
      }
    }
  }

  /* & > section.perfume {
    background: url(../../../public/assets/bg_pf.jpg) no-repeat center/cover;
  } */
  /* & > section.medicine {
    background: url(../../../public/assets/bg_mdc.jpg) no-repeat center/cover;
  } */
  & > section.japan {
    background: url(../../../public/assets/bg_jp.jpg) no-repeat center/cover;
  }
  & > section.dev {
    background: url(../../../public/assets/bg_dev.jpg) no-repeat center/cover;
  }
  & > section.interest {
    background: url(../../../public/assets/bg_itr.jpg) no-repeat center/cover;
  }
`;

export const InfoContainer = styled.section`
  background: black;
  height: 100%;

  & .inner {
    height: 100%;
    position: relative;
    padding-left: 150px;
    padding-bottom: 120px;
  }
  
  & .inner .infoContents {
    /* padding-top: 120px; */
    height: 70%;
    width: 80%;
    margin: auto auto;
    position: absolute;
    top: 100px;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & .infoContents--item {
      align-items: center;
      height: 20%;
      background: #fff;
      margin: 10px 10px 10px;
      border-bottom: 1px solid black;

    }
  }
`;
export const PerfumeContainer = styled.section`
  background: url(../../../public/assets/bg_pf.jpg) no-repeat center/cover;
`;
export const MedicineContainer = styled.section`
  background: url(../../../public/assets/bg_mdc.jpg) no-repeat center/cover;
`;
export const JapanContainer = styled.section`
  background: url(../../../public/assets/bg_jp.jpg) no-repeat center/cover;
`;
export const DevContainer = styled.section`
  background: url(../../../public/assets/bg_dev.jpg) no-repeat center/cover;
`;

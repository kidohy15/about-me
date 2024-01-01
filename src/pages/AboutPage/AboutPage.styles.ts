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
    width: 10%;
    margin-top: 120px;
    /* display: flex; */
    /* margin: 50px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;

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

    & > .inner {
      padding: 90px 10% 0;
      height: 90%;

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

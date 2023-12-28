import styled from "styled-components";

export const AboutWrapper = styled.div`
  flex-direction: column;
  position: relative;
  margin-top: 120px;
  justify-content: center;


  & > .about-menu {
    z-index: 99;
    position: fixed;
    left: 0;
    /* display: flex; */
    /* margin: 50px; */

    & > ul {
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;

      & > li {
        height: 25%;
        border: 1px solid #c8c8c8;
        padding: 50px 100px;
      }
    }
  }

  & > section {
    width: 100vw;
    height: 100vh;
    margin: 20px 0;
    /* display: flex; */
    border-bottom: 1px solid #c8c8c8;
    
    & > .inner {
      padding: 0 20rem;

    }
  }
`
import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  width: 100vw;
  height: 100%;
  background: url(../../../public/assets/bg_deer.jpg) no-repeat center/cover;
  /* flex-direction: column; */
  /* position: fixed; */
  /* margin-top: 120px; */
  /* justify-content: center; */
  min-width: 500px;
  
  .portfolio-contents{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: flex-start; */
    justify-content: center;
    /* margin: 10px 10px; */
    padding: 120px 10px 100px;
    
    .portfolio-item {
      width: 43%;
      display: flex;
      border: 1px solid black;
      margin: 10px 10px;
      background-color: #fff;
      justify-content: space-between;
      
      & .portfolio-image {
        border: 1px solid red;
        width: 30%;
        position: relative;
        left: 0;
        margin: 10px;
        background-color: aliceblue;
      }
      
      & .portfolio-description {
        margin: 10px;
        padding: 10px;
        background-color: bisque;
        border: 1px solid red;
        width: 50%;

        
      }
      
    }
  }
`
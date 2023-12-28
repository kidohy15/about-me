import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 120px;
  justify-content: center;

  & > section {
    width: 1100px;
    height: 300px;
    margin: 20px 10px;
    /* display: flex; */
    border-bottom: 1px solid #c8c8c8;
  }

  .portfolio-contents{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 10px 10px;
    padding: 10px 10px;
    
    .portfolio-item {
      width: 50%;
      display: flex;
      border: 1px solid black;
      
    }
  }
`
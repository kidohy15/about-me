import styled from "styled-components";

export const CareerWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: relative;
  /* margin-top: 120px; */
  justify-content: center;
  background-color: gray;

  & .cs-category-group {
    /* position: relative; */
    /* top: 100px; */
    margin-top: 120px;
    justify-content: center;
    display: flex;
    
    .cs-category {
      margin-top: 20px;
      text-align: center;
      background-color: #d2e3fc;
      background-color: rgba(110, 100, 99, 0.7);
      border: 1px solid black;
      width: 500px;
      height: 50px;
      cursor: pointer;
      text-align: center;
      font-size: 32px;
      color: #fff;
    }
    .cs-category:hover,
    .cs-category:focus {
      background-color: aquamarine;
      background-color: rgba(110, 100, 99, 1);
    }
  }
  
  & > section {
    margin: 20px 10px;
    height: 100%;
    display: none;
    justify-content: center;
    border: 1px solid #c8c8c8;
    background-color: #fff;
    opacity: .9;

    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 20px;
      padding: 20px;
      background-color: oldlace;
      gap: 10px;
      justify-content: center;
      li {
        background-color: #fff;
        padding: 20px;
        width: 40%;
        border: 1px solid black;
      }
    }
    
    .career {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 20px;
      padding: 20px;
      background-color: oldlace;
      gap: 10px;
      justify-content: center;
      li {
        background-color: #fff;
        padding: 20px;
        width: 80%;
        border: 1px solid black;
      }
    }

  }

`
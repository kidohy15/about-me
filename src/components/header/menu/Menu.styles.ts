import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 150px;
  height: auto;
  position: absolute; /*뷰포트 기준*/ 
  top: 102px;
  /* bottom: 0; */
  /* margin: auto 0; */
  /* left: 0px; */
  /* background: #272626; */
  border-radius: 1px;
  padding: 10px 0;
  
  `
export const MenuContents = styled.div`
  /* margin: 0 auto; */
  /* left: 50%; */
  `    
export const MenuItems = styled.ul`
  /* justify-content: center; */
  /* height: 100%; */
  /* padding: 20px 0; */
  /* display: flex; */
  & > li {
    /* width: 22px; */
    h3 {
      /* padding: 3px 0 12px 0; */
    }
    
  }
  `
export const MenuItem = styled.ul`
  /* flex-direction: column; */
  /* display: flex; */
  /* flex-direction: column; */
  position: absolute;
  top: 0;
  right: 50%;
  margin-right: -75px;
  background-color: bisque;
  border-bottom: 1px solid #c8c8c8;
  align-items: center;
  
  li {
    font-size: 18px;
    height: 30px;
    /* background-color: #fff; */
    color: #fff;
    /* border: 2px solid #fff; */
    /* border-radius: 30%; */
    margin: 10px;
    padding: 2px 10px;
  }
`
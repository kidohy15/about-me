import React from 'react'
import { MainViewInner, MainViewWrapper } from './MainPage.styles'

const MainPage = () => {
  return (
    <MainViewWrapper>
      <MainViewInner>
        <p>
          안녕하세요<br/>
          개발자<br/>
          <span>김동현</span>입니다.
        </p>
        <div>
          <img src="" alt="my_pictur" />
        </div>
      </MainViewInner>
    </MainViewWrapper>
  )
}

export default MainPage
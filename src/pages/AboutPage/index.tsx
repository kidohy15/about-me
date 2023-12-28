import React from 'react'
import { AboutWrapper } from './AboutPage.styles'

const AboutPage = () => {
  return (
    <>
      <AboutWrapper>
        <div className='about-menu'>
          <ul>
            <li>2009</li>
            <li>2014</li>
            <li>2019</li>
            <li>2021</li>
          </ul>
        </div>
        <section>
          <div className='inner'>
            향수
            향수 설명
            관련 프로젝트 이동
          </div>
        </section>

        <section>
          <div className='inner'>
            제약
            향수 설명
            관련 프로젝트 이동
          </div>
        </section>

        <section>
          <div className='inner'>
            일본
            향수 설명
            관련 프로젝트 이동
          </div>
        </section>

        <section>
          <div className='inner'>
            개발
            향수 설명
            관련 프로젝트 이동
          </div>
        </section>

        <section>
         <div className='inner'>
            관심사
            향수 설명
            관련 프로젝트 이동
          </div>
        </section>
      </AboutWrapper>

    </>
  )
}

export default AboutPage
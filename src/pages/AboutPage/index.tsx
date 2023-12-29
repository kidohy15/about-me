import React from 'react'
import { AboutWrapper } from './AboutPage.styles'

const AboutPage = () => {
  return (
    <>
      <AboutWrapper>
        <div className='about-menu'>
          <ul>
            <li>
              <button>
                2009
              </button>
            </li>
            <li>
              <button>
                2014
              </button>
            </li>
            <li>
              <button>
                2019
              </button>
            </li>
            <li>
              <button className='btn--red'>
                2021
              </button>
            </li>
          </ul>
        </div>
        <section className='perfume'>
          <div className='inner'>
            <div className='contents'>
              <h3>
                향수
              </h3>
              <p>
                향수 설명
                관련 프로젝트 이동
              </p>
            </div>
          </div>
        </section>

        <section className='medicine'>
          <div className='inner'>
            제약
            향수 설명
            관련 프로젝트 이동
          </div>
        </section>

        <section className='japan'>
          <div className='inner'>
            일본
            향수 설명
            관련 프로젝트 이동
          </div>
        </section>

        <section className='dev'>
          <div className='inner'>
            개발
            향수 설명
            관련 프로젝트 이동
          </div>
        </section>

        <section className='interest'>
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
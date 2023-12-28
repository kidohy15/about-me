import React from 'react'
import { AboutWrapper } from './CareerPage.styles'

const CareerPage = () => {
  return (
    <>
      <AboutWrapper>
        <div className='cs-category-group'>
          <div className='cs-category cs-category-career'>
            경력
          </div>
          <div className='cs-category cs-category-skill'>
            스킬
          </div>
        </div>
        <section>경력</section>
        <section>스킬</section>
      </AboutWrapper>

    </>
  )
}

export default CareerPage
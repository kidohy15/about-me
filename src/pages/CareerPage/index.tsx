import React, { useState } from "react";
import { CareerWrapper } from "./CareerPage.styles";

const CareerPage = () => {

  // const [isContentView, setIsContentView] = useState(false)
  const careerView = () => {
    // setIsContentView(!isContentView)
  }
  return (
    <>
      <CareerWrapper>
        <div className="cs-category-group">
          <div className="cs-category cs-category-career" onClick={() => careerView()}>개발 경력</div>
          <div className="cs-category cs-category-skill">보유 스킬</div>
        </div>
        <section className="careerContainer">
          <ul className="career">
            <li>
              <h3>프로젝트명: 한미 jvm 프로젝트</h3>
              <p>
                근무지 : 한미 헬스케어 <br />
                기간 : 2021.05~2021.11 <br />
                작업 인원 : 5 (PM, 본인 포함 개발자4) <br />
                포지션 : 개발 <br />
                개발 환경 : spring, jsp, jquery, oracle, svn, 그룹웨어 <br />
                <br />
                작업 내용 : 팀별 게시판, 식수, 포틀릿, 자원관리, <br />
              </p>
            </li>
            <li>
              <h3>프로젝트명: kt 프로젝트</h3>
              <p>
                근무지 : kt 분당 <br />
                기간 : 2021.11~2021.7 <br />
                작업 인원 : 5 (PM, 운영 담당, back 개발자, 모바일 개발자, 본인 ) <br />
                포지션 : 운영/개발 <br />
                개발 환경 : spring boot, redis, jboss, nginx, docker, gitlab, bitbucket, postgesql, vuejs, git <br />
                <br />
                작업 내용 : 관제 api 스크립트 개발, 테스팅, 모니터링, UI 수정, redis 부하 테스트, 모바일 apk 테스트, 로그인 화면 개발 <br />
              </p>
            </li>
            <li>
              <h3>프로젝트명: sk 복지몰 바로가게</h3>
              <p>
                근무지 : sk <br />
                기간 : 2022.07~2022.10 <br />
                작업 인원 : 5 (대규모 사무실에서 소속팀 부서는 5명, 본인이 각 파트를 담당하여 현업 개발자과 짝으로 작업) <br />
                포지션 : 개발 <br />
                개발 환경 : spring, ,spring boot, jsp, oracle, git, github, jenkins, jira, nox player <br />
                <br />
                작업 내용 : 구글 플레이 플랫폼 연동, 갤럭시아 백화점 플랫폼 연동, 네이버 페이 포인트 수정 작업 <br />
              </p>
            </li>
            <li>
              <h3>프로젝트명: 현대카드 H-Coin</h3>
              <p>
                근무지 : 현대카드 <br />
                기간 : 2022.11~2023.06 <br />
                작인 인원 : 2 (대규모 사무실에서 현업이 작업 요청을 하면 작업 담당 매니저와 본인이 sr 을 진행, 건당 담당자가 바뀜)<br />
                포지션 : 개발<br />
                개발 환경 : java 기반 자체 솔루션(eclipse 를 통해 제공), orangeDB, CTO 배치 , UX studio, 단말 솔루션 시스템, SR ssystem, 스위치라 불리는 kvm 가상 환경 <br />
                <br />
                작업 내용 : H-coin, 고객 서비스, 상품 서비스, 프로모션 LMS 관리 <br />
              </p>
            </li>
          </ul>
        </section>
        <section className="skillsContainer">
          <ul className="skills">
            <li>
              <h3>Back-End</h3>
              <p>java, Spring, Spring Boot, Nodejs</p>
            </li>
            <li>
              <h3>Front-End</h3>
              <p>
                HTML5, CSS, JS, Jquery, JSP, Reactjs, Typescript, Vuejs, Next
              </p>
            </li>
            <li>
              <h3>Server</h3>
              <p>Apache, Apach tomcat, redis, docker, jboss, nginx</p>
            </li>
            <li>
              <h3>DB</h3>
              <p>oracle, mysql, postgresql, firebase</p>
            </li>
            <li>
              <h3>기타 개발 tools</h3>
              <p>
                jenkins, UX studio, orangeDB, MariaDB, vscode, intellij, aws
                EC2, netlify, eclipse, wildfly, DBeaver, postman
              </p>
            </li>
            <li>
              <h3>협업 tools</h3>
              <p>git, github, gitlab, jira, bitbucket, slack, svn </p>
            </li>
          </ul>
        </section>
      </CareerWrapper>
    </>
  );
};

export default CareerPage;

import 'swiper/css';
import 'swiper/css/navigation';

import { useRef } from 'react';
import { Navigation, Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './customSwiper.module.scss';

const CustomSwiper = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <Swiper
      className={styles.swiper}
      navigation={true}
      modules={[Navigation]}
      autoHeight={true}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      <SwiperSlide>
        <div className={styles.textContainer}>
          <div className={styles.title}>🕰2015</div>
          <ul className={styles.text}>
            <li>
              - 제5회 e-ICON(e-learning International Contest of Outstanding New ages)세계대회 1위(교육부 장관상)
              <br />: 과학 교육을 위한 WebApp 제작
            </li>
          </ul>
          <div className={styles.title}>🕰2017</div>
          <ul className={styles.text}>
            <li>- 건국대학교 산업공학과 1학년 과대표</li>
          </ul>
          <div className={styles.title}>🕰2018</div>
          <ul className={styles.text}>
            <li>- 2018 IoT 스마트 메이커스 프로그램 수료 (Unity Korea Certification 취득)</li>
          </ul>
          <div className={styles.title}>🕰2019</div>
          <ul className={styles.text}>
            <li>- 건국대학교 학생복지위원회 '더블유' (대외협력국 국원)</li>
            <br />
            <li>- 삼성 갤럭시 스토어 아이디어 공모전 - Project. "star" (기획안 작성)</li>
            <br />
            <li>- Start-up 팀 "482" 공동대표 (기획 및 PM)</li>
            <br />
            <li>
              - 2019 건국대학교 아이디어 경진대회 - 본선진출
              <br />: (위치기반 퀴즈 어플리케이션) PM 및 기획 발표 (1.TALL 프로젝트)
            </li>
          </ul>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.textContainer}>
          <div className={styles.title}>🕰2020</div>
          <ul className={styles.text}>
            <li>- 화장품 성분 인식 어플리케이션 "코스밍" 제작 (PM 및 인프라 개발)</li>
            <br />
            <li>
              - 가게 대기열 프로젝트 "Hate-Wait" 구축 (Front-end, 영상 제작)
              <br />: 건국대학교 2020 SW경진대회 장려상, KU LINK+ 우수 캡스톤 디자인 경진대회 우수상
            </li>
            <br />
            <li>
              - 네이버 대표카페 "코뮤니티" - '수달 조교' 활동 (Front-End)
              <br />: C언어 질문 답변, 챗봇 만들기 (Javascript), 공룡 게임 만들기 (C), MBTI 모바일 앱 만들기 (Kotlin)
            </li>
            <br />
            <li>
              - 코딩 mbti "코시전" 기획 및 개발 참여 (Front-End)
              <br />: 휴몬랩 개발팀
            </li>
            <br />
            <li>
              - 프로젝트 플로우 코딩 (코드메이트) (Front-End)
              <br />: 휴몬랩 개발팀 (로그인, 회원가입, 커리큘럼 컴포넌트 제작)
            </li>
          </ul>
          <div className={styles.title}>🕰2021</div>
          <ul className={styles.text}>
            <li>- 대한민국 육군 장교 임관</li>
          </ul>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.textContainer}>
          <div className={styles.title}>🕰2022</div>
          <ul className={styles.text}>
            <li>- 팀 '한비' 공동 설립 (개발팀장)</li>
            <br />
            <li>
              - 음악인 협업 플랫폼 Palette 테스트 페이지 제작
              <br />: (Notion 페이지) 디자인, 개발
            </li>
          </ul>
          <div className={styles.title}>🕰2023</div>
          <ul className={styles.text}>
            <li>- 개발 동아리 'Flight' 참여 (Front-end, Infra)</li>
            <br />
            <li>- 온라인 포트폴리오 제작 프로젝트 QRU 개발 (Front-end)</li>
            <br />
            <li>- 코딩 교육을 위한 플랫폼 Copool 개발 참여 (QA & ISSUE TRACKING)</li>
          </ul>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomSwiper;

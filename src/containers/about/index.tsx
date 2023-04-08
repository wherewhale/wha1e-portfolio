import Image from 'next/image';
import React from 'react';
import codemateIcon from 'src/assets/images/about/codemate.png';
import hatewaitIcon from 'src/assets/images/about/hatewait.png';
import nextIcon from 'src/assets/images/about/nextIcon.svg';
import notionIcon from 'src/assets/images/about/notion.svg';
import paletteIcon from 'src/assets/images/about/palette.png';
import qruIcon from 'src/assets/images/about/qru.png';
import reactIcon from 'src/assets/images/about/react.svg';
import slackIcon from 'src/assets/images/about/slack.svg';

import SkeletonDialog from '@/components/dialogs/skeleton';
import SkillDialog from '@/components/dialogs/skill';

import styles from './about.module.scss';
import CustomSwiper from './customSwiper';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.title}>Skills</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SkillDialog
            title="Front-end"
            srcs={[reactIcon, nextIcon]}
            alts={['react', 'next']}
            skills={['React', 'Recoil', 'Nextjs', 'SCSS', 'styled-component']}
          />
          <SkillDialog title="Tools" srcs={[slackIcon, notionIcon]} alts={['slack', 'notion']} skills={['Slack', 'Miri-Canvas', 'Notion', 'Tally']} />
        </div>
      </div>
      <hr />
      <div className={styles.block}>
        <div className={styles.title}>Projects</div>
        <div className={styles.dialogContainer}>
          <SkeletonDialog
            href="https://qru-landing.vercel.app/"
            header="QRU"
            body={<Image src={qruIcon} alt="qru" width={200} height={200} />}
            footer={
              <p>
                온라인 포트폴리오 랜딩페이지입니다.
                <br />
                <br />
                Skeleton 프로젝트를 만들기 이전 테스트 페이지로 제작하였습니다. <b className={styles.emphasis}>Nextjs와 Vercel, SCSS</b>를 이용하여 인터렉션
                웹앱을 만들기 위해 노력하였습니다.
              </p>
            }
          />
          <SkeletonDialog
            href="https://1bee-palette.notion.site/4624ae187485435a9bddebfa68af9dd9"
            header="팔레트"
            body={<Image src={paletteIcon} alt="palette" width={300} height={165} />}
            footer={
              <p>
                음악인 협업 플랫폼입니다.
                <br />
                <br />
                지금까지 진행한 프로젝트 단위 중 가장 큰 프로젝트입니다. 구성해야 하는 페이지와 기능이 다양하며, 크기가 큰 파일을 관리해야함과 동시에 많은
                클라이언트의 요청을 안전하게 처리하기 위해 풀스택으로 구축 중에 있습니다.
                <br />
                프로젝트 진행 난이도가 높아 사업성 테스트를 위해 만든 <b className={styles.emphasis}>노션 페이지</b>이며, 자체적인 페이지 제작을 진행 중에
                있습니다.
              </p>
            }
          />
          <SkeletonDialog
            href="https://youtu.be/9xLLJXl1U_U"
            header="Hate-Wait"
            body={<Image src={hatewaitIcon} alt="hatewait" width={300} height={165} />}
            footer={
              <p>
                식당 원격 대기열 프로젝트입니다.
                <br />
                <br />
                4학년 2학기 졸업 프로젝트로 진행한 프로젝트였으며, Android, Web, Server의 역할로 나누어 진행하였습니다. 저는 Web구성 역할을 진행했으며,
                <b className={styles.emphasis}>React와 styled-components, Redux, Axios</b>를 사용하여 프로젝트를 진행하였습니다.
                <br />
                가게 사용자의 매출 관리를 위하여 그래프 컴포넌트를 자체적으로 제작하여 구성하였으며, 2020년도 코로나로 인해 영상과 프레젠테이션을 이용하여
                발표를 진행하였습니다. 해당 프로젝트로 건국대학교 SW경진대회와 캡스톤 디자인 경진대회에서 각각 장려상과 우수상을 받게되었습니다.
              </p>
            }
          />
          <SkeletonDialog
            href="https://codemate.kr/"
            header="코드메이트"
            body={<Image src={codemateIcon} alt="codemate" width={300} height={165} />}
            footer={
              <p>
                코딩교육을 위한 사이트입니다.
                <br />
                <br />
                인턴 생활을 하며 만든 마지막 프로젝트로, <b className={styles.emphasis}>React와 styled-components, GraphQL</b>을 이용하여 프로젝트를
                진행하였습니다.
                <br />
                해당 사이트에서, 초기 로그인, 회원가입 기능을 통해 소셜 로그인, 이메일 인증 프로세스를 구현하였으며, 탐색 페이지의 커리큘럼 컴포넌트에서
                구성하였습니다. 현재는 업데이트되어, 모습이 많이 변화되었습니다.
              </p>
            }
          />
        </div>
        <hr />
        <div className={styles.block}>
          <div className={styles.title}>History</div>
          <CustomSwiper />
        </div>
      </div>
    </div>
  );
};

export default About;

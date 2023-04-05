import React from 'react';
import nextIcon from 'src/assets/images/about/next.svg';
import notionIcon from 'src/assets/images/about/notion.svg';
import reactIcon from 'src/assets/images/about/react.svg';
import slackIcon from 'src/assets/images/about/slack.svg';

import SkillDialog from '@/components/dialogs/skill';

import styles from './about.module.scss';

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
      <div className={styles.block}>
        <div className={styles.title}>Projects</div>
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
    </div>
  );
};

export default About;

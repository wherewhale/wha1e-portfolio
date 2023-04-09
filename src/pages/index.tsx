import Head from 'next/head';
import { useCallback, useEffect, useRef, useState } from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import About from '@/containers/about';
import Contact from '@/containers/contact';
import Intro from '@/containers/intro';

export default function Home() {
  // 현재 보고 있는 page를 알 수 있게 해주는 viewIndex
  const home = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);
  const [viewPage, setViewPage] = useState('HOME');

  useEffect(() => {
    const option = {
      rootMargin: '10px', // rootMargin을 '10px 10px 10px 10px'로 설정
      threshold: 0.2, // 타겟 엘리먼트가 교차영역에 진입했을 때, 교차영역에 타켓 엘리먼트의 50%가 있을 때, 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.
    };

    const observer = new IntersectionObserver(function useCallback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setViewPage(entry.target.id);
        }
      });
    }, option);

    observer.observe(home.current as Element);
    observer.observe(about.current as Element);
    observer.observe(contact.current as Element);
  }, []);

  const onScrollTo = useCallback((page: string) => {
    (document.getElementById(page) as HTMLDivElement).scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <Head>
        <title>Wha1e's Portfolio</title>
        <meta name="description" content="Wha1e's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header menuList={['HOME', 'ABOUT', 'CONTACT']} style={'third'} onClick={onScrollTo} onView={viewPage} />
        <div ref={home} id="HOME">
          <Intro title="#Front-end" subTitle="상상을 현실로 만드는 개발자 손영호입니다." name="손영호" />
        </div>
        <hr />
        <div ref={about} id="ABOUT">
          <About />
        </div>
        <hr />
        <div ref={contact} id="CONTACT">
          <Contact />
        </div>
        <Footer userName="Wha1e" userJob="Front-end" />
      </main>
    </>
  );
}

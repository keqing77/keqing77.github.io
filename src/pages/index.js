/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '前端知识',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: <>前端归纳总结,大厂面试真题,面经整理,助力成为offer收割机</>,
  },
  {
    title: '码农之道',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: <>还有很多梦还没做完呢，怎么有理由停下呢</>,
  },
  {
    title: '资源导航',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: <>编程资源？番剧推荐？工具推荐？开发技巧？游戏分享？</>,
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}> */}
      <header className={styles.heroBanner}>
        <div className={styles.container}>
          <a target="_self" href="/">
            <img
              src="img/avatar.jpg"
              alt="lavard"
              className="max-h-64 rounded-full"
            />
          </a>
          <h1 className={`hero__title ${styles.title}`}>{siteConfig.title}</h1>
          <p className={`hero__subtitle ${styles.tagline}`}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.btn,
              )}
              to={useBaseUrl('docs/intro')}>
              开启宝藏👉
            </Link>
          </div>
        </div>
        <section className="md:mt-30 mt-10 flex gap-6 flex-1 justify-center">
          <Link to="/blog">
            <div className={styles.contents}>
              <div className="scale relative flex h-full min-h-[260px] max-w-[500px] transform flex-col rounded-md bg-gradient-to-r from-purple-800 to-pink-700 p-6 text-2xl shadow transition duration-300 hover:-translate-y-2 hover:scale-105 hover:opacity-80 md:p-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="absolute top-0 left-0 h-full w-full fill-current opacity-30 dark:opacity-10"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32">
                  <path d="M4 24h10v2H4z" fill="currentColor"></path>
                  <path d="M4 18h10v2H4z" fill="currentColor"></path>
                  <path
                    d="M26 14H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zM6 6v6h20V6z"
                    fill="currentColor"></path>
                  <path
                    d="M26 28h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm-6-8v6h6v-6z"
                    fill="currentColor"></path>
                </svg>
                <p className="relative flex-1 text-gray-200">我的博客</p>
                <h2 className="mt-10 text-5xl font-semibold text-white">
                  Blog
                </h2>
              </div>
            </div>
          </Link>
          <Link to={useBaseUrl('/project')}>
            <div className={styles.contents}>
              <div className="relative flex h-full min-h-[260px] max-w-[500px] transform flex-col rounded-md bg-gradient-to-r from-yellow-500 to-amber-600 p-6 text-2xl shadow transition duration-300 hover:-translate-y-2 hover:scale-105 hover:opacity-80 md:p-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="absolute top-0 left-0 h-full w-full fill-current opacity-30 dark:opacity-10"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32">
                  <path
                    d="M31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9l7 7z"
                    fill="currentColor"></path>
                  <path
                    d="M1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23l-7-7z"
                    fill="currentColor"></path>
                  <path
                    d="M12.419 25.484L17.639 6l1.932.518L14.35 26z"
                    fill="currentColor"></path>
                </svg>
                <p className="relative flex-1 text-gray-200">项目展示</p>
                <h2 className="mt-10 text-5xl font-semibold text-white">
                  Project
                </h2>
              </div>
            </div>
          </Link>
          <Link to={useBaseUrl('/daily')}>
            <div className={styles.contents}>
              <div className="relative flex h-full min-h-[260px] max-w-[500px] transform flex-col rounded-md bg-gradient-to-r from-cyan-500 to-emerald-700 p-6 text-2xl shadow transition duration-300 hover:-translate-y-2 hover:scale-105 hover:opacity-80 md:p-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="absolute top-0 left-0 h-full w-full fill-current opacity-30 dark:opacity-10"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24">
                  <path
                    d="M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12M12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3z"
                    fill="currentColor"></path>
                </svg>
                <p className="relative flex-1 text-gray-200">我的生活日常</p>
                <h2 className="mt-10 text-5xl font-semibold text-white">
                  Daily
                </h2>
              </div>
            </div>
          </Link>
        </section>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

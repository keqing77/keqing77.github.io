import React from 'react';

function Footer(props) {
  return (
    <>
      <footer className="container m-auto mb-16 space-y-4 px-4 py-4 md:mb-auto md:py-12">
        <div className="contents">
          <span className="flex flex-col items-start text-xl font-bold sm:flex-row sm:space-x-6">
            <a
              href="https://miyauchi-storybook.web.app/"
              rel="noopener"
              target="_blank"
              className="flex space-x-2 py-1 underline md:p-0 md:no-underline md:hover:underline">
              <span className="align-middle">DESIGNED BY</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="h-7 w-7"
                width="0.81em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 319">
                <defs>
                  <path
                    d="M9.872 293.324L.012 30.574C-.315 21.895 6.338 14.54 15.005 14L238.494.032c8.822-.552 16.42 6.153 16.972 14.975c.02.332.031.665.031.998v286.314c0 8.839-7.165 16.004-16.004 16.004c-.24 0-.48-.005-.718-.016l-213.627-9.595c-8.32-.373-14.963-7.065-15.276-15.388z"
                    id="iconify-react-0"></path>
                </defs>
                <mask id="iconify-react-1" fill="#fff">
                  <use xlinkHref="#iconify-react-0"></use>
                </mask>
                <use fill="#FF4785" xlinkHref="#iconify-react-0"></use>
                <path
                  d="M188.665 39.127l1.527-36.716L220.884 0l1.322 37.863a2.387 2.387 0 0 1-3.864 1.96l-11.835-9.325l-14.013 10.63a2.387 2.387 0 0 1-3.829-2.001zm-39.251 80.853c0 6.227 41.942 3.243 47.572-1.131c0-42.402-22.752-64.684-64.415-64.684c-41.662 0-65.005 22.628-65.005 56.57c0 59.117 79.78 60.249 79.78 92.494c0 9.052-4.433 14.426-14.184 14.426c-12.705 0-17.729-6.49-17.138-28.552c0-4.786-48.458-6.278-49.936 0c-3.762 53.466 29.548 68.887 67.665 68.887c36.935 0 65.892-19.687 65.892-55.326c0-63.36-80.961-61.663-80.961-93.06c0-12.728 9.455-14.425 15.07-14.425c5.909 0 16.546 1.042 15.66 24.801z"
                  fill="#FFF"
                  mask="url(#iconify-react-1)"></path>
              </svg>
            </a>
            <span className="flex flex-row-reverse items-center space-x-2 self-end sm:flex-row sm:self-auto">
              <span className="ml-2 align-middle md:ml-0">BUILD BY</span>
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path fill="#FFF" d="M99 52h84v34H99z" />
                  <path
                    d="M23 163c-7.398 0-13.843-4.027-17.303-10A19.886 19.886 0 003 163c0 11.046 8.954 20 20 20h20v-20H23z"
                    fill="#3ECC5F"
                  />
                  <path
                    d="M112.98 57.376L183 53V43c0-11.046-8.954-20-20-20H73l-2.5-4.33c-1.112-1.925-3.889-1.925-5 0L63 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L53 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L43 23c-.022 0-.042.003-.065.003l-4.142-4.141c-1.57-1.571-4.252-.853-4.828 1.294l-1.369 5.104-5.192-1.392c-2.148-.575-4.111 1.389-3.535 3.536l1.39 5.193-5.102 1.367c-2.148.576-2.867 3.259-1.296 4.83l4.142 4.142c0 .021-.003.042-.003.064l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 53l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 63l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 73l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 83l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 93l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 103l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 113l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 123l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 133l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 143l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 153l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 163c0 11.046 8.954 20 20 20h120c11.046 0 20-8.954 20-20V83l-70.02-4.376A10.645 10.645 0 01103 68c0-5.621 4.37-10.273 9.98-10.624"
                    fill="#3ECC5F"
                  />
                  <path fill="#3ECC5F" d="M143 183h30v-40h-30z" />
                  <path
                    d="M193 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 00190.32 148a4.96 4.96 0 00-3.016 1.036 26.531 26.531 0 00-.335-.336 4.955 4.955 0 001.011-2.987 5 5 0 00-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 00-5-5 5 5 0 00-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 00-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 005-5 5 5 0 00-5-5"
                    fill="#44D860"
                  />
                  <path fill="#3ECC5F" d="M153 123h30v-20h-30z" />
                  <path
                    d="M193 115.5a2.5 2.5 0 100-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 00-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 00-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 00-4.8-.979A9.987 9.987 0 00183 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 004.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 00.963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032"
                    fill="#44D860"
                  />
                  <path
                    d="M63 55.5a2.5 2.5 0 01-2.5-2.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5a2.5 2.5 0 11-5 0c0-6.893 5.607-12.5 12.5-12.5S65.5 46.107 65.5 53a2.5 2.5 0 01-2.5 2.5"
                    fill="#000"
                  />
                  <path
                    d="M103 183h60c11.046 0 20-8.954 20-20V93h-60c-11.046 0-20 8.954-20 20v70z"
                    fill="#FFFF50"
                  />
                  <path
                    d="M168.02 124h-50.04a1 1 0 110-2h50.04a1 1 0 110 2m0 20h-50.04a1 1 0 110-2h50.04a1 1 0 110 2m0 20h-50.04a1 1 0 110-2h50.04a1 1 0 110 2m0-49.814h-50.04a1 1 0 110-2h50.04a1 1 0 110 2m0 19.814h-50.04a1 1 0 110-2h50.04a1 1 0 110 2m0 20h-50.04a1 1 0 110-2h50.04a1 1 0 110 2M183 61.611c-.012 0-.022-.006-.034-.005-3.09.105-4.552 3.196-5.842 5.923-1.346 2.85-2.387 4.703-4.093 4.647-1.889-.068-2.969-2.202-4.113-4.46-1.314-2.594-2.814-5.536-5.963-5.426-3.046.104-4.513 2.794-5.807 5.167-1.377 2.528-2.314 4.065-4.121 3.994-1.927-.07-2.951-1.805-4.136-3.813-1.321-2.236-2.848-4.75-5.936-4.664-2.994.103-4.465 2.385-5.763 4.4-1.373 2.13-2.335 3.428-4.165 3.351-1.973-.07-2.992-1.51-4.171-3.177-1.324-1.873-2.816-3.993-5.895-3.89-2.928.1-4.399 1.97-5.696 3.618-1.232 1.564-2.194 2.802-4.229 2.724a1 1 0 00-.072 2c3.017.101 4.545-1.8 5.872-3.487 1.177-1.496 2.193-2.787 4.193-2.855 1.926-.082 2.829 1.115 4.195 3.045 1.297 1.834 2.769 3.914 5.731 4.021 3.103.104 4.596-2.215 5.918-4.267 1.182-1.834 2.202-3.417 4.15-3.484 1.793-.067 2.769 1.35 4.145 3.681 1.297 2.197 2.766 4.686 5.787 4.796 3.125.108 4.634-2.62 5.949-5.035 1.139-2.088 2.214-4.06 4.119-4.126 1.793-.042 2.728 1.595 4.111 4.33 1.292 2.553 2.757 5.445 5.825 5.556l.169.003c3.064 0 4.518-3.075 5.805-5.794 1.139-2.41 2.217-4.68 4.067-4.773v-2z"
                    fill="#000"
                  />
                  <path fill="#3ECC5F" d="M83 183h40v-40H83z" />
                  <path
                    d="M143 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 00140.32 148a4.96 4.96 0 00-3.016 1.036 26.531 26.531 0 00-.335-.336 4.955 4.955 0 001.011-2.987 5 5 0 00-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 00-5-5 5 5 0 00-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 00-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 005-5 5 5 0 00-5-5"
                    fill="#44D860"
                  />
                  <path fill="#3ECC5F" d="M83 123h40v-20H83z" />
                  <path
                    d="M133 115.5a2.5 2.5 0 100-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 00-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 00-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 00-4.8-.979A9.987 9.987 0 00123 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 004.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 00.963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032"
                    fill="#44D860"
                  />
                  <path
                    d="M143 41.75c-.16 0-.33-.02-.49-.05a2.52 2.52 0 01-.47-.14c-.15-.06-.29-.14-.431-.23-.13-.09-.259-.2-.38-.31-.109-.12-.219-.24-.309-.38s-.17-.28-.231-.43a2.619 2.619 0 01-.189-.96c0-.16.02-.33.05-.49.03-.16.08-.31.139-.47.061-.15.141-.29.231-.43.09-.13.2-.26.309-.38.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.65-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.11.12.22.25.31.38.09.14.17.28.23.43.06.16.11.31.14.47.029.16.05.33.05.49 0 .66-.271 1.31-.73 1.77-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 01-.96.19m20-1.25c-.66 0-1.3-.27-1.771-.73a3.802 3.802 0 01-.309-.38c-.09-.14-.17-.28-.231-.43a2.619 2.619 0 01-.189-.96c0-.66.27-1.3.729-1.77.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.66-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.459.47.73 1.11.73 1.77 0 .16-.021.33-.05.49-.03.16-.08.32-.14.47-.07.15-.14.29-.23.43-.09.13-.2.26-.31.38-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 01-.96.19"
                    fill="#000"
                  />
                </g>
              </svg>
            </span>
            <span className="flex items-center space-x-2">
              <span className="py-1 align-middle md:p-0">DEPLOYS BY</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="h-7 w-7"
                width="0.73em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 351">
                <defs>
                  <filter
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                    filterUnits="objectBoundingBox"
                    id="iconify-react-2">
                    <feGaussianBlur
                      stdDeviation="17.5"
                      in="SourceAlpha"
                      result="shadowBlurInner1"></feGaussianBlur>
                    <feOffset
                      in="shadowBlurInner1"
                      result="shadowOffsetInner1"></feOffset>
                    <feComposite
                      in="shadowOffsetInner1"
                      in2="SourceAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                      result="shadowInnerInner1"></feComposite>
                    <feColorMatrix
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      in="shadowInnerInner1"></feColorMatrix>
                  </filter>
                  <filter
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                    filterUnits="objectBoundingBox"
                    id="iconify-react-3">
                    <feGaussianBlur
                      stdDeviation="3.5"
                      in="SourceAlpha"
                      result="shadowBlurInner1"></feGaussianBlur>
                    <feOffset
                      dx="1"
                      dy="-9"
                      in="shadowBlurInner1"
                      result="shadowOffsetInner1"></feOffset>
                    <feComposite
                      in="shadowOffsetInner1"
                      in2="SourceAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                      result="shadowInnerInner1"></feComposite>
                    <feColorMatrix
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                      in="shadowInnerInner1"></feColorMatrix>
                  </filter>
                  <path
                    d="M1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732z"
                    id="iconify-react-4"></path>
                  <path
                    d="M134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744l31.678 58.556z"
                    id="iconify-react-5"></path>
                </defs>
                <path
                  d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z"
                  fill="#FFC24A"></path>
                <use
                  fill="#FFA712"
                  fillRule="evenodd"
                  xlinkHref="#iconify-react-4"></use>
                <use
                  filter="url(#iconify-react-2)"
                  xlinkHref="#iconify-react-4"></use>
                <path
                  d="M135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z"
                  fill="#F4BD62"></path>
                <use
                  fill="#FFA50E"
                  fillRule="evenodd"
                  xlinkHref="#iconify-react-5"></use>
                <use
                  filter="url(#iconify-react-3)"
                  xlinkHref="#iconify-react-5"></use>
                <path
                  fill="#F6820C"
                  d="M0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"></path>
                <path
                  d="M139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                  fill="#FDE068"></path>
                <path
                  d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355z"
                  fill="#FCCA3F"></path>
                <path
                  d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752l-115.99 64.689z"
                  fill="#EEAB37"></path>
              </svg>
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <span className="flex flex-col items-center space-x-4 md:flex-row">
            <a
              aria-label="Home"
              className="space-x-4 whitespace-nowrap text-4xl"
              href="/">
              <svg
                className="text-accent h-10 w-9 fill-current align-middle"
                viewBox="0 0 300 300">
                <path d="M136 20v41a475 475 0 01-34 22v173l-15-10-15-11V106l-35 30 1-47z"></path>
                <g>
                  <path d="M244 76l20 13-1 83 1 38-31 22 1-39v-46l-20 27-19-52v136l-30 22V20l29 20 28 71z"></path>
                </g>
              </svg>
              <span className="text-accent undefined">lavard.cn</span>
            </a>
            <span className="border-accent flex flex-col space-y-1 p-4 text-center text-gray-500 md:border-l-2 md:text-left">
              <span>
                <span className="text-accent font-semibold">Made by</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="text-accent mx-2 h-6 w-6"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24">
                  <path
                    d="M12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3z"
                    fill="currentColor"></path>
                </svg>
                来自拉夫德鲁的码农
              </span>
              <span className="text-lg">
                Copyright © {new Date().getFullYear()} Lavard.
                <a href="https://beian.miit.gov.cn/">粤ICP备2021040275号</a>
              </span>
            </span>
          </span>
          <nav className="flex w-full flex-row justify-around gap-2 md:w-auto lg:flex-wrap lg:space-x-12">
            <ul className="space-y-4">
              <li>
                <a className="text-gray-500" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-500" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-gray-500" href="/">
                  Project
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500"
                  href="https://www.nowcoder.com/profile/104030622">
                  Nowcoder
                </a>
              </li>
            </ul>
            <ul className="space-y-4">
              <li>
                <a className="text-gray-500" href="/">
                  Social Media
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500"
                  href="https://juejin.cn/user/994371074524862">
                  Juejin
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500"
                  href="https://space.bilibili.com/40744412?spm_id_from=333.1007.0.0">
                  Bilbil
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500"
                  href="https://www.zhihu.com/people/lai-zi-la-fu-de-lu-de-ma-nong">
                  Zhihu
                </a>
              </li>
            </ul>
          </nav>
          <div className="contents">
            <div className="my-4 flex flex-nowrap items-center space-x-8 text-gray-500 md:space-x-4 lg:space-x-6">
              <span className="tooltip" data-tooltip="NPM">
                <a
                  href="https://www.npmjs.com/"
                  rel="noopener"
                  target="_blank"
                  aria-label="My npm packages"
                  className="hover:text-accent transition duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="h-8 w-8"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24">
                    <g fill="currentColor">
                      <path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></path>
                      <path d="M12 9h4v10h-4z"></path>
                    </g>
                  </svg>
                </a>
              </span>
              <span className="tooltip" data-tooltip="Twitter">
                <a
                  href="https://twitter.com/"
                  rel="noopener"
                  target="_blank"
                  aria-label="My twitter account"
                  className="hover:text-accent transition duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="h-8 w-8"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24">
                    <path
                      d="M22.991 3.95a1 1 0 0 0-1.51-.86a7.48 7.48 0 0 1-1.874.794a5.152 5.152 0 0 0-3.374-1.242a5.232 5.232 0 0 0-5.223 5.063a11.032 11.032 0 0 1-6.814-3.924a1.012 1.012 0 0 0-.857-.365a.999.999 0 0 0-.785.5a5.276 5.276 0 0 0-.242 4.769l-.002.001a1.041 1.041 0 0 0-.496.89a3.042 3.042 0 0 0 .027.439a5.185 5.185 0 0 0 1.568 3.312a.998.998 0 0 0-.066.77a5.204 5.204 0 0 0 2.362 2.922a7.465 7.465 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061a12.788 12.788 0 0 0 12.465-9.363a12.822 12.822 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202zm-3.306 3.212a.995.995 0 0 0-.234.702c.01.165.009.331.009.488a10.824 10.824 0 0 1-.454 3.08a10.685 10.685 0 0 1-10.546 7.93a10.938 10.938 0 0 1-2.55-.301a9.48 9.48 0 0 0 2.942-1.564a1 1 0 0 0-.602-1.786a3.208 3.208 0 0 1-2.214-.935q.224-.042.445-.105a1 1 0 0 0-.08-1.943a3.198 3.198 0 0 1-2.25-1.726a5.3 5.3 0 0 0 .545.046a1.02 1.02 0 0 0 .984-.696a1 1 0 0 0-.4-1.137a3.196 3.196 0 0 1-1.425-2.673c0-.066.002-.133.006-.198a13.014 13.014 0 0 0 8.21 3.48a1.02 1.02 0 0 0 .817-.36a1 1 0 0 0 .206-.867a3.157 3.157 0 0 1-.087-.729a3.23 3.23 0 0 1 3.226-3.226a3.184 3.184 0 0 1 2.345 1.02a.993.993 0 0 0 .921.298a9.27 9.27 0 0 0 1.212-.322a6.681 6.681 0 0 1-1.026 1.524z"
                      fill="currentColor"></path>
                  </svg>
                </a>
              </span>
              <span className="tooltip" data-tooltip="GitHub">
                <a
                  href="https://github.com/lalalavard"
                  rel="noopener"
                  target="_blank"
                  aria-label="My GitHub account"
                  className="hover:text-accent transition duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="h-8 w-8"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24">
                    <path
                      d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826z"
                      fill="currentColor"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default React.memo(Footer);

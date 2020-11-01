import React from 'react';

import './styles/main.css';
import './styles/navigation.css';
import './styles/news.css';
import './styles/timeline.css';

export const App = () => {
  return (
    <div className='main_container'>
      <div className='navigation_container'>
        <div className='logo'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 50'>
            <path
              fill='currentColor'
              d='M37.5 30.5H10.9v-6.6h34.3c-.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7 0-9 2.1-9 6.7v4.9c0 4 3.4 6.3 8.4 6.3h26.9v7H1.5c.9 3.8 3.8 5.8 9 5.8h27.1c5.7 0 8.5-2.2 8.5-6.9v-4.9c0-4.3-3.3-6.6-8.6-6.9zM91.8 18.6H59v30.7h9.3V37.5h24.2c6.7 0 10.4-2.3 10.4-7.7v-3.4c-.1-5-4.3-7.8-11.1-7.8zm3 9.8c0 2.2-.4 3.4-4 3.4H68.3l.1-8h22c4 0 4.5 1.2 4.5 3.3v1.3zM129.9 17.3l-5.6 6.9 9.5 13.1H114l-4.9 5.2h28.6l4.9 6.8h11zM171.4 23.9h34.8c-.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5 0-8.8 1.8-8.8 6.7v17.2c0 4.9 4.3 6.7 8.8 6.7h26.3c6 0 8.1-1.7 9.1-5.8h-34.8V23.9z'
            />
            <g class='letter_e'>
              <path
                fill='currentColor'
                d='M228.3 43.5v-9.4H247v-5.2h-28.1v20.4h41.5v-5.8zM219.9 18.6h41.9V24h-41.9z'
              />
            </g>
            <path
              fill='currentColor'
              d='M287.6 18.6H273l17.2 12.6c2.5-1.7 5.4-3.5 8-5l-10.6-7.6zm21.2 15.7c-2.5 1.7-5 3.6-7.4 5.4l13 9.5h14.7l-20.3-14.9z'
            />
            <path
              fill='currentColor'
              d='M399 .7c-80 4.6-117 38.8-125.3 46.9l-1.7 1.6h14.8C326.8 9.1 384.3 2 399 .7z'
            />
          </svg>
        </div>
        <ul className='navigation_menu'>
          <li className='navigation_link'>falcon heavy</li>
          <li className='navigation_link'>falcon 9</li>
          <li className='navigation_link'>dragon</li>
          <li className='navigation_link'>updates</li>
          <li className='navigation_link'>about spacex</li>
          <li className='navigation_link'>careers</li>
          <li className='navigation_link'>gallery</li>
        </ul>
        <button className='navigation_btn'>shop</button>
      </div>
      <div className='news_container'>
        <div className='slider_container'>
          <button className='slider_btn'>01</button>
          <button className='slider_btn_active'>02</button>
          <button className='slider_btn'>03</button>
          <button className='slider_btn'>04</button>
        </div>
        <span className='news_title'>advancing the future</span>
        <p className='news_description'>
          SpaceX designs, manufactures and launches advanced rockets and
          spacecraft. The company was founded in 2002 to revolutionize space
          technology, with the ultimate goal of enabling people to live on other
          planets.
        </p>
        <div className='news_read'>
          <button className='news_rounded'>
            <div className='more_icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 451.85 451.85'
              >
                <path
                  fill='currentColor'
                  d='M345.44 248.3L151.15 442.56a31.64 31.64 0 01-44.75-44.74l171.92-171.91L106.4 54.02a31.65 31.65 0 0144.75-44.75l194.29 194.28a31.53 31.53 0 019.26 22.37c0 8.1-3.1 16.2-9.27 22.37z'
                />
              </svg>
            </div>
          </button>
          <span className='read_more_text'>read more</span>
        </div>
      </div>
      <div
        className='timeline_container'
        style={{ borderLeft: '1px solid gray' }}
      >
        <div className='timeline_event'>
          <span className='timeline_year'>2017</span>
          <span className='timeline_description'>Investigating the Mars</span>
        </div>

        <div
          className='timeline_event'
          style={{ borderLeft: '1px solid gray' }}
        >
          <span className='timeline_year'>2017</span>
          <span className='timeline_description'>
            Creation of teams of Valunteers
          </span>
        </div>
        <div
          className='timeline_event_active'
          style={{ borderLeft: '1px solid white' }}
        >
          <img
            className='background_timeline_img'
            src='astronaut.jpg'
            alt='mars2022'
          />
          <div className='background_timeline'></div>
          <span className='timeline_year'>2022</span>
          <span className='timeline_description'>
            Flight of first team to the Mars
          </span>
        </div>
        <div
          className='timeline_event'
          style={{ borderLeft: '1px solid white' }}
        >
          <span className='timeline_year'>2022</span>
          <span className='timeline_description'>
            Exploring the Mars from inside
          </span>
        </div>
        <div
          className='timeline_event'
          style={{
            borderLeft: '1px solid gray',
            borderRight: '1px solid gray',
          }}
        >
          <span className='timeline_year'>2024</span>
          <span className='timeline_description'>
            Flight of second team to the Mars
          </span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Registration } from './components/Registration';

const App = () => {
  return (
    <div className="container">
      <h1>REGISTRATION</h1>
      <div className="logo">
        <div className="circle"></div>
        <svg
          className="user"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          version="1"
          viewBox="0 0 512 512"
        >
          <path
            d="M2335 5105c-273-42-517-172-708-375-210-223-319-481-334-790-21-432 191-845 557-1084 180-118 353-178 563-195 389-30 721 92 989 365 213 216 321 452 347 753 36 402-116 776-419 1038-196 168-376 252-625 288-120 17-260 18-370 0z"
            transform="matrix(.1 0 0 -.1 0 512)"
          ></path>
          <path
            d="M1427 2639c-452-48-766-372-912-944-97-381-122-839-60-1090 51-201 218-405 411-503 87-44 212-80 317-92 62-8 534-10 1437-8l1345 3 85 24c316 86 532 298 611 596 41 155 36 525-12 817-105 650-371 1040-792 1162-96 28-268 49-319 39-49-9-117-45-271-144-164-106-187-118-310-164-142-53-259-76-396-76-140 0-248 20-390 70-134 48-140 51-350 184-110 70-192 115-224 124-56 14-56 14-170 2z"
            transform="matrix(.1 0 0 -.1 0 512)"
          ></path>
        </svg>
      </div>
      <div className="container_box">
        <Registration />
      </div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);

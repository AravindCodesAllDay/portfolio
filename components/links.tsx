import { JSX } from "react";

interface Links {
  lable: string;
  link: string;
  icon: JSX.Element;
}

export default function LinksComponent() {
  const links: Links[] = [
    {
      lable: "Gmail",
      link: "mailto:aravindsiva1509@gmail.com?subject=wanted%20to%20chat&body=hope%20ur%20ready%20for%20a%20cup%20of%20coffee",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 7.16667V28.8333C32 30.0629 31.2161 31 30.1875 31H28.375V11.3364L17.5 20.6748L6.625 11.3364V31H4.8125C3.78391 31 3 30.0629 3 28.8333V7.16667C3 6.55133 3.19394 6.00967 3.51928 5.62617C3.84463 5.23075 4.29775 5 4.8125 5H5.41697L17.5 15.4726L29.583 5H30.1875C30.7023 5 31.1554 5.23183 31.4807 5.62617C31.8061 6.00967 32 6.55133 32 7.16667Z"
            fill="currentColor"
          />
        </svg>
      ),
    },

    {
      lable: "Github",
      link: "https://github.com/AravindCodesAllDay",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.125 28.2083C6.85417 30.25 6.85417 24.5625 4.375 23.8333M21.875 31.125V26.0208C21.875 24.5625 22.0208 23.9792 21.1458 23.1042C25.2292 22.6667 29.1667 21.0625 29.1667 14.3542C29.1649 12.6114 28.485 10.9377 27.2708 9.68749C27.8403 8.17369 27.7878 6.49611 27.125 5.02082C27.125 5.02082 25.5208 4.58332 22.0208 6.91666C19.0564 6.1446 15.9436 6.1446 12.9792 6.91666C9.47917 4.58332 7.875 5.02082 7.875 5.02082C7.21216 6.49611 7.15974 8.17369 7.72917 9.68749C6.51504 10.9377 5.83511 12.6114 5.83333 14.3542C5.83333 21.0625 9.77083 22.6667 13.8542 23.1042C12.9792 23.9792 12.9792 24.8542 13.125 26.0208V31.125"
            stroke="currentColor"
            strokeWidth="2.91667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      lable: "Linkedin",
      link: "https://www.linkedin.com/in/aravind-aravindhan-435434323/",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83331 9.25001C5.83331 8.47646 6.1406 7.7346 6.68758 7.18762C7.23457 6.64063 7.97643 6.33334 8.74998 6.33334H26.25C27.0235 6.33334 27.7654 6.64063 28.3124 7.18762C28.8594 7.7346 29.1666 8.47646 29.1666 9.25001V26.75C29.1666 27.5236 28.8594 28.2654 28.3124 28.8124C27.7654 29.3594 27.0235 29.6667 26.25 29.6667H8.74998C7.97643 29.6667 7.23457 29.3594 6.68758 28.8124C6.1406 28.2654 5.83331 27.5236 5.83331 26.75V9.25001Z"
            stroke="currentColor"
            strokeWidth="2.91667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6667 16.5417V23.8333"
            stroke="currentColor"
            strokeWidth="2.91667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6667 12.1667V12.1812"
            stroke="currentColor"
            strokeWidth="2.91667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 23.8333V16.5417"
            stroke="currentColor"
            strokeWidth="2.91667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.3333 23.8333V19.4583C23.3333 18.6848 23.026 17.9429 22.4791 17.3959C21.9321 16.8489 21.1902 16.5417 20.4167 16.5417C19.6431 16.5417 18.9013 16.8489 18.3543 17.3959C17.8073 17.9429 17.5 18.6848 17.5 19.4583"
            stroke="currentColor"
            strokeWidth="2.91667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <ul className="flex md:flex-col text-lg text-black dark:text-light font-semibold gap-6 md:gap-12">
      {links.map((link, index) => (
        <li
          key={index}
          className="hover:scale-105 transition-all ease-in-out duration-200 hover:border-b-2 border-black dark:border-light"
        >
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center cursor-none"
          >
            {link.icon}
            <p className="hidden md:block">{link.lable}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

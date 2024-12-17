"use client";
import { useTheme } from "@/components/theme-provider";

export default function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className={`cursor-none rounded-full hover:scale-105 transition-all duration-200 ease-in-out p-1 absolute bottom-8 left-8 z-30 md:hover:border-2 border-dashed text-light border-light`}
    >
      {theme == "light" ? (
        <svg
          className="text-black md:text-light"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6.25V3.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.25 8.75L23 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.75 15H26.25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.25 21.25L23 23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 23.75V26.25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.75 21.25L7 23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 15H5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.75 8.75L7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 3.75C15.165 3.75 15.3288 3.75 15.4913 3.75C13.8854 5.24214 12.8532 7.24981 12.5741 9.42403C12.295 11.5982 12.7866 13.8015 13.9634 15.6509C15.1403 17.5003 16.928 18.8788 19.0158 19.5468C21.1035 20.2149 23.3594 20.1302 25.3913 19.3075C24.6097 21.1881 23.3322 22.8213 21.6952 24.0328C20.0582 25.2444 18.1231 25.9888 16.0961 26.1867C14.0692 26.3847 12.0266 26.0287 10.1861 25.1568C8.34565 24.2848 6.77639 22.9296 5.64574 21.2358C4.51508 19.5419 3.86544 17.5729 3.76611 15.5387C3.66678 13.5046 4.12148 11.4816 5.08172 9.68564C6.04195 7.88967 7.4717 6.38803 9.21846 5.34092C10.9652 4.29381 12.9634 3.74049 15 3.74V3.75Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.25 5C21.25 5.66304 21.5134 6.29893 21.9822 6.76777C22.4511 7.23661 23.087 7.5 23.75 7.5C23.087 7.5 22.4511 7.76339 21.9822 8.23223C21.5134 8.70107 21.25 9.33696 21.25 10C21.25 9.33696 20.9866 8.70107 20.5178 8.23223C20.0489 7.76339 19.413 7.5 18.75 7.5C19.413 7.5 20.0489 7.23661 20.5178 6.76777C20.9866 6.29893 21.25 5.66304 21.25 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.75 13.75H26.25M25 12.5V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

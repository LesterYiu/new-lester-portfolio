import { PropsObj } from "./types";

export const GearLogo = ( props : PropsObj ) => {

    return (
        <svg 
            {
                ...{
                    viewBox : '0 0 42 42',
                    xmlns : 'http://www.w3.org/2000/svg',
                    ...props
                }
            }
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M20.6417 0.6875C18.7333 0.6875 17.1021 2.06875 16.7875 3.95208L16.5979 5.09583C16.5454 5.38293 16.4182 5.65114 16.2291 5.87349C16.04 6.09584 15.7958 6.26449 15.5208 6.3625C15.1842 6.48843 14.8521 6.62601 14.525 6.775C14.2612 6.9004 13.9691 6.9541 13.678 6.93069C13.3868 6.90728 13.107 6.8076 12.8667 6.64167L11.9229 5.96667C11.1704 5.42903 10.2515 5.17584 9.32985 5.25214C8.40817 5.32844 7.54345 5.72928 6.88958 6.38333L6.38333 6.88958C5.72928 7.54345 5.32844 8.40817 5.25214 9.32985C5.17584 10.2515 5.42903 11.1704 5.96667 11.9229L6.64167 12.8667C6.8076 13.107 6.90728 13.3868 6.93069 13.678C6.9541 13.9691 6.9004 14.2612 6.775 14.525C6.62601 14.8521 6.48843 15.1842 6.3625 15.5208C6.26449 15.7958 6.09584 16.04 5.87349 16.2291C5.65114 16.4182 5.38293 16.5454 5.09583 16.5979L3.95 16.7896C3.03837 16.9419 2.21028 17.4125 1.61293 18.1178C1.01559 18.8231 0.687679 19.7174 0.6875 20.6417V21.3583C0.6875 23.2667 2.06875 24.8979 3.95208 25.2125L5.09583 25.4021C5.68125 25.5 6.15417 25.9229 6.3625 26.4792C6.4875 26.8167 6.62708 27.1479 6.775 27.475C6.9004 27.7388 6.9541 28.0309 6.93069 28.322C6.90728 28.6132 6.8076 28.893 6.64167 29.1333L5.96667 30.0771C5.42903 30.8296 5.17584 31.7485 5.25214 32.6701C5.32844 33.5918 5.72928 34.4566 6.38333 35.1104L6.88958 35.6167C8.23958 36.9667 10.3687 37.1437 11.9229 36.0333L12.8667 35.3583C13.107 35.1924 13.3868 35.0927 13.678 35.0693C13.9691 35.0459 14.2612 35.0996 14.525 35.225C14.8521 35.3729 15.1833 35.5104 15.5208 35.6375C16.0771 35.8458 16.5 36.3188 16.5979 36.9042L16.7896 38.05C17.1021 39.9312 18.7313 41.3125 20.6417 41.3125H21.3583C23.2667 41.3125 24.8979 39.9313 25.2125 38.0479L25.4021 36.9042C25.4546 36.6171 25.5818 36.3489 25.7709 36.1265C25.96 35.9042 26.2042 35.7355 26.4792 35.6375C26.8157 35.5115 27.1479 35.3739 27.475 35.225C27.7388 35.0996 28.0309 35.0459 28.322 35.0693C28.6132 35.0927 28.893 35.1924 29.1333 35.3583L30.0771 36.0333C30.8296 36.571 31.7485 36.8242 32.6701 36.7479C33.5918 36.6716 34.4566 36.2707 35.1104 35.6167L35.6167 35.1104C36.9667 33.7604 37.1437 31.6313 36.0333 30.0771L35.3583 29.1333C35.1924 28.893 35.0927 28.6132 35.0693 28.322C35.0459 28.0309 35.0996 27.7388 35.225 27.475C35.3729 27.1479 35.5104 26.8167 35.6375 26.4792C35.8458 25.9229 36.3188 25.5 36.9042 25.4021L38.05 25.2125C38.962 25.0601 39.7903 24.5892 40.3877 23.8834C40.9851 23.1777 41.3128 22.283 41.3125 21.3583V20.6417C41.3125 18.7333 39.9313 17.1021 38.0479 16.7875L36.9042 16.5979C36.6171 16.5454 36.3489 16.4182 36.1265 16.2291C35.9042 16.04 35.7355 15.7958 35.6375 15.5208C35.5115 15.1842 35.3739 14.8521 35.225 14.525C35.0996 14.2612 35.0459 13.9691 35.0693 13.678C35.0927 13.3868 35.1924 13.107 35.3583 12.8667L36.0333 11.9229C36.571 11.1704 36.8242 10.2515 36.7479 9.32985C36.6716 8.40817 36.2707 7.54345 35.6167 6.88958L35.1104 6.38333C34.4566 5.72928 33.5918 5.32844 32.6701 5.25214C31.7485 5.17584 30.8296 5.42903 30.0771 5.96667L29.1333 6.64167C28.893 6.8076 28.6132 6.90728 28.322 6.93069C28.0309 6.9541 27.7388 6.9004 27.475 6.775C27.1479 6.62603 26.8158 6.48845 26.4792 6.3625C26.2042 6.26449 25.96 6.09584 25.7709 5.87349C25.5818 5.65114 25.4546 5.38293 25.4021 5.09583L25.2125 3.95C25.0601 3.03802 24.5892 2.20965 23.8834 1.61226C23.1777 1.01487 22.283 0.687186 21.3583 0.6875H20.6417ZM21 28.8125C23.072 28.8125 25.0591 27.9894 26.5243 26.5243C27.9894 25.0591 28.8125 23.072 28.8125 21C28.8125 18.928 27.9894 16.9409 26.5243 15.4757C25.0591 14.0106 23.072 13.1875 21 13.1875C18.928 13.1875 16.9409 14.0106 15.4757 15.4757C14.0106 16.9409 13.1875 18.928 13.1875 21C13.1875 23.072 14.0106 25.0591 15.4757 26.5243C16.9409 27.9894 18.928 28.8125 21 28.8125Z" fill="#2C5E1A"/>
        </svg>
    );

}

export const DownloadLogo = ( props : PropsObj ) => {

    return (
        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    fill : 'none',
                    viewBox : '0 0 24 24',
                    strokeWidth : '1.5',
                    stroke : 'currentColor',
                    ...props
                }
            }
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
        </svg>
    );

}

export const MailLogo = ( props : PropsObj ) => {

    return (
        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    fill : 'none',
                    viewBox : '0 0 24 24',
                    strokeWidth : '1.5',
                    stroke : 'currentColor',
                    ...props
                }
            }
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
    );

}

export const GithubLogo = ( props : PropsObj ) => {

    return (

        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 496 512',
                    ...props
                }
            }
        >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>

    );

}

export const LinkedInLogo = ( props : PropsObj ) => {

    return (
      
        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 448 512',
                    ...props
                }
            }
        >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
        </svg>
        
    );

}
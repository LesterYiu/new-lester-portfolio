import { PropsObj } from '@/app/utility/types';

export const GearLogo = ( props : PropsObj ) => {

    return (
        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props
                }
            }
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );

}

export const DownloadLogo = ( props : PropsObj ) => {

    return (
        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props
                }
            }
        >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            <path d="M12 18v-6"/>
            <path d="m9 15 3 3 3-3"/>
        </svg>
    );

}

export const MailLogo = ( props : PropsObj ) => {

    return (
        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props
                }
            }
        >
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
    );

}

export const GithubLogo = ( props : PropsObj ) => {

    return (

        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props
                }
            }
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>

    );

}

export const LinkedInLogo = ( props : PropsObj ) => {

    return (
      
        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props
                }
            }
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
        
    );

}

export const LeftChevron = ( props : PropsObj ) => {

    return (

        <svg
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    fill : 'none',
                    viewBox : '0 0 24 24',
                    strokeWidth : '1.5',
                    stroke : 'currentColor',
                    role : 'img',
                    ...props
                }
            }
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
        </svg>

    );

}

export const RightChevron = ( props : PropsObj ) => {

    return (

            <svg 
                {
                    ...{
                        xmlns : 'http://www.w3.org/2000/svg',
                        fill : 'none',
                        viewBox : '0 0 24 24',
                        strokeWidth : '1.5',
                        stroke : 'currentColor',
                        role : 'img',
                        ...props
                    }
                }
            >
                <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
            </svg>

    );

}

export const StarSvg = ( props : PropsObj ) => {

    return (

        <svg
            {
                ...{
                    viewBox : '0 0 33 33',
                    fill : 'none',
                    xmlns : 'http://www.w3.org/2000/svg',
                    role : 'img',
                    ...props
                }
            }
        >
            <path d='M0.909901 0.909923L7.28337 5.4807C12.9838 9.56881 20.6558 9.56881 26.3562 5.4807L32.7297 0.909923L28.1589 7.28339C24.0708 12.9838 24.0708 20.6558 28.1589 26.3563L32.7297 32.7297L26.3562 28.1589C20.6558 24.0708 12.9838 24.0708 7.28337 28.1589L0.909901 32.7297L5.48068 26.3563C9.56879 20.6558 9.56879 12.9838 5.48068 7.28339L0.909901 0.909923Z'/>
        </svg>

    )

}

export const HamburgerSvg = ( props : PropsObj ) => {
    
    return (

        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props
                }
            }
        >
            <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
        </svg>

    );

}

export const ExitSvg = ( props : PropsObj ) => {

    return (

        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    fill : 'none',
                    viewBox : '0 0 24 24',
                    strokeWidth : '1.5',
                    stroke : 'currentColor',
                    role : 'img',
                    ...props
                }
            }
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
        </svg>

    );

}

export const SendSvg = ( props : PropsObj ) => {

    return (

        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img', 
                    ...props
                }
            }
        >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>
        </svg>
        
    );

}

export const CheckSvg = ( props : PropsObj ) => {

    return (

        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props
                }
            }
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
        </svg>

    )

}

export const AccessibilitySvg = ( props : PropsObj ) => {

    return (

        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props
                }
            }
        >
            <circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/>
            <path d="M12 10v4"/>
        </svg>

    )

}

export const SunSvg = ( props : PropsObj ) => {

    return (

        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap :'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props
                }
            }
        >
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/>
            <path d="m17.66 17.66 1.41 1.41"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m6.34 17.66-1.41 1.41"/>
            <path d="m19.07 4.93-1.41 1.41"/>
        </svg>

    );

}

export const MoonSvg = ( props : PropsObj ) => {

    return (
      
        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props
                }
            }
        >
            <circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 1 0 10 10"/>
        </svg>
        
    );

}

export const Redo = ( props : PropsObj ) => {

    return (

        <svg 
            {
                ...{
                    xmlns : 'http://www.w3.org/2000/svg',
                    width : '24',
                    height : '24',
                    viewBox : '0 0 24 24',
                    fill : 'none',
                    stroke : 'currentColor',
                    strokeWidth : '2',
                    strokeLinecap : 'round',
                    strokeLinejoin : 'round',
                    role : 'img',
                    ...props 
                }
            }
        >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
        </svg>

    );

} 
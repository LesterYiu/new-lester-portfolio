'use client'

import Headroom from 'headroom.js';
import { useEffect, useRef, useState } from 'react';
import Logo from '@/public/logo-header.png';
import { ExitSvg, GearLogo, HamburgerSvg } from '@/app/utility/svgs';
import { Link } from '../utility/types';
import { RenderLinkSvg } from '../utility/utility-functions';
import Settings from './Settings-Popup';

interface HeaderProps {
    title : string;
    navigationCollection : {
        items : [ Link ];
    }
}

const Header = ({
    navigationCollection
} : HeaderProps ) => {

    const [ isMenuOpen, setIsMenuOpen ] = useState( false );

    const [ isSettingsOpen, setIsSettingsOpen ] = useState( false );

    const headerRef = useRef<HTMLElement | null>( null );
    
    const { items } = navigationCollection;

    useEffect( () => {

        const headroom = new Headroom( headerRef.current as HTMLElement, {
            offset : 100,
            tolerance : 5
        });

        headroom.init();

        if ( isMenuOpen || isSettingsOpen ) {

            document.querySelector('body')?.classList.add( 'popup-active' )
            document.querySelector('html')?.classList.add( 'popup-active' )

        } else {

            document.querySelector('body')?.classList.remove( 'popup-active' )
            document.querySelector('html')?.classList.remove( 'popup-active' )

        }

    }, [ isMenuOpen, isSettingsOpen ])

    return(
        <>
            <header
                {
                    ...{
                        ref : headerRef,
                        className : 'z-[100] w-full ease-in-out duration-500 headroom'
                    }
                }
            >
                <div className='wrapper-custom h-[100px] w-full flex items-center justify-between'>
                    <img 
                        {
                            ...{
                                src : Logo?.src,
                                alt : '',
                                className : 'w-20 h-auto'
                            }
                        }
                    />
                    <nav>
                        <ul className='flex items-center space-x-4 lg:space-x-10'>
                            { items &&
                                items.map( ( i, key ) => {

                                    return (
                                        <li key={ key }
                                            {
                                                ...{
                                                    className : 'lg:inline-block hidden'
                                                }
                                            }
                                        >
                                            <a
                                                {
                                                    ...{
                                                        href : i.link,
                                                        className : 'relative font-outfit font-medium text-lg underline-hover'
                                                    }
                                                }
                                            >
                                                { i.title }
                                            </a>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <button className='bg-white p-1 rounded-full shadow border-grey h-10 w-10 flex justify-center items-center hover:animate-rotate-gear'>
                                    <GearLogo 
                                        {
                                            ...{
                                                className : 'h-8 standard-svg',
                                                onClick : () => setIsSettingsOpen( true )
                                            }
                                        }
                                    />
                                </button>
                            </li>
                            <li className='lg:hidden'>
                                <button className='bg-white p-1 rounded-full shadow border-grey h-10 w-10 flex justify-center items-center scale-custom'>
                                    <HamburgerSvg 
                                        {
                                            ...{
                                                className : 'h-8 stroke-tertiary-green',
                                                onClick : () => { setIsMenuOpen ( true )}
                                            }
                                        }
                                    />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='custom-header-border'/>
            </header>        
            <nav 
                {
                    ...{
                        className : 'md:w-1/2 w-full fixed bg-secondary-green shadow py-8 px-8 top-0 right-0 h-full z-[200] transition-translate duration-300 ' + ( isMenuOpen ? 'translate-x-0' : 'translate-x-[100%]' )
                    }
                }
            >
                <div className='h-full flex flex-col items-center justify-center'>
                    <ul className='flex flex-col items-center space-y-8'>
                        <li>
                            <img 
                                {
                                    ...{
                                        src : Logo?.src,
                                        alt : '',
                                        className : 'w-20 h-auto'
                                    }
                                }
                            />
                        </li>
                        { items &&
                            items.map( ( i, key ) => {

                                return (
                                    <li key={ key }>
                                        <a
                                            {
                                                ...{
                                                    href : i.link,
                                                    className : 'relative font-outfit font-medium text-3xl after:absolute after:w-full after:h-[3px] after:-bottom-0 after:left-[1px] after:bg-primary-green after:origin-bottom-left after:scale-x-0 after:transition-transform after:duration-300 after:hover:scale-x-100 after:hover:origin-bottom-left',
                                                    onClick : () => setIsMenuOpen( false )
                                                }
                                            }
                                        >
                                            { i.title }
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className='flex mt-8 space-x-4'>
                        <li>
                            <a
                                {
                                    ...{
                                        href : 'https://www.linkedin.com/in/lester-yiu/',
                                        className : 'w-[45px] h-[45px] flex items-center justify-center inline-block drop-shadow-md p-2.5 bg-primary-green rounded-full scale-custom',
                                        target : '_blank',
                                        rel : 'noopener'
                                    }
                                }
                            >
                                { RenderLinkSvg( 'Linkedin', 'w-8 standard-svg' )}
                            </a>
                        </li>
                        <li>
                            <a
                                {
                                    ...{
                                        href : 'https://github.com/LesterYiu',
                                        className : 'w-[45px] h-[45px] flex items-center justify-center inline-block drop-shadow-md p-2.5 bg-primary-green rounded-full scale-custom',
                                        target : '_blank',
                                        rel : 'noopener'
                                    }
                                }
                            >
                                { RenderLinkSvg( 'GitHub', 'w-8 standard-svg' )}
                            </a>
                        </li>
                        <li>
                            <a
                                {
                                    ...{
                                        href : 'mailto:lester.ws.yiu@gmail.com',
                                        className : 'w-[45px] h-[45px] flex items-center justify-center inline-block drop-shadow-md p-2.5 bg-primary-green rounded-full scale-custom',
                                        target : '_blank',
                                        rel : 'noopener'
                                    }
                                }
                            >
                                { RenderLinkSvg( 'Mail', 'w-8 standard-svg' )}
                            </a>
                        </li>
                    </ul>
                </div>
                <button 
                    {
                        ...{
                            className : 'absolute right-4 bg-white shadow border rounded-full top-8 right-4 scale-custom !m-0',
                            onClick : () => { setIsMenuOpen ( false )}
                        }
                    }
                >
                    <ExitSvg 
                        {
                            ...{
                                className : 'h-10 w-10'
                            }
                        }
                    />
                </button>
            </nav>
            <div 
                {
                    ...{
                        className : 'fixed z-[100] top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-300 ' + ( isMenuOpen || isSettingsOpen ? 'opacity-[0.5]' : 'opacity-0 interact-none' ),
                        onClick : () => { 
                            setIsMenuOpen ( false )
                            setIsSettingsOpen( false )
                        }
                    }
                }
            />
            <Settings 
                {
                    ...{
                        setIsSettingsOpen,
                        isSettingsOpen
                    }
                }
            />
        </>

    )
}

export default Header;
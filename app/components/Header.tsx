'use client'

import Headroom from 'headroom.js';
import { useEffect, useRef } from 'react';
import Logo from '@/public/logo-header.png';
import { GearLogo, HamburgerSvg } from '@/app/utility/svgs';
import { Link } from '../utility/types';

interface HeaderProps {
    title : string;
    navigationCollection : {
        items : [ Link ];
    }
}

const Header = ({
    navigationCollection
} : HeaderProps ) => {

    const headerRef = useRef<HTMLElement | null>( null );
    
    const { items } = navigationCollection;

    useEffect( () => {

        const headroom = new Headroom( headerRef.current as HTMLElement, {
            offset : 100,
            tolerance : 5
        });

        headroom.init();

    }, [])

    return( 
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
                <div>
                    <ul className='flex items-center space-x-4 md:space-x-10'>
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
                                                    className : 'relative font-outfit font-medium text-lg after:absolute after:w-full after:h-[3px] after:-bottom-1 after:left-[1px] after:bg-primary-green after:origin-bottom-left after:scale-x-0 after:transition-transform after:duration-300 after:hover:scale-x-100 after:hover:origin-bottom-left'
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
                            <button className='bg-white p-1 rounded-full shadow border h-10 w-10 flex justify-center items-center hover:animate-rotate-gear'>
                                <GearLogo 
                                    {
                                        ...{
                                            className : 'h-8'
                                        }
                                    }
                                />
                            </button>
                        </li>
                        <li className='md:hidden'>
                            <button className='bg-white p-1 rounded-full shadow border h-10 w-10 flex justify-center items-center scale-custom'>
                                <HamburgerSvg 
                                    {
                                        ...{
                                            className : 'h-5'
                                        }
                                    }
                                />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='custom-header-border'/>
        </header>
    )
}

export default Header;
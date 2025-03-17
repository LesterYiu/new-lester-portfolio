'use client'

import Headroom from "headroom.js"
import { useEffect, useRef } from "react";
import Logo from "@/public/Logo-header.png";
import { GearLogo } from '@/app/utility/svgs';

interface Link {
    title : string;
    link : string;
}

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
                    className : 'w-full ease-in-out duration-500 headroom'
                }
            }
        >
            <div className="flex items-center justify-between j w-full max-w-screen-lg mx-auto mt-4 px-4">
                <img 
                    {
                        ...{
                            src : Logo?.src,
                            alt : '',
                            className : 'w-20 md:w-28 h-auto'
                        }
                    }
                />
                <div>
                    <ul className="flex items-center space-x-10">
                        { items &&
                            items.map( ( i, key ) => {

                                return (
                                    <li key={ key }
                                        {
                                            ...{
                                                className : 'hidden lg:inline-block'
                                            }
                                        }
                                    >
                                        <a
                                            {
                                                ...{
                                                    href : i.link,
                                                    className : 'font-outfit font-medium text-lg'
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
                            <button className="bg-white p-1 rounded-full">
                                <GearLogo 
                                    {
                                        ...{
                                            className : 'h-8'
                                        }
                                    }
                                />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
'use client'

import { useEffect, useState } from "react";

export const Loader = () => {

    const [ isDomLoaded, setIsDomLoaded ] = useState( false );

    useEffect( () => {

        setIsDomLoaded( true );

    }, [])

    return (

        <>
        { isDomLoaded ?
        <div 
            {
                ...{
                    className : 'animate-fade-out bg-white interact-none z-[999] fixed top-0 left-0 right-0 bottom-0 w-full h-full '
                }
            }
        /> 
        :
        <div 
            {
                ...{
                    className : 'bg-white interact-none z-[999] fixed top-0 left-0 right-0 bottom-0 w-full h-full '
                }
            }
        />
        }
        </>

    );

}

export default Loader;
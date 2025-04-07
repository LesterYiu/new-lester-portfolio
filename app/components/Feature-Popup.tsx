import Image from "next/image";
import { ExitSvg, LeftChevron, RightChevron } from "../utility/svgs";
import { useEffect, useState } from "react";
import { FeatureObj } from "../utility/types";

interface FeaturePopupProps {
    setIsFeatureOpen : React.Dispatch<React.SetStateAction<boolean>>;
    isFeatureOpen : boolean;
    setFeatureNum : React.Dispatch<React.SetStateAction<number>>;
    featureNum : number;
    carouselArr : any;
}

export const FeaturePopup = ({ 
    setIsFeatureOpen, 
    isFeatureOpen, 
    setFeatureNum, 
    featureNum,
    carouselArr
} : FeaturePopupProps ) => {
    
    const [ currentProject, setCurrentProject ] = useState<FeatureObj | null>( null );

    useEffect( () => {

        setCurrentProject( carouselArr[ featureNum ] );

        if ( isFeatureOpen ) {

            document.querySelector('body')?.classList.add( 'popup-active' )
            document.querySelector('html')?.classList.add( 'popup-active' )

        } else {

            document.querySelector('body')?.classList.remove( 'popup-active' )
            document.querySelector('html')?.classList.remove( 'popup-active' )

        }

    }, [ isFeatureOpen, featureNum ])

    const onPrevProject = () => {

        if ( featureNum === 0 ) {

            setCurrentProject( carouselArr[ carouselArr?.length - 1 ] );

            setFeatureNum( carouselArr?.length - 1 );

        } else {

            setCurrentProject( carouselArr[ featureNum - 1 ] );

            setFeatureNum( featureNum - 1);            

        }

    }

    const onNextProject = () => {

        if ( featureNum === carouselArr?.length - 1 ) {

            setCurrentProject( carouselArr[ 0 ] )
            setFeatureNum( 0 );

        } else {
         
            setCurrentProject( carouselArr[ featureNum + 1 ] )
            setFeatureNum( featureNum + 1 ); 
        }


    }

    return (

        <div 
            {
                ...{
                    className : 'reduce-motion:transition-none dark:bg-gradient-to-b dark:from-tertiary-green dark:to-tertiary-green z-[100] fixed inset-0 bg-gradient-to-b from-green to-white transition-all duration-200 ' + ( ! isFeatureOpen ? 'pointer-events-none opacity-0' : 'overflow-y-auto' ),
                    "aria-hidden" : ( isFeatureOpen ? 'false' : 'true' )
                }
            }
        >
            <div 
                {
                    ...{
                        className : 'relative h-full w-full wrapper-custom section-pb md:pt-[78px] pt-[48px] space-y-8'
                    }
                }
            >
                <div className='md:mr-16 md:space-x-8 flex'>
                    { currentProject?.image &&
                        <Image
                            {
                                ...{
                                    src : currentProject?.image?.url,
                                    alt : '',
                                    width : 500,
                                    height : 500,
                                    quality : 100,
                                    className : 'md:inline-block hidden w-20 h-20 object-contain bg-white p-1 rounded-2xl'
                                }
                            }
                        />
                    }
                    <div className='flex flex-col gap-y-4'>
                        { currentProject?.title &&
                            <h3 className='dark-text md:mr-0 mr-14 font-jost font-medium text-3xl'>
                                { currentProject?.title }
                            </h3>
                        }
                        { ( currentProject?.previewLink || currentProject?.sourceLink ) &&
                            <div className='dark-text space-x-4'>
                                <p className='font-jost inline-block text-lg'>
                                    Explore:
                                </p>
                                { currentProject?.previewLink &&
                                    <a 
                                        {
                                            ...{
                                                href : currentProject?.previewLink?.link,
                                                target : ( currentProject?.previewLink?.target == 'Blank' ? '_blank' : '_self'),
                                                rel : 'noopener',
                                                className : 'font-jost underline !ml-2 text-lg'
                                            }
                                        }
                                    >
                                        Live Site
                                    </a>
                                }
                                { currentProject?.sourceLink &&
                                    <a 
                                        {
                                            ...{
                                                href : currentProject?.sourceLink?.link,
                                                target : ( currentProject?.sourceLink?.target == 'Blank' ? '_blank' : '_self'),
                                                rel : 'noopener',
                                                className : 'dark-text font-jost underline text-lg'
                                            }
                                        }
                                    >
                                        Source Code
                                    </a>
                                }
                            </div>
                        }
                        { currentProject?.image &&
                            <Image
                                {
                                    ...{
                                        src : currentProject?.image?.url,
                                        alt : '',
                                        width : 500,
                                        height : 500,
                                        quality : 100,
                                        className : 'md:hidden inline-block m-auto w-36 h-36 object-contain bg-white p-1 rounded-2xl'
                                    }
                                }
                            />
                        }
                        { currentProject?.description &&
                            <p className='dark-text description-custom'>
                                { currentProject?.description }
                            </p>
                        }
                        { currentProject?.tags &&
                            <div className='flex gap-x-4 gap-y-2 flex-wrap'>
                                <p className='dark-text description-custom'>
                                    Project Tech Stack:
                                </p>
                                <ul 
                                    {
                                        ...{
                                            className : 'flex gap-x-2 gap-y-2 flex-wrap'
                                        }
                                    }
                                >
                                    { currentProject?.tags.map( ( tag : number, key : number ) => {
                                    return(
                                        <li key={ key }
                                            {
                                                ...{
                                                    className : 'dark:bg-primary-green font-jost text-lg text-white bg-primary-green rounded-3xl px-4 py-1 whitespace-nowrap interact-none'
                                                }
                                            }
                                        >
                                            { tag }
                                        </li>
                                    )
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                { currentProject?.previewImageDesktop?.url &&
                    <Image 
                        {
                            ...{
                                src : currentProject?.previewImageDesktop?.url,
                                alt : '',
                                width : 2000,
                                height : 2000,
                                quality : 100,
                                className : 'md:inline-block hidden relative z-[10] mx-auto max-h-[550px] object-contain'
                            }
                        }
                    />
                }
                { currentProject?.previewImageMobile?.url &&
                    <Image 
                        {
                            ...{
                                src : currentProject?.previewImageMobile?.url,
                                alt : '',
                                width : 2000,
                                height : 2000,
                                quality : 100,
                                className : 'md:hidden inline-block relative z-[10] mx-auto w-full object-contain'
                            }
                        }
                    />
                }
                <div className='flex justify-between pb-9'>
                    <button 
                        {
                            ...{
                                className : 'md:flex-row md:items-center items-start flex-col font-jost flex text-lg',
                                onClick : onPrevProject
                            }
                        }
                    >
                        <LeftChevron 
                            {
                                ...{
                                    className : 'dark:stroke-white  h-8 w-8 mr-2'
                                }
                            }
                        />
                        <span className='dark-text interact-none'>
                            Previous Project
                        </span>
                    </button>
                    <button 
                        {
                            ...{
                                className : 'md:flex-row md:items-center items-end flex-col-reverse font-jost flex text-lg',
                                onClick : onNextProject
                            }
                        }
                    >
                        <span className='dark-text interact-none'>
                            Next Project
                        </span>
                        <RightChevron 
                            {
                                ...{
                                    className : 'dark:stroke-white  h-8 w-8 ml-2'
                                }
                            }
                        />
                    </button>
                </div>
                <button 
                    {
                        ...{
                            className : 'absolute right-4 bg-white shadow border rounded-full top-[36px] scale-custom !m-0',
                            onClick : () => { setIsFeatureOpen ( false ) }
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
            </div>
        </div>

    );

};

export default FeaturePopup;
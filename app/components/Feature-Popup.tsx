import "wicg-inert";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExitSvg, LeftChevron, RightChevron } from '@/app/utility/svgs';
import { FeatureObj } from '@/app/utility/types';
import { focusTrap } from '@/app/utility/utility-functions';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/app/utility/contentful-richtext";
import Headroom from "headroom.js";

interface FeaturePopupProps {
    setIsFeatureOpen : React.Dispatch<React.SetStateAction<boolean>>;
    setFeatureNum : React.Dispatch<React.SetStateAction<number>>;
    setSelectedFeature : React.Dispatch<React.SetStateAction<FeatureObj | null>>;
    selectedFeature : FeatureObj | null;
    isFeatureOpen : boolean;
    featureNum : number;
    carouselArr : any;
}

export const FeaturePopup = ({ 
    setIsFeatureOpen, 
    isFeatureOpen, 
    setFeatureNum, 
    featureNum,
    carouselArr,
    setSelectedFeature,
    selectedFeature
} : FeaturePopupProps ) => {

    const popupNav = useRef<HTMLDivElement | null>( null );

    useEffect( () => {

        if ( isFeatureOpen ) {

            document.querySelector('body')?.classList.add( 'popup-active' )
            document.querySelector('html')?.classList.add( 'popup-active' )

        } else {

            document.querySelector('body')?.classList.remove( 'popup-active' )
            document.querySelector('html')?.classList.remove( 'popup-active' )

        }

        const scroller = document.querySelector( '#featurePopUp');

        if ( scroller instanceof HTMLElement && popupNav.current ) {

            const headroom = new Headroom(popupNav.current as HTMLElement, {
                scroller: scroller,
                offset: 100,
                tolerance: 5
            });
          
            headroom.init();
        
        }

        const featurePopUpEl = document.getElementById( 'featurePopUp' );

        isFeatureOpen ? featurePopUpEl?.removeAttribute( 'inert' ) : featurePopUpEl?.setAttribute( 'inert', '' );

        isFeatureOpen ? focusTrap( 'featurePopUp' ) : null;

    }, [ isFeatureOpen, featureNum ])

    const onPrevProject = () => {

        if ( featureNum === 0 ) {

            setSelectedFeature( carouselArr[ carouselArr?.length - 1 ] );

            setFeatureNum( carouselArr?.length - 1 );

        } else {

            setSelectedFeature( carouselArr[ featureNum - 1 ] );

            setFeatureNum( featureNum - 1 );            

        }

    }

    const onNextProject = () => {

        if ( featureNum === carouselArr?.length - 1 ) {

            setSelectedFeature( carouselArr[ 0 ] )
            setFeatureNum( 0 );

        } else {
         
            setSelectedFeature( carouselArr[ featureNum + 1 ] )
            setFeatureNum( featureNum + 1 ); 
        }


    }

    return (

        <div className='relative'>
            <div suppressHydrationWarning
                {
                    ...{
                        className : 'reduce-motion:transition-none dark:bg-gradient-to-b dark:from-tertiary-green dark:to-tertiary-green z-[100] fixed inset-0 bg-gradient-to-b from-green to-white transition-all duration-200 ' + ( ! isFeatureOpen ? 'pointer-events-none opacity-0' : 'overflow-y-auto' ),
                        id : 'featurePopUp'
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
                        { selectedFeature?.image &&
                            <Image
                                {
                                    ...{
                                        src : selectedFeature?.image?.url,
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
                            { selectedFeature?.title &&
                                <h3 className='dark-text md:mr-0 mr-14 font-jost font-medium text-3xl'>
                                    { selectedFeature?.title }
                                </h3>
                            }
                            { ( selectedFeature?.previewLink || selectedFeature?.sourceLink ) &&
                                <div className='dark-text space-x-4'>
                                    <p className='font-jost inline-block text-lg'>
                                        Explore:
                                    </p>
                                    { selectedFeature?.previewLink &&
                                        <a 
                                            {
                                                ...{
                                                    href : selectedFeature?.previewLink?.link,
                                                    target : ( selectedFeature?.previewLink?.target == 'Blank' ? '_blank' : '_self'),
                                                    rel : 'noopener',
                                                    className : 'font-jost underline !ml-2 text-lg'
                                                }
                                            }
                                        >
                                            Live Site
                                        </a>
                                    }
                                    { selectedFeature?.sourceLink &&
                                        <a 
                                            {
                                                ...{
                                                    href : selectedFeature?.sourceLink?.link,
                                                    target : ( selectedFeature?.sourceLink?.target == 'Blank' ? '_blank' : '_self'),
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
                            { selectedFeature?.image &&
                                <Image
                                    {
                                        ...{
                                            src : selectedFeature?.image?.url,
                                            alt : '',
                                            width : 500,
                                            height : 500,
                                            quality : 100,
                                            className : 'md:hidden inline-block m-auto w-36 h-36 object-contain bg-white p-1 rounded-2xl'
                                        }
                                    }
                                />
                            }
                            { selectedFeature?.featureDescription?.json &&
                                <div className='dark-text description-custom'>
                                    {
                                        documentToReactComponents( selectedFeature?.featureDescription.json, options )
                                    }
                                </div>
                            }
                            { selectedFeature?.tags &&
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
                                        { selectedFeature?.tags.map( ( tag : string, key : number ) => {
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
                    { selectedFeature?.previewImageDesktop?.url &&
                        <Image 
                            {
                                ...{
                                    src : selectedFeature?.previewImageDesktop?.url,
                                    alt : '',
                                    width : 2000,
                                    height : 2000,
                                    quality : 100,
                                    className : 'md:inline-block hidden relative z-[10] mx-auto max-h-[550px] object-contain pb-[114px]'
                                }
                            }
                        />
                    }
                    { selectedFeature?.previewImageMobile?.url &&
                        <Image 
                            {
                                ...{
                                    src : selectedFeature?.previewImageMobile?.url,
                                    alt : '',
                                    width : 2000,
                                    height : 2000,
                                    quality : 100,
                                    className : 'md:hidden inline-block relative z-[10] mx-auto w-full object-contain pb-[114px]'
                                }
                            }
                        />
                    }
                    <div 
                        {
                            ...{
                                ref : popupNav,
                                className : 'popup-headroom fixed compensate-scrollbar transition-all duration-200 bottom-0 left-0 z-[10] right-0 flex justify-between pb-8 !m-0'
                            }
                        }
                    >
                        <div className='wrapper-custom pr-8 w-full flex justify-between'>
                            <button 
                                {
                                    ...{
                                        className : 'border-none bg-white rounded-full shadow p-2 border border-grey scale-custom font-jost text-lg',
                                        onClick : onPrevProject
                                    }
                                }
                            >
                                <LeftChevron 
                                    {
                                        ...{
                                            className : 'h-8 w-8'
                                        }
                                    }
                                />
                            </button>
                            <button 
                                {
                                    ...{
                                        className : 'border-none bg-white rounded-full shadow p-2 border border-grey scale-custom font-jost text-lg',
                                        onClick : onNextProject
                                    }
                                }
                            >
                                <RightChevron 
                                    {
                                        ...{
                                            className : 'h-8 w-8'
                                        }
                                    }
                                />
                            </button>
                        </div>
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
                                    className : 'h-10 w-10',
                                    'aria-label' : 'Close pop up modal',
                                }
                            }
                        />
                    </button>
                </div>
                { isFeatureOpen &&
                    <div className='reduce-motion:transition-none dark:bg-gradient-to-b dark:from-tertiary-green dark:to-tertiary-green animate-fade-out bg-gradient-to-b from-green to-white interact-none absolute h-full w-full top-0 left-0 right-0 bottom-0 z-[999]' />
                }
            </div>
        </div>

    );

};

export default FeaturePopup;
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

        } else {

            document.querySelector('body')?.classList.remove( 'popup-active' )

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
                    className : 'z-[100] fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-green to-white transition-all duration-200 ' + ( ! isFeatureOpen ? 'pointer-events-none opacity-0' : '' ),
                    "aria-hidden" : ( isFeatureOpen ? 'false' : 'true' )
                }
            }
        >
            <div 
                {
                    ...{
                        className : 'relative h-full w-full wrapper-custom section-pb md:pt-[78px] pt-[48px] space-y-8 ' + ( isFeatureOpen ? 'overflow-y-auto' : '' )
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
                            <h3 className='md:mr-0 mr-14 font-jost font-medium text-3xl'>
                                { currentProject?.title }
                            </h3>
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
                                        className : 'md:hidden inline-block m-auto w-36 h-36 object-contain'
                                    }
                                }
                            />
                        }
                        { currentProject?.description &&
                            <p className='description-custom'>
                                { currentProject?.description }
                            </p>
                        }
                        { currentProject?.tags &&
                            <div className='flex gap-x-4 gap-y-2 flex-wrap'>
                                <p className='description-custom'>
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
                                                    className : 'font-jost text-white bg-primary-green rounded-2xl px-4 py-1 whitespace-nowrap interact-none'
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
                <Image 
                    {
                        ...{
                            src : currentProject?.previewImage?.url,
                            alt : '',
                            width : 2000,
                            height : 2000,
                            quality : 100,
                            className : 'relative z-[10] mx-auto max-h-[550px] object-contain'
                        }
                    }
                />
                <div className="flex justify-between">
                    <button 
                        {
                            ...{
                                className : 'font-jost flex items-center',
                                onClick : onPrevProject
                            }
                        }
                    >
                        <LeftChevron 
                            {
                                ...{
                                    className : 'h-8 w-8 mr-2'
                                }
                            }
                        />
                        <span className='interact-none'>
                            Previous Project
                        </span>
                    </button>
                    <button 
                        {
                            ...{
                                className : 'font-jost flex items-center',
                                onClick : onNextProject
                            }
                        }
                    >
                        <span className='interact-none'>
                            Next Project
                        </span>
                        <RightChevron 
                            {
                                ...{
                                    className : 'h-8 w-8 ml-2'
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
import Image from "next/image";
import { ExitSvg, LeftChevron, RightChevron, StarSvg } from "../utility/svgs";
import { FeatureObj } from "../utility/types";
import { useEffect, useState } from "react";

interface FeaturePopupProps {
    setIsFeatureOpen : React.Dispatch<React.SetStateAction<boolean>>;
    isFeatureOpen : boolean;
    setFeatureNum : React.Dispatch<React.SetStateAction<number>>;
    featureNum : number;
    clickedFeature : FeatureObj | null;
    carouselArr : any;
}

export const FeaturePopup = ({ 
    setIsFeatureOpen, 
    isFeatureOpen, 
    setFeatureNum, 
    featureNum,
    clickedFeature, 
    carouselArr
} : FeaturePopupProps ) => {
    
    const [ currentProject, setCurrentProject ] = useState( clickedFeature );

    useEffect( () => {

        setCurrentProject( carouselArr[ featureNum ] );

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
            <div className='relative h-full w-full wrapper-custom section-pb pt-[36px]'>
                <div className='flex space-x-8'>
                    { currentProject?.image &&
                        <Image
                            {
                                ...{
                                    src : currentProject?.image?.url,
                                    alt : '',
                                    width : 500,
                                    height : 500,
                                    quality : 100,
                                    className : 'w-20 h-20 object-contain'
                                }
                            }
                        />
                    }
                    <div className='flex flex-col space-y-2'>
                        { currentProject?.title &&
                            <h3 className='font-jost font-medium !text-3xl'>
                                { currentProject?.title }
                            </h3>
                        }
                        { currentProject?.labels &&
                            <ul 
                                {
                                    ...{
                                        className : 'flex space-x-2 ' + ( currentProject?.labels?.length > 2 ? 'md:overflow-x-scroll' : '')
                                    }
                                }
                            >
                                { currentProject?.labels.map( ( label, key ) => {
                                return(
                                    <li key={ key }
                                        {
                                            ...{
                                                className : 'font-jost text-white bg-primary-green rounded-2xl px-4 py-1 whitespace-nowrap pointer-events-none select-none'
                                            }
                                        }
                                    >
                                        { label }
                                    </li>
                                )
                                })}
                            </ul>
                        }
                    </div>
                </div>
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
                        Previous Project
                    </button>
                    <button 
                        {
                            ...{
                                className : 'font-jost flex items-center',
                                onClick : onNextProject
                            }
                        }
                    >
                        Next Project
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
                            className : 'absolute right-4 bg-white shadow border rounded-full top-[36px] scale-custom',
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
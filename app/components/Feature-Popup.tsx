import Image from "next/image";
import { ExitSvg, StarSvg } from "../utility/svgs";
import { FeatureObj } from "../utility/types";

interface FeaturePopupProps {
    setIsFeatureOpen : React.Dispatch<React.SetStateAction<boolean>>;
    clickedFeature : FeatureObj | null;
    isFeatureOpen : boolean;
}

export const FeaturePopup = ({ setIsFeatureOpen, isFeatureOpen, clickedFeature } : FeaturePopupProps ) => {

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
                    { clickedFeature?.image &&
                        <Image
                            {
                                ...{
                                    src : clickedFeature?.image?.url,
                                    alt : '',
                                    width : 500,
                                    height : 500,
                                    quality : 100,
                                    className : 'w-20 object-contain'
                                }
                            }
                        />
                    }
                    <div className='flex flex-col space-y-2'>
                        { clickedFeature?.title &&
                            <h3 className='font-jost font-medium !text-3xl'>
                                { clickedFeature?.title }
                            </h3>
                        }
                        { clickedFeature?.labels &&
                            <ul 
                                {
                                    ...{
                                        className : 'flex space-x-2 ' + ( clickedFeature?.labels?.length > 2 ? 'md:overflow-x-scroll' : '')
                                    }
                                }
                            >
                                { clickedFeature?.labels.map( ( label, key ) => {
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
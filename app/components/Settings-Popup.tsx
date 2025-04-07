import { useEffect, useState } from "react";
import { MoonSvg, Redo, SunSvg } from "../utility/svgs";

interface SettingsProps {
    setIsSettingsOpen : React.Dispatch<React.SetStateAction<boolean>>;
    isSettingsOpen : boolean;
}

export const Settings = ({
    setIsSettingsOpen,
    isSettingsOpen
} : SettingsProps ) => {

    const [ theme, setTheme ] = useState( 'light' );
    
    const [ isMotionOn, setIsMotionOn ] = useState( 'false' );

    useEffect( () => {
        
        document.querySelector( 'html' )?.setAttribute( 'data-theme', localStorage?.theme );

        localStorage.theme === 'dark' ? setTheme( 'dark' ) : setTheme( 'light' );

    }, [])

    const handleSaveChanges = () => {

        document.querySelector( 'html' )?.setAttribute( 'data-theme', theme );

        localStorage.setItem( 'theme', theme );
        
        localStorage.setItem( 'isReducedMotion', `${ isMotionOn }` );
        

        setIsSettingsOpen( false );

    }

    const resetSettings = () => {

        localStorage.clear();

        setTheme( 'false' );

        setIsMotionOn( 'false' );

        setIsSettingsOpen( false );

    }

    return (
        <div 
            {
                ...{
                    className : 'dark-bg lg:w-[60%] md:px-8 w-[calc(100%-32px)] settings-pop-up overflow-y-auto px-6 fixed z-[200] transition-translate duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-6 rounded-2xl shadow border-grey ' + ( isSettingsOpen ? 'opacity-1 overflow-y-auto' : 'opacity-0 interact-none')
                }
            }
        >
            <div className='flex flex-col space-y-4'>
                <div className='border-b border-b-[#D3D3D3] pb-4'>
                    <p className='dark-text font-jost text-2xl text-black text-left font-medium'>
                        Appearance Menu
                    </p>
                    <p className='dark-text description-custom !text-base text-[#808080]'>
                        Change how the UI looks and feels in your browser.
                    </p>
                </div>
                <div className='border-b border-b-[#D3D3D3] pb-4'>
                    <p className='dark-text font-jost text-base text-black text-left font-medium'>
                        Interface Theme
                    </p>
                    <p className='dark-text description-custom !text-base text-[#808080]'>
                        Select or customize the UI theme.
                    </p>
                    <button
                        {
                            ...{
                                className : 'dark:border-white dark:border relative flex justify-between items-center px-0.5 h-7 rounded-3xl mt-2 gap-x-2 ' + ( theme === 'dark' ? 'bg-dark-primary' : 'dark:bg-transparent bg-primary-green' ),
                                onClick : () => setTheme( theme === 'light' ? 'dark' : 'light'  )
                            }
                        }
                    >
                        <SunSvg 
                            {
                                ...{
                                    className : 'relative z-10 w-6 h-6 transition-all duration-300 ' + ( theme === 'dark' ? 'stroke-white' : 'stroke-black' ) 
                                }
                            }
                        />
                        <MoonSvg 
                            {
                                ...{
                                    className : 'relative z-10 w-6 h-6 transition-all duration-300 ' + ( theme === 'dark' ? 'stroke-black' : 'stroke-white' )
                                }
                            }
                        />
                        <div
                            {
                                ...{
                                    className : 'absolute bg-white rounded-full p-1 w-6 h-6 transition-all duration-300 left-0.5 ' + ( theme === 'dark' ? 'translate-x-[calc(100%+8px)]' : '' )
                                }
                            }
                        />
                    </button>
                </div>
                <div className='border-b border-b-[#D3D3D3] pb-4 flex flex-col'>
                    <p className='dark-text description-custom font-medium !text-base'>
                        Reduced Motion
                    </p>
                    <p className='dark-text description-custom !text-base text-[#808080]'>
                        Disable non-essential motion.
                    </p>
                    <button 
                        {
                            ...{
                                className : 'relative relative mt-2 w-12',
                                onClick : () => setIsMotionOn( isMotionOn === 'true' ? 'false' : 'true' )
                            }
                        }
                    >
                        <div 
                            {
                                ...{
                                    className : 'w-12 h-6 rounded-2xl ' + ( isMotionOn === 'true' ? 'dark:bg-dark-tertiary bg-primary-green' : 'bg-[#636363]' )
                                }
                            }
                        />
                        <div 
                            {
                                ...{
                                    className : 'bg-white top-1/2 -translate-y-1/2 left-0.5 h-5 w-5 absolute rounded-full transition-all duration-300 ' + ( isMotionOn === 'true' ? 'translate-x-[calc(100%+4px)]' : '' )
                                }
                            }
                        />
                    </button>
                </div>
                <div className='md:flex-row flex-col flex justify-between'>
                    <button 
                        {
                            ...{
                                className : 'md:p-0 pb-2 group text-left font-jost text-base text-black font-medium flex items-center space-x-2',
                                onClick : resetSettings
                            }
                        }
                    >
                        <div className='dark-text inline-block'>
                            Reset to Default
                        </div>
                        <Redo 
                            {
                                ...{
                                    className : 'dark:stroke-white w-4 h-4 transition-rotate duration-300 group-hover:-rotate-90'
                                }
                            }
                        />
                    </button>
                    <div className='sm:space-y-0 sm:space-x-2 sm:flex-row space-y-2 flex-col flex'>
                        <button 
                            {
                                ...{
                                    className : 'dark:bg-white sm:text-left font-jost text-base text-black text-center  border-[#D3D3D3] border px-6 py-2 rounded-3xl font-medium scale-custom',
                                    onClick : () => setIsSettingsOpen( false )
                                }
                            }
                        >
                            Cancel
                        </button>
                        <button 
                            {
                                ...{
                                    className : 'dark:border-none dark:bg-dark-tertiary sm:text-left text-center font-jost text-base border-[#D3D3D3] border px-6 py-2 rounded-3xl bg-primary-green text-white font-medium scale-custom',
                                    onClick : handleSaveChanges
                                }
                            }
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Settings;
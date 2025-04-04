import { MoonSvg, Redo, SunSvg } from "../utility/svgs";

export const Settings = ({
    setIsSettingsOpen,
    isSettingsOpen
} : any ) => {

    return (
        <div 
            {
                ...{
                    className : 'lg:w-[60%] md:px-8 w-[calc(100%-32px)] settings-pop-up overflow-y-auto px-6 fixed z-[200] transition-translate duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-6 rounded-2xl shadow border-grey ' + ( isSettingsOpen ? 'opacity-1 overflow-y-auto' : 'opacity-0 interact-none')
                }
            }
        >
            <div className='flex flex-col space-y-4'>
                <div className='border-b border-b-[#D3D3D3] pb-4'>
                    <p className='font-jost text-2xl text-black text-left font-medium'>
                        Appearance Menu
                    </p>
                    <p className='description-custom !text-base text-[#808080]'>
                        Change how the UI looks and feels in your browser.
                    </p>
                </div>
                <div className='border-b border-b-[#D3D3D3] pb-4'>
                    <p className='font-jost text-base text-black text-left font-medium'>
                        Interface Theme
                    </p>
                    <p className='description-custom !text-base text-[#808080]'>
                        Select or customize the UI theme.
                    </p>
                    <div className='flex justify-between items-center px-1 w-[4.5rem] h-8 bg-primary-green rounded-3xl mt-2'>
                        <SunSvg className='w-6 h-6 stroke-black bg-white rounded-full p-1'/>
                        <MoonSvg className='w-5 h-5 stroke-white'/>
                    </div>
                </div>
                <div className='border-b border-b-[#D3D3D3] pb-4 flex flex-col'>
                    <p className='description-custom font-medium !text-base'>
                        Reduced Motion
                    </p>
                    <p className='description-custom !text-base text-[#808080]'>
                        Disable non-essential motion.
                    </p>
                    <div className='relative mt-2'>
                        <div className='w-12 h-6 bg-primary-green rounded-2xl'/>
                        <div className='bg-white top-1/2 -translate-y-1/2 left-0.5 h-5 w-5 absolute rounded-full' />
                    </div>
                </div>
                <div className='md:flex-row flex-col flex justify-between'>
                    <button className='md:p-0 pb-2 text-left font-jost text-base text-black font-medium flex items-center space-x-2'>
                        <div className='inline-block'>
                            Reset to Default
                        </div>
                        <Redo 
                            {
                                ...{
                                    className : 'w-4 h-4'
                                }
                            }
                        />
                    </button>
                    <div className='sm:space-y-0 sm:space-x-2 sm:flex-row space-y-2 flex-col flex'>
                        <button 
                            {
                                ...{
                                    className : 'sm:text-left font-jost text-base text-black text-center  border-[#D3D3D3] border px-6 py-2 rounded-3xl font-medium scale-custom',
                                    onClick : () => setIsSettingsOpen( false )
                                }
                            }
                        >
                            Cancel
                        </button>
                        <button className='sm:text-left text-center font-jost text-base border-[#D3D3D3] border px-6 py-2 rounded-3xl bg-primary-green text-white font-medium scale-custom'>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Settings;
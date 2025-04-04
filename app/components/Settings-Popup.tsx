import { MoonSvg, SunSvg } from "../utility/svgs";

export const Settings = ({
    setIsSettingsOpen,
    isSettingsOpen
} : any ) => {

    return (
        <div 
            {
                ...{
                    className : 'lg:w-[60%] md:px-8 w-[calc(100%-32px)] px-6 fixed z-[200] transition-translate duration-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-6 rounded-2xl shadow border-grey ' + ( isSettingsOpen ? 'opacity-1' : 'opacity-0 interact-none')
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
                <div className='md:flex-row flex-col-reverse flex justify-between'>
                    <button className='md:pt-0 pt-4 text-left font-jost text-base text-black font-medium'>
                        <div className='inline-block underline-hover'>
                            Reset to Default
                        </div>
                    </button>
                    <div className='space-x-2'>
                        <button 
                            {
                                ...{
                                    className : 'font-jost text-base text-black text-left  border-[#D3D3D3] border px-6 py-2 rounded-3xl font-medium scale-custom',
                                    onClick : () => setIsSettingsOpen( false )
                                }
                            }
                        >
                            Cancel
                        </button>
                        <button className='font-jost text-base text-left border-[#D3D3D3] border px-6 py-2 rounded-3xl bg-primary-green text-white font-medium scale-custom'>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Settings;
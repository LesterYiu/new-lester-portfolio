import Image from 'next/image';
import HeroBackground from '@/public/blob.png';
import DarkHeroBackground from '@/public/blob-dark.png';
import WaveImage from '@/public/wave.png';
import DarkWaveImage from '@/public/wave-dark.png';
import { MailLogo, DownloadLogo } from '../utility/svgs';
import { ResultObj } from '../utility/types';

interface LinkObject {
    title : string,
    link : string
}

const Hero = ({ 
    heading, 
    subheading, 
    description, 
    image, 
    linksCollection 
} : ResultObj) => {

    const links = linksCollection?.items;

    return (
        <section className='lg:pb-[165px] dark:bg-gradient-to-b dark:from-tertiary-green dark:to-dark-tertiary pb-[235px] pt-[132px] relative bg-gradient-to-b from-green to-white w-full'>
            <div className='lg:flex-row lg:space-x-8 wrapper-custom flex-col-reverse flex items-center'>
                <div className='lg:w-1/2 w-full space-y-8'>
                    { heading &&
                        <p className='dark-text primary-heading-custom'>
                            { heading }
                        </p>
                    }
                    { subheading &&
                        <h1 className='dark-text secondary-heading-custom'>
                            { subheading }
                        </h1>
                    }
                    { description &&
                        <p className='dark-text description-custom'>
                            { description }
                        </p>
                    }
                    { links &&
                        <div className='md:flex-row md:space-x-4 md:space-y-0 space-y-4 flex-col flex'>
                            {
                                links.map ( ( i : LinkObject, key : number ) => {
                                    return (
                                        <a key={ key }
                                            {
                                                ...{
                                                    href : i.link,
                                                    className : 'standard-button flex items-center justify-center scale-custom ' + ( key === 0 ? 'bg-primary-green' : 'bg-black')
                                                }
                                            }
                                        >
                                            { i?.title }
                                            { key === 0 ? 
                                            <MailLogo 
                                                {
                                                    ...{
                                                        className : 'w-6 ml-1.5 standard-svg'
                                                    }
                                                }
                                            />
                                            :
                                            <DownloadLogo 
                                                {
                                                    ...{
                                                        className : 'w-6 ml-1 standard-svg'
                                                    }
                                                }
                                            />
                                            }
                                        </a>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                { image &&
                    <div className='lg:w-1/2 relative w-full mb-4 lg:mb-0'>
                        <Image
                            {
                                ...{
                                    src : image?.url,
                                    alt : image?.description,
                                    width : 500,
                                    height : 500,
                                    quality : 100,
                                    className : 'relative z-[10] mx-auto'
                                }
                            }
                        />
                        <Image
                            {
                                ...{
                                    src : DarkHeroBackground?.src,
                                    alt : image?.description,
                                    width : 500,
                                    height : 500,
                                    quality : 100,
                                    className : 'dark-img absolute top-0 left-1/2 -translate-x-1/2'
                                }
                            }
                        />
                        <Image
                            {
                                ...{
                                    src : HeroBackground?.src,
                                    alt : image?.description,
                                    width : 500,
                                    height : 500,
                                    quality : 100,
                                    className : 'light-img absolute top-0 left-1/2 -translate-x-1/2'
                                }
                            }
                        />
                    </div>
                }
            </div>
            <Image
                {
                    ...{
                        src : WaveImage?.src,
                        alt : image?.description,
                        width : 2000,
                        height : 175,
                        quality : 100,
                        className : 'dark:hidden inline-block absolute w-full left-0 bottom-0 h-[125px]'
                    }
                }
            />
            <Image
                {
                    ...{
                        src : DarkWaveImage?.src,
                        alt : image?.description,
                        width : 2000,
                        height : 175,
                        quality : 100,
                        className : 'dark:inline-block hidden absolute left-0 bottom-0 h-[125px]'
                    }
                }
            />
        </section>
    )

}

export default Hero;
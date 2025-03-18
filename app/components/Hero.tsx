import Image from "next/image";
import HeroBackground from "@/public/blob.png";
import { ContactLogo, DownloadLogo } from "../utility/svgs";

interface PropsObject {
    [ key: string ]: any
}

interface LinkObject {
    title : string,
    link : string
}

const Hero = ({ heading, subheading, description, image, linksCollection } : PropsObject) => {

    const links = linksCollection?.items;

    return (
        <section className="pt-[132px]">
            <div className="lg:flex-row flex-col max-w-screen-lg mx-auto my-4 px-4 flex items-center md:space-x-8">
                <div className="lg:w-1/2 w-full space-y-8">
                    { heading &&
                        <p className="font-jost text-base uppercase">
                            { heading }
                        </p>
                    }
                    { subheading &&
                        <h1 className="font-jost text-6xl font-semibold">
                            { subheading }
                        </h1>
                    }
                    { description &&
                        <p className="font-jost text-lg">
                            { description }
                        </p>
                    }
                    { links &&
                        <div className="md:flex-row md:space-x-4 space-y-4 md:space-y-0 flex-col flex">
                            {
                                links.map ( ( i : LinkObject, key : number ) => {
                                    return (
                                        <a key={ key }
                                            {
                                                ...{
                                                    href : i.link,
                                                    className : 'font-jost text-white text-lg px-10 py-2.5 rounded-3xl text-center flex items-center justify-center ' + ( key === 0 ? 'bg-primary-green' : 'bg-black')
                                                }
                                            }
                                        >
                                            { i?.title }
                                            { key === 0 ? 
                                            <ContactLogo 
                                                {
                                                    ...{
                                                        className : 'w-5 ml-1'
                                                    }
                                                }
                                            />
                                            :
                                            <DownloadLogo 
                                                {
                                                    ...{
                                                        className : 'w-6 pb-[2px]'
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
                    <div className="lg:w-1/2 relative w-full mt-16 lg:mt-0">
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
                                    src : HeroBackground?.src,
                                    alt : image?.description,
                                    width : 500,
                                    height : 500,
                                    quality : 100,
                                    className : 'absolute top-0 left-1/2 -translate-x-1/2'
                                }
                            }
                        />
                    </div>
                }
            </div>
        </section>
    )

}

export default Hero;
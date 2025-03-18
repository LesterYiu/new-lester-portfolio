import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ResultObj } from '@/app/utility/types';
import { options } from '@/app/utility/contentful-richtext';
import Image from 'next/image';
import HeroBackground from "@/public/blob-2.png";

export const Card = ({ 
    cardDescription, 
    heading, 
    subheading, 
    alignment, 
    image 
} : ResultObj ) => {

    return (
        <section 
            {
                ...{
                    className : 'wrapper-custom flex flex-col ' + ( alignment ? 'lg:flex-row' : 'lg:flex-row-reverse')
                }
            }
        >
            <div 
                {
                    ...{
                        className : 'lg:w-1/2 space-y-4 w-full ' + ( alignment ? 'lg:mr-8' : 'lg:ml-8')
                    }
                }
            >
                <p className='primary-heading-custom'>
                    { heading }
                </p>
                <h2 className='tertiary-heading-custom'>
                    { subheading }
                </h2>
                { cardDescription.json &&
                    <div className='space-y-4'>
                        {
                            documentToReactComponents( cardDescription.json, options)
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
        </section>
    )

}

export default Card;
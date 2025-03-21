import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link, ResultObj } from '@/app/utility/types';
import { options } from '@/app/utility/contentful-richtext';
import Image from 'next/image';
import HeroBackground from '@/public/blob-2.png';
import { RenderLinkSvg  } from '../utility/utility-functions';
import { StarSvg } from '../utility/svgs';

export const Card = ({ 
    cardDescription, 
    heading, 
    subheading, 
    alignment, 
    image,
    linksCollection
} : ResultObj ) => {

    const linksArr = linksCollection?.items;

    return (
        <section 
            {
                ...{
                    className : 'wrapper-custom section-pb flex flex-col-reverse ' + ( alignment ? 'lg:flex-row' : 'lg:flex-row-reverse')
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
                <p className='primary-heading-custom underline decoration-primary-green decoration-[3px] underline-offset-[6px]'>
                    { heading }
                </p>
                <div className='flex items-center space-x-2'>
                    <StarSvg className='w-6 h-6' />
                    <h2 className='tertiary-heading-custom'>
                        { subheading }
                    </h2>
                    <StarSvg className='w-6 h-6' />
                </div>
                { cardDescription.json &&
                    <div className='space-y-4'>
                        {
                            documentToReactComponents( cardDescription.json, options)
                        }
                    </div>
                }
                { linksCollection &&
                    <div className='lg:justify-start flex justify-center space-x-8 lg:space-x-4'>
                        { linksArr.map( ( i : Link, key : number ) => {
                            return (
                                <a key={ key }
                                    {
                                        ...{
                                            href : i.link,
                                            className : 'lg:w-[45px] lg:h-[45px] w-[60px] h-[60px] flex items-center justify-center inline-block drop-shadow-md p-2.5 bg-primary-green rounded-full',
                                            target : ( i.target == 'Blank' ? '_blank' : '_self'),
                                            rel : 'noopener'
                                        }
                                    }
                                >
                                    { RenderLinkSvg( i.svg, 'lg:w-6 w-8 fill-white' )}
                                </a>
                            );
                        })}
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
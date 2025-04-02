import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { StarSvg } from "../utility/svgs";
import { ResultObj } from "../utility/types";
import { options } from '@/app/utility/contentful-richtext';

const Form = ({
    title,
    subheading,
    formDescription
}: ResultObj) => {
    return (

        <section className='lg:flex-row lg:space-x-8 lg:space-y-0 space-y-8 wrapper-custom flex flex-col items-center section-pb'>
            <div className='lg:w-1/2 w-full space-y-4'>
                <p className='primary-heading-custom underline decoration-primary-green decoration-[3px] underline-offset-[6px]'>
                    { title }
                </p>
                <div className='flex items-center space-x-2'>
                    <StarSvg className='w-6 h-6' />
                    <h2 className='tertiary-heading-custom'>
                        { subheading }
                    </h2>
                    <StarSvg className='w-6 h-6' />
                </div>
                { formDescription.json &&
                    <div className='space-y-4'>
                        {
                            documentToReactComponents( formDescription.json, options)
                        }
                    </div>
                }
            </div>
            <form action='' className='lg:w-1/2 w-full space-y-4'>
                <div className='md:flex-row flex-col flex gap-x-4'>
                    <div className='md:w-1/2 flex flex-col'>
                        <label htmlFor='firstName' className='description-custom'>
                            First Name*
                        </label>
                        <input type='text' name='firstName' id='firstName' required  className='border-2 border-black rounded p-1 font-jost text-lg'/>
                    </div>
                    <div className='md:w-1/2 flex flex-col'>
                        <label htmlFor='lastName' className='description-custom'>
                            Last Name
                        </label>
                        <input type='text' name='lastName' id='lastName' className='border-2 border-black rounded p-1 font-jost text-lg'/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='email' className='description-custom'>
                        Email*
                    </label>
                    <input type='email' name='email' id='email' required className='border-2 border-black rounded p-1 font-jost text-lg' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='message' className='description-custom'>
                        Message*
                    </label>
                    <textarea name='message' id='message' required className='resize-none border-2 border-black rounded p-1 font-jost text-lg'/>
                </div>
            </form>
        </section>

    );

}

export default Form;
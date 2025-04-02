'use client'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SendSvg, StarSvg } from "../utility/svgs";
import { ResultObj } from "../utility/types";
import { options } from '@/app/utility/contentful-richtext';
import { FormEvent, use, useEffect, useState } from "react";

const Form = ({
    title,
    subheading,
    formDescription
}: ResultObj) => {

    const [ firstName, setFirstName ] = useState( '' );
    const [ lastName, setLastName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ emailMessage, setEmailMessage ] = useState( '' );

    const [ isFirstNameInvalid, setIsFirstNameInvalid ] = useState( false );
    const [ isEmailInvalid, setIsEmailInvalid ] = useState( false );
    const [ isMessageInvalid, setIsMessageInvalid ] = useState( false );


    const onFormSubmit = async ( e : FormEvent<HTMLFormElement> ) => {

        e.preventDefault();

        const templateParams = {
            firstName,
            lastName,
            email,
            emailMessage
        }

        const res = await fetch( "/api/form-submit", {
            method : "POST",
            headers: {
                "Content-Type": "application/json", // Ensures JSON format
            },
            body : JSON.stringify( templateParams )
        })

        const data = await res.json();

        ( data.invalidValues?.firstName ? setIsFirstNameInvalid( true ) : setIsFirstNameInvalid( false ) );

        ( data.invalidValues?.emailAddress ? setIsEmailInvalid( true ) : setIsEmailInvalid( false ) );

        ( data.invalidValues?.emailMessage  ? setIsMessageInvalid( true ) : setIsMessageInvalid( false ) );

    }
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
            <form name="contact" method='POST' onSubmit={ ( e ) => { onFormSubmit ( e )} } className='lg:w-1/2 w-full space-y-4'>
                <div className='md:flex-row flex-col flex gap-x-4'>
                    <div className='md:w-1/2 flex flex-col'>
                        { isFirstNameInvalid &&
                        <p>test</p>
                        }
                        <label htmlFor='firstName' className='description-custom'>
                            First Name*
                        </label>
                        <input type='text' name='firstName' id='firstName' required  className='standard-input' onChange={ ( e ) => { setFirstName ( e.target.value )}}/>
                    </div>
                    <div className='md:w-1/2 flex flex-col'>
                        <label htmlFor='lastName' className='description-custom'>
                            Last Name
                        </label>
                        <input type='text' name='lastName' id='lastName' className='standard-input' onChange={ ( e ) => { setLastName ( e.target.value )}}/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    { isEmailInvalid &&
                    <p>test</p>
                    }
                    <label htmlFor='email' className='description-custom'>
                        Email*
                    </label>
                    <input type='email' name='email' id='email' required className='standard-input' onChange={ ( e ) => { setEmail ( e.target.value )}} />
                </div>
                <div className='flex flex-col'>
                    { isMessageInvalid &&
                    <p>test</p>
                    }
                    <label htmlFor='message' className='description-custom'>
                        Message*
                    </label>
                    <textarea name='message' id='message' required className='resize-none standard-input h-32' onChange={ ( e ) => { setEmailMessage ( e.target.value )}}/>
                </div>
                <button type="submit" className='text-white standard-button scale-custom flex items-center text-lg'>
                    <span>
                        Submit
                    </span>
                    <SendSvg 
                        {
                            ...{
                                className : 'w-6 ml-1.5 standard-svg'
                            }
                        }
                    />
                </button>
            </form>
        </section>

    );

}

export default Form;
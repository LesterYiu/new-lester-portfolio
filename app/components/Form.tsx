'use client'

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { CheckSvg, SendSvg, StarSvg } from "../utility/svgs";
import { ResultObj } from "../utility/types";
import { options } from '@/app/utility/contentful-richtext';
import { FormEvent, use, useEffect, useState } from "react";

interface invalidObj {
    isFirstNameInvalid : boolean,
    isEmailInvalid : boolean,
    isMessageInvalid : boolean
}

const Form = ({
    title,
    sectionId,
    subheading,
    formDescription
}: ResultObj) => {

    const [ firstName, setFirstName ] = useState( '' );

    const [ lastName, setLastName ] = useState( '' );

    const [ email, setEmail ] = useState( '' );

    const [ emailMessage, setEmailMessage ] = useState( '' );

    const [ isInvalidObj, setIsInvalidObj ] = useState<invalidObj>({
        isFirstNameInvalid : false,
        isEmailInvalid : false,
        isMessageInvalid : false
    });

    const [ isFormSubmitted, setIsFormSubmitted ] = useState( false );

    const handleInvalidObj = ( substate : string, value : boolean ) => {
        setIsInvalidObj( ( prevState : any ) => ({
            ...prevState,
            [ substate ] : value
        }))
    }

    const handleOnInputChange = ( substate : string, setInputFunction : React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement > ) => {

        handleInvalidObj( substate, false );
        setInputFunction( event.target.value );

    }
    
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

        ( data.invalidValues?.firstName ? handleInvalidObj( 'isFirstNameInvalid', true ) : handleInvalidObj( 'isFirstNameInvalid', false ) );

        ( data.invalidValues?.emailAddress ? handleInvalidObj( 'isEmailInvalid', true ) : handleInvalidObj( 'isEmailInvalid', false ) );

        ( data.invalidValues?.emailMessage  ? handleInvalidObj( 'isMessageInvalid', true )  : handleInvalidObj( 'isMessageInvalid', false )  );
        
        if ( res.ok ) {
            
            setIsFormSubmitted( true );

        }
    }

    return (

        <section 
            {
                ...{
                    className : 'lg:flex-row lg:space-x-8 lg:space-y-0 relative space-y-8 wrapper-custom flex flex-col items-center mb-[125px]',
                    id : ( sectionId || undefined )
                }
            }
        >
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
            <div className='lg:static lg:w-1/2 relative w-full'>
                <form 
                    name='contact'
                    method='POST' 
                    onSubmit={ ( e ) => { onFormSubmit ( e )} } 
                    className='w-full space-y-4'
                >
                    <div className='w-full md:flex-row flex-col flex gap-x-4'>
                        <div className='flex flex-col md:w-1/2'>
                            <label htmlFor='firstName' className='description-custom'>
                                First Name*
                            </label>
                            <input 
                                type='text' 
                                name='firstName' 
                                id='firstName'  
                                className='standard-input' 
                                onChange={ ( e ) => { handleOnInputChange( 'isFirstNameInvalid', setFirstName, e ) }}
                            />
                            <p 
                                {
                                    ...{
                                        className : 'font-jost text-md text-red transition-all duration-400 select-none ' + ( isInvalidObj?.isFirstNameInvalid ? 'opacity-1 max-h-[100px]' : 'opacity-0 max-h-[0px]' ),
                                        'aria-hidden' : ( isInvalidObj?.isFirstNameInvalid ? false : true )
                                    }
                                }
                            >
                                Enter a first name
                            </p>
                        </div>
                        <div className='md:w-1/2 flex flex-col md:w-1/2'>
                            <label 
                                htmlFor='lastName' 
                                className='description-custom'
                            >
                                Last Name
                            </label>
                            <input 
                                type='text' 
                                name='lastName' 
                                id='lastName' 
                                className='standard-input' 
                                onChange={ ( e ) => { setLastName ( e.target.value )}}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label 
                            htmlFor='email' 
                            className='description-custom'
                        >
                            Email*
                        </label>
                        <input 
                            name='email' 
                            id='email' 
                            className='standard-input' 
                            onChange={ ( e ) => { handleOnInputChange( 'isEmailInvalid', setEmail, e )}} 
                        />
                            <p 
                                {
                                    ...{
                                        className : 'font-jost text-md text-red transition-all duration-400 select-none ' + ( isInvalidObj?.isEmailInvalid ? 'opacity-1 max-h-[100px]' : 'opacity-0 max-h-[0px]' ),
                                        'aria-hidden' : ( isInvalidObj?.isEmailInvalid ? false : true )
                                    }
                                }
                            >
                            Enter valid email address
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='message' className='description-custom'>
                            Message*
                        </label>
                        <textarea 
                            name='message' 
                            id='message' 
                            className='resize-none standard-input h-32' 
                            onChange={ ( e ) => { handleOnInputChange( 'isMessageInvalid', setEmailMessage, e )}}
                        />
                            <p 
                                {
                                    ...{
                                        className : 'font-jost text-md text-red transition-all duration-400 select-none ' + ( isInvalidObj?.isMessageInvalid ? 'opacity-1 max-h-[100px]' : 'opacity-0 max-h-[0px]' ),
                                        'aria-hidden' : ( isInvalidObj?.isMessageInvalid ? false : true )
                                    }
                                }
                            >
                            Enter a message longer than 10 characters
                        </p>
                    </div>
                    <button 
                        type='submit'
                        className='md:w-auto w-full text-white standard-button scale-custom flex items-center justify-center text-lg'
                    >
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
                <div 
                    {
                        ...{
                            className : 'lg:w-1/2 absolute top-0 h-full w-full right-0 transition-[opacity] duration-300 !mt-0 ' + ( isFormSubmitted ? 'opacity-1' : 'opacity-0 interact-none ')
                        }
                    }
                >
                    <div 
                        {
                            ...{
                                className : 'absolute z-10 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex flex-col items-center space-y-4'
                            }
                        }
                    >
                        <CheckSvg 
                            {
                                ...{
                                    className : 'standard-svg w-32'
                                }
                            }
                        />
                        <p className='text-2xl font-jost'>
                            Form submitted
                        </p>
                    </div>
                    <div 
                        {
                            ...{
                                className : 'bg-white transition-[opacity] duration-300 p-8 h-full h-full w-full  ' + ( isFormSubmitted ? 'opacity-[0.8]' : 'opacity-0 interact-none')
                            }
                        }
                    />
                </div>
            </div>
        </section>

    );

}

export default Form;
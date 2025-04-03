import emailjs from '@emailjs/nodejs';

export async function POST ( req ) {

    const { firstName, lastName, email, emailMessage } = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const invalidValuesObj = {};

    function validateForm( ) {


        if ( firstName.length <= 1 ) invalidValuesObj.firstName = true;

        if ( emailMessage.length <= 10 ) invalidValuesObj.emailMessage = true;

        if ( ! emailRegex.test( email ) ) invalidValuesObj.emailAddress = true;

        return Object.values(invalidValuesObj).some(val => val === true);

    }

    if ( validateForm( email ) ) {
        return Response.json({ 
            success: false, message: "Email has not been sent.", 
            invalidValues : invalidValuesObj
        }, { status: 500 });
    }

    try {
        emailjs.send( 
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, 
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, 
            { 
                firstName,
                lastName,
                email,
                emailMessage
            }, 
            {
                publicKey : process.env.NEXT_PUBLIC_EMAIL_API_KEY,
                privateKey : process.env.NEXT_PRIVATE_EMAIL_API_KEY
            }
        )

        return Response.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
        
    } catch ( error ) {
        console.log( error)
    }
}
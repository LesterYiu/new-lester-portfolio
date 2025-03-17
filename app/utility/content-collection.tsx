import Hero from "../components/Hero";

interface PropsObject {
    [ key: string ]: any
}

const ContentCollection = ({ result }: PropsObject) => {

    if ( result?.type == 'Hero' ) {
        
        return (

            <Hero 
                {
                    ...{
                        ...result
                    }
                }
            />

        )

    }

}

export default ContentCollection;
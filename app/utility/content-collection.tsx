import Card from "../components/Card";
import Hero from "../components/Hero";
import { ResultObj } from "./types";

const ContentCollection = ({ 
    result, 
    type 
} : ResultObj ) => {

    if ( type == 'Hero' ) {
        
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

    if ( type == 'Card' ) {

        return (

            <Card 
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
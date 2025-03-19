import Card from "../components/Card";
import FeatureCarousel from "../components/Feature-Carousel";
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

        );

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

        );

    }

    if ( type == 'Carousel' ) {

        return (

            <FeatureCarousel 
                {
                    ...{
                        ...result
                    }
                }
            />

        );

    }

}

export default ContentCollection;
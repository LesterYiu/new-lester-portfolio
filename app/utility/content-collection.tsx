import Card from '@/app/components/Card';
import FeatureCarousel from '@/app/components/Feature-Carousel';
import Hero from '@/app/components/Hero';
import { ResultObj } from '@/app/utility/types';

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
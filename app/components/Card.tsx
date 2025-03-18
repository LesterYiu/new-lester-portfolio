import { ResultObj } from '../utility/types';

export const Card = ({ 
    cardDescription, 
    heading, 
    subheading, 
    alignment, 
    image 
} : ResultObj ) => {

    return (
        <section>
            <p>
                { heading }
            </p>
            <h2>
                { subheading }
            </h2>
        </section>
    )

}

export default Card;
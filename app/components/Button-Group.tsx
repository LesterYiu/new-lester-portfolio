import { LeftChevron, RightChevron } from '@/app/utility/svgs';

export const ButtonGroup = ({ 
    next, 
    previous, 
    goToSlide, 
    ...rest 
} : any ) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className='hidden md:inline-block carousel-button-group absolute top-0 right-4 flex space-x-4'>
            <button 
                {
                    ...{
                        className : 'rounded-full shadow p-2 border border-grey scale-custom' + ( currentSlide === 0 ? ' disable' : '' ),
                        onClick : ( () => previous() )
                    }
                }
            >
                <LeftChevron 
                    {
                        ...{
                            className : 'w-10'
                        }
                    }
                />
            </button>
            <button 
                {
                    ...{
                        onClick : ( () => next() ),
                        className : 'rounded-full shadow p-2 border border-grey scale-custom'
                    }
                }
            >
                <RightChevron 
                    {
                        ...{
                            className : 'w-10'
                        }
                    }
                />
            </button>
      </div>
    );
  };

export default ButtonGroup;
import { useState } from 'react';
import { FeatureObj } from '@/app/utility/types';
import { RightChevron } from '@/app/utility/svgs';
import { options } from '@/app/utility/contentful-richtext';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const Feature = ({ 
	setIsFeatureOpen,
	isFeatureOpen,
	setFeatureNum,
	arrayKey,
	title, 
	featureDescription, 
	image, 
	labels
} : FeatureObj ) => {

	const [ clickTime, setClickTime ] = useState<number>( 0 );

	const onMouseDownClick = () => {

		setClickTime( Date.now() );

	}

	const onFeatureClick = () => {

		const maxClickTime = 200;

		setTimeout( () => {

			if ( Date.now() - clickTime < maxClickTime ) {
		
				setIsFeatureOpen?.( true );

				setFeatureNum( arrayKey );

			}

		}, 0)

	}

    return (

		<div
			{
				...{
					className : 'dark:bg-[#363636] dark:border-none group transition-all duration-200 relative bg-cover h-full w-full bg-bottom border rounded-2xl cursor-pointer',
					onMouseDown : onMouseDownClick,
					onMouseUp : onFeatureClick,
					onKeyDown : ( e ) => {
						if ( e.key === 'Enter' ) {
							setIsFeatureOpen?.( true );
							setFeatureNum( arrayKey );
						}
					},
					'aria-label' : `Open pop up modal to read more about ${ title }`,
					'aria-pressed' : isFeatureOpen ? true : false,
					'role' : 'button',
					tabIndex : 0
				}
			}
		>
			<div className='relative space-y-4 p-6 flex flex-col h-full'>
				{ image &&
					<div className='dark:bg-white dark:rounded-3xl dark:p-3 h-48 flex justify-center'>
						<img 
							{
								...{
									className : 'h-48 object-contain interact-none',
									src : image?.url,
									alt : ''
								}
							}
						/>
					</div>
				}
				{ title &&
					<h2 className='dark-text font-jost text-2xl text-black text-left font-medium whitespace-break-spaces interact-none'>
						{ title }
					</h2>
				}
				{ ( labels && labels?.length > 0 ) &&
					<ul 
						{
							...{
								className : 'flex space-x-2 ' + ( labels?.length > 2 ? 'md:overflow-x-scroll' : '')
							}
						}
					>
						{ labels.map( ( label, key ) => {
						return(
							<li key={ key }
								{
									...{
										className : 'dark:bg-primary-green interact-none font-jost text-white bg-primary-green text-md rounded-3xl px-4 py-1 whitespace-nowrap'
									}
								}
							>
								{ label }
							</li>
						)
						})}
					</ul>
				}
				{ featureDescription?.json &&
					<div className='dark-text line-clamp-3 font-jost text-md text-left text-lg text-black h-full interact-none'>
						{
							documentToReactComponents( featureDescription.json, options)
						}
					</div>
				}
				<div className='dark-text font-jost flex space-x-1'>
					<span className='group-hover:underline interact-none text-lg'>
						Read more
					</span>
					<RightChevron className='reduce-motion:transition-none w-6 transition-all duration-200 group-hover:translate-x-1'/>
				</div>
			</div>
		</div>

    );

}

export default Feature;
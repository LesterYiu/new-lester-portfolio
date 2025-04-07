import { FeatureObj } from '@/app/utility/types';
import { useState } from 'react';
import { RightChevron } from '../utility/svgs';

export const Feature = ({ 
	setIsFeatureOpen,
	setFeatureNum,
	arrayKey,
	title, 
	description, 
	image, 
	labels,
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

		<section>
			<div
				{
					...{
						className : 'dark:bg-[#363636] dark:border-none group transition-all duration-200 relative bg-cover w-full bg-bottom border rounded-2xl cursor-pointer',
						onMouseDown : onMouseDownClick,
						onMouseUp : onFeatureClick
					}
				}
			>
				<div className='relative space-y-4 p-6 flex flex-col h-full'>
					{ image &&
						<div className='dark:bg-white dark:rounded-3xl dark:p-3 h-48 flex justify-center'>
							<img 
								{
									...{
										className : 'object-contain interact-none',
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
					{ labels?.length > 0 &&
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
											className : 'dark:bg-primary-green font-jost text-white bg-primary-green text-md rounded-3xl px-4 py-1 whitespace-nowrap'
										}
									}
								>
									{ label }
								</li>
							)
							})}
						</ul>
					}
					{ description &&
						<p className='dark-text line-clamp-3 font-jost text-md text-left text-lg text-black h-full interact-none'>
							{ description }
						</p>
					}
					<div className='dark-text font-jost flex space-x-1'>
						<span className='group-hover:underline text-lg'>
							Read more
						</span>
						<RightChevron className='reduce-motion:transition-none w-6 transition-all duration-200 group-hover:translate-x-1'/>
					</div>
				</div>
			</div>
		</section>

    );

}

export default Feature;
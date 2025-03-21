import { ImageObj } from '@/app/utility/types';

interface FeatureObj {
    title : string;
    description : string;
    image : ImageObj;
	labels: [ string ];
}

export const Feature = ({ 
	title, 
	description, 
	image, 
	labels 
} : FeatureObj) => {

    return (

		<div
			{
				...{
					className : 'h-[450px] relative sh-[500px] bg-cover w-full bg-bottom border rounded-2xl'
				}
			}
		>
			<div className='relative space-y-4 p-6 flex flex-col h-full'>
                { image &&
                    <img 
						{
							...{
								className : 'select-none pointer-events-none h-48 object-contain',
								src : image?.url,
								alt : ''
							}
						}
					/>
                }
				{ title &&
                    <h2 className='font-jost text-2xl text-black text-left font-medium whitespace-break-spaces'>
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
										className : 'font-jost text-white bg-primary-green rounded-2xl px-4 py-1 whitespace-nowrap pointer-events-none select-none'
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
                    <p className='font-jost text-md text-left text-black h-full line-clamp-5 md:line-clamp-4'>
                        { description }
                    </p>
				}
			</div>
			{/* <div className="z-10 absolute top-0 left-0 w-full h-full bg-black opacity-50 mix-blend-multiply"/> */}
		</div>

    );

}

export default Feature;
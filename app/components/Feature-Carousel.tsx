'use client'

import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import { ImageObj } from '../utility/types';
import Feature from './Feature';
import ButtonGroup from "./Button-Group";

interface Collection {
	featureCardsCollection : {
		items : [{
			title : string;
			description : string;
			image : ImageObj;
			[ key: string ]: any
		}]
	}
	title : string;
	subheading : string
}

export const FeatureCarousel = ( { featureCardsCollection, title, subheading } : Collection ) => {

	const carouselArr = featureCardsCollection?.items;

	if ( ! carouselArr?.length ) return;

    return (
		<div className='relative max-w-[1024px] mx-auto pl-4 space-y-4 pb-8'>
			<p className='primary-heading-custom'>
				{ title }
			</p>
			<h2 className='tertiary-heading-custom'>
				{ subheading }
			</h2>
			<Carousel 
				{
					...{
						responsive : {
							desktop: {
								breakpoint : {
									max : 3000,
									min : 1024
								},
								items : 3,
								partialVisibilityGutter: 0
							},
							tablet : {
								breakpoint : {
									max : 1024,
									min : 768
								},
								items : 2,
								partialVisibilityGutter: 0
							},
							mobile : {
								breakpoint : {
									max : 768,
									min : 0
								},
								items : 1,
								partialVisibilityGutter: 50
							}
						},
						draggable : true,
						infinite : true,
						ssr : true,
						arrows : false,
						customButtonGroup : <ButtonGroup />,
						showDots : true
					}
				}
			>
				{
					carouselArr?.map( ( i, key ) => {
						return (
							<Feature key={ key }
								{
									...{
										...i
									}
								}
							/>
						)
					})
				}
			</Carousel>
		</div>
    )

}

export default FeatureCarousel;
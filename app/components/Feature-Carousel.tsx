'use client'

import "wicg-inert";
import { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Feature from '@/app/components/Feature';
import ButtonGroup from '@/app/components/Button-Group';
import FeaturePopup from '@/app/components/Feature-Popup';
import { FeatureObj } from '@/app/utility/types';
import { StarSvg } from '@/app/utility/svgs';

interface Collection {
	featureCardsCollection : {
		items : [ FeatureObj ]
	}
	title : string;
	sectionId : string;
	subheading : string;
}

export const FeatureCarousel = ( { 
	featureCardsCollection, 
	title, 
	sectionId,
	subheading 
} : Collection ) => {

	const [ isFeatureOpen, setIsFeatureOpen ] = useState<boolean>( false );

	const [ selectedFeature, setSelectedFeature ] = useState<FeatureObj | null >( null );

	const [ featureNum, setFeatureNum ] = useState( 0 );

	const [ scrollbarWidth, setScrollbarWidth ] = useState<number>( 0 );

	const carouselArr = featureCardsCollection?.items;

	useEffect( () => {

		if ( ! window ) return

		setScrollbarWidth( window.innerWidth - document.documentElement.clientWidth )

	}, [])

	if ( ! carouselArr?.length ) return;

    return (

		<section
			{
				...{
					id : ( sectionId || undefined ),
					className : 'dark-bg '
				}
			}
		>
			<div className='md:pb-0 relative max-w-[1024px] mx-auto pl-4 space-y-4 pb-8 mb-[125px]'>
				<p className='dark:decoration-white dark-text primary-heading-custom underline decoration-primary-green decoration-[3px] underline-offset-[6px]'>
					{ title }
				</p>
				<div className='flex items-center space-x-2'>
					<StarSvg className='dark:fill-white fill-primary-green w-6 h-6' />
					<h2 className='dark-text tertiary-heading-custom'>
						{ subheading }
					</h2>
					<StarSvg className='dark:fill-white fill-primary-green w-6 h-6' />
				</div>
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
							showDots : true,
							swipeable : true
						}
					}
				>
					{ carouselArr?.map( ( i, key ) => {
						return (
							<Feature key={ key }
								{
									...{
										setIsFeatureOpen,
										isFeatureOpen,
										setFeatureNum,
										arrayKey : key,
										title : i?.title,
										featureDescription: i?.featureDescription,
										labels: i?.labels,
										image: i?.image,
										setSelectedFeature,
										selectedFeature,
										carouselArr
									}
								}
							/>
						)})
					}
				</Carousel>
			</div>
			<FeaturePopup 
				{
					...{
						setIsFeatureOpen,
						isFeatureOpen,
						setFeatureNum,
						featureNum,
						carouselArr,
						selectedFeature,
						setSelectedFeature,
						scrollbarWidth
					}
				}
			/>
		</section>

    )

}

export default FeatureCarousel;
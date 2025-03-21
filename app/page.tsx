import { draftMode } from 'next/headers';
import { getPageData } from '@/lib/api';
import Header from './components/Header';
import ContentCollection from '@/app/utility/content-collection';
import { ResultObj } from './utility/types';

export default async function Page() {

	const { isEnabled } = draftMode();
	const results = await getPageData( isEnabled, '/' );
	const headerData = results?.header;
	const contentCollection = results?.contentBlocksCollection?.items;

	return (
		<div>
			{ headerData &&
				<Header 
					{
						...{
							...headerData
						}
					}
				/>
			}
			{ results?.contentBlocksCollection.items.length &&
				contentCollection.map ( ( i : ResultObj, key : number ) => {
					return (
						<ContentCollection key={ key }
							{
								...{
									result : i,
									type : i.type
								}
							}
						/>
					)
				}) 
			}
		</div>
	);
}

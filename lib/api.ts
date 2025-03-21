import { PAGE_GRAPHQL_FIELDS } from '@/app/utility/contentful-query'

async function fetchGraphQL( query: string, preview = false ): Promise<any> {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${ process.env.CONTENTFUL_SPACE_ID }`,
		{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${
			preview
				? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
				: process.env.CONTENTFUL_ACCESS_TOKEN
			}`,
		},
		body: JSON.stringify({ query }),
		next: { revalidate: 10 },
		},
	).then(( response ) => response.json());
}

export async function getPageData ( isDraftMode : boolean, slug : String ): Promise<any> {
	const entries = await fetchGraphQL(
		`query {
			pageCollection(limit: 1, where: { slug: "${ slug }" }, preview: ${isDraftMode ? "true" : "false"}) {
				items {
					${ PAGE_GRAPHQL_FIELDS }
				}
			}
		}`,
		isDraftMode,
	);

	return entries?.data?.pageCollection?.items[ 0 ];
}
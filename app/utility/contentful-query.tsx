export const IMAGE_GRAPHQL_FIELDS = `
	title
	description
	contentType
	fileName
	size
	url
	width
	height
`

export const HEADER_GRAPHQL_FIELDS = `
	title
	navigationCollection (limit: 5) {
		items {
			title
			link
		}
	}
`

export const HERO_GRAPHQL_FIELDS = `
	title
	image
	heading
	subheading
	description
`

export const PAGE_GRAPHQL_FIELDS = `
	title
	slug
	header {
		${HEADER_GRAPHQL_FIELDS}
	}
	contentBlocksCollection (limit: 5) {
		items {
			type: __typename
			title
			heading
			subheading
			description
			image {
				${IMAGE_GRAPHQL_FIELDS}
			}
		}
	}
`
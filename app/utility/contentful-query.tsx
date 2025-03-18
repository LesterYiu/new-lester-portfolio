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

export const LINK_GRAPHQL_FIELDS = `
	title
	link
`

export const HEADER_GRAPHQL_FIELDS = `
	title
	navigationCollection ( limit : 5 ) {
		items {
			${ LINK_GRAPHQL_FIELDS }
		}
	}
`

export const HERO_GRAPHQL_FIELDS = `
	type: __typename
	title
	heading
	subheading
	description
	image {
		${ IMAGE_GRAPHQL_FIELDS }
	}
	linksCollection ( limit : 2 ) {
		items {
			${ LINK_GRAPHQL_FIELDS }
		}
	}
`

export const CARD_GRAPHQL_FIELDS = `
	type: __typename
	title
	heading
	subheading
	cardDescription : description {
		json
	}
	image {
		${ IMAGE_GRAPHQL_FIELDS }
	}
	alignment
`

export const PAGE_GRAPHQL_FIELDS = `
	title
	slug
	header {
		${ HEADER_GRAPHQL_FIELDS }
	}
	contentBlocksCollection ( limit : 5 ) {
		items {
			... on Hero {
				${ HERO_GRAPHQL_FIELDS }
			}
			... on Card {
				${ CARD_GRAPHQL_FIELDS }
			}
		}
	}
`
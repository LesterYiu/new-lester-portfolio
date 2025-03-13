export const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

export const HEADER_GRAPHQL_FIELDS = `
	title
	navigationCollection {
        items {
          title
          link
        }
	}
`
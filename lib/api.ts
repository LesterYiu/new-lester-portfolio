import { POST_GRAPHQL_FIELDS, HEADER_GRAPHQL_FIELDS } from "@/app/utility/contentful-query"

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
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
  ).then((response) => response.json());
}

// function extractPost(fetchResponse: any): any {
//   return fetchResponse?.data?.postCollection?.items?.[0];
// }

// function extractPostEntries(fetchResponse: any): any[] {
//   return fetchResponse?.data?.postCollection?.items;
// }

// export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
//   const entry = await fetchGraphQL(
//     `query {
//       postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
//         items {
//           ${POST_GRAPHQL_FIELDS}
//         }
//       }
//     }`,
//     true,
//   );
//   return extractPost(entry);
// }

export async function getHeader (isDraftMode: boolean): Promise<any> {
  const entries = await fetchGraphQL(
    `query {
		headerCollection(preview: ${isDraftMode ? "true" : "false"}) {
			items {
				${HEADER_GRAPHQL_FIELDS}
			}
		}
    }`,
    isDraftMode,
  );

  return {
    headers: entries?.data?.headerCollection?.items || []
  };
}

export async function getHomePage (isDraftMode: boolean): Promise<any> {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
      headerCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${HEADER_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  );

  return {
    posts: entries?.data?.postCollection?.items || [],
    headers: entries?.data?.headerCollection?.items || [],
  };
}
import { cache } from "react";

export async function getLocales() {
  const headers = {
    "content-type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  };
  const requestBody = {
    query: `query getLocales {
        localesCollection {
          edges {
            node {
              id
              name
              value
              created_at
              updated_at
            }
          }
        }
      }`,
    variables: {},
  };

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody),
  };

  const response = await (
    await fetch(process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL as string, options)
  ).json();

  return response.data.localesCollection.edges;
}

/**
 *
 * @param params Is equal to the field value to lowercase
 */
export async function getUUIDLocal(params: string) {
  const locales = await getLocales();

  const localData = locales.filter(
    (local: any) => local.node.value === params.toUpperCase()
  );
  return localData[0].node.id;
}

export const getLocal = cache(async (params: string) => {
  const locales = await getLocales();

  const localData = locales.filter(
    (local: any) => local.node.value === params.toUpperCase()
  );
  return localData[0].node.id;
});

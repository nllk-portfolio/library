import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

const getPosts = async () => {
  const response = await client.getEntries({
    content_type: "post",
  });

  console.log(response.items);
  return response.items;
};

export default getPosts;
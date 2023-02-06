import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import  PreviewSuspense  from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
*[_type=='post']{
    ...,
    author ->,
    categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 30

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#CBB7F2]">
              Chargement des données de la prévisualisation...
            </p>
          </div>
        }>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  console.log(posts);

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}

// import { previewData } from "next/headers";

// export default function HomePage() {
// if(previewData()) {
//     return (
//         <div>Preview mode"</div>
//     )
// }

// return (
//     <h1>Not preview mode</h1>
// )
// }
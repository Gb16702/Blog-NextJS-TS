import post from "../schemas/post";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#CBB7F2] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((item) => (
          <ClientSideRoute
            key={item._id}
            route={`/post/${item.slug.current}`}>
            <div
              key={item._id}
              className="overflow-hidden group cursor-pointer flex flex-col">
              <div className="relative w-full h-80 drop-shadow-xl">
                <Image
                  src={urlFor(item.mainImage).url()}
                  alt={item.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="">
                      {new Date(item._createdAt).toLocaleDateString(
                        "fr-FR",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {item.categories.map((category) => (
                      <div className="bg-[#CBB7F2] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <h1>{item.title}</h1>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">
                  {item.title}
                </p>
                <p className="text-gray-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
              <p className="flex font-bold mt-5 items-center group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="w-4 h-4 ml-2" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;

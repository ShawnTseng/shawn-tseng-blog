import { IPost, getSortedPostsData } from "@/lib/posts";
import Post from "./_components/Post";
import prisma from "../lib/prisma";

export default async function Home() {
  const allPostsData: Array<IPost> = getSortedPostsData();
  // const posts = await prisma.post.findMany({
  //   where: { published: true }
  // });
  // const posts: Array<any> = [];
  return (
    <main>
      {/* {posts.map((post) => (
        <div key={post.id} className="bg-white transition-shadow hover:shadow-md mb-8">
          <Post post={post} />
        </div>
      ))} */}
      {allPostsData && allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          {title}
          <br />
          <div>
            id: {id}
          </div>
          <br />
          {date}
        </li>
      ))}
    </main>
  )
}
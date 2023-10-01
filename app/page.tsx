import Post from "./components/Post";
import prisma from "../lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { published: true }
  });
  return (
    <main>
      {posts.map((post) => (
        <div key={post.id} className="bg-white transition-shadow hover:shadow-md mb-8">
          <Post post={post} />
        </div>
      ))}
    </main>
  )
}

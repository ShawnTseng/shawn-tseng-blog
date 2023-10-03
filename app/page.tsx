import { IPost, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const allPostsData: Array<IPost> = getSortedPostsData();
  return (
    <main>
      {allPostsData && allPostsData.map(({ id, date, title }) => (
        <Link href={`/posts/${id}`}>
          <li key={id}>
            {title}
            <br />
            <div>
              id: {id}
            </div>
            <br />
            {date}
          </li>
        </Link>
      ))}
    </main>
  )
}
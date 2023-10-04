import { IPost, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Date from './_components/Date';

export default async function Home() {
  const allPostsData: Array<IPost> = getSortedPostsData();
  return (
    <main>
      {allPostsData && allPostsData.map(({ id, date, title }) => (
        <article className="m-4" key={id}>
          <Link href={`/posts/${id}`}>
            <h1>{title}</h1>
          </Link>
          <small>
            <Date dateString={date} />
          </small>
        </article>
      ))}
    </main>
  )
}
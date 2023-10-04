import { IPost, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Date from './_components/Date';

export default async function Home() {
  const allPostsData: Array<IPost> = getSortedPostsData();
  return (
    <main>
      {allPostsData && allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}>
            {title}
          </Link>
          <br />
          <small>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </main>
  )
}
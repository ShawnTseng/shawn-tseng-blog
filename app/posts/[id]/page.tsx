import { getPostData } from "@/lib/posts";
import Date from '../../_components/Date';
import { Metadata } from "next";
import Link from "next/link";
import Markdown from 'react-markdown';

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
    const id = params.id;
    const postData = await getPostData(id);
    return {
        title: `Shawn Tseng - ${postData?.title}`,
    };
};

export default async function Post({ params }: { params: { id: string } }) {
    const id = params.id;
    const postData2 = await getPostData(id);
    return <>
        <Link href='/' className="m-4">Back</Link>
        {postData2 ?
            <>
                <h1 className="m-4">{postData2.title}</h1>
                <small className="m-4">
                    <Date dateString={postData2.date} />
                </small>
                <article className="m-4">
                    <Markdown linkTarget="_blank">
                        {postData2.contentHtml}
                    </Markdown>
                </article>
            </> :
            <></>
        }
    </>;
}
import { getPostData } from "@/lib/posts";
import Date from '../../_components/Date';
import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
    const id = params.id;
    const postData = await getPostData(id);
    return {
        title: `Shawn Tseng - ${postData?.title}`,
    };
};

export default async function Post({ params }: { params: { id: string } }) {
    const id = params.id;
    const postData = await getPostData(id);
    return <>
        <Link href='/' className="m-4">Back</Link>
        {postData ?
            <>
                <h1 className="m-4">{postData.title}</h1>
                <small className="m-4">
                    <Date dateString={postData.date} />
                </small>
                <article className="m-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </> :
            <></>
        }
    </>;
}
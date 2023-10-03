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
        <Link href='/'>Back</Link>
        {postData ?
            <>
                {postData.title}
                <br />
                {postData.id}
                <br />
                <Date dateString={postData.date} />
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </> :
            <></>
        }
    </>;
}
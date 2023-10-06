import { getPostData } from "@/lib/posts";
import Date from '../../_components/Date';
import { Metadata } from "next";
import Link from "next/link";
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
    const id = params.id;
    const postData = await getPostData(id);
    return {
        title: `Shawn TSENG - ${postData?.title}`,
    };
};

export default async function Post({ params }: { params: { id: string } }) {
    const id = params.id;
    const postData = await getPostData(id);

    const h1WithId = (props: any) => {
        const title = props.children;
        return <h1 id={title}>{title}</h1>
    }

    const h2WithId = (props: any) => {
        const title = props.children;
        return <h2 id={title}>{title}</h2>
    }

    const h3WithId = (props: any) => {
        const title = props.children;
        return <h3 id={title}>{title}</h3>
    }

    return <div className="flex justify-center">
        <div className="max-w-7xl mb-96">
            <Link href='/' className="my-4">Back</Link>
            {postData ?
                <>
                    <h1 className="my-4">{postData.title}</h1>
                    <small className="my-4">
                        <Date dateString={postData.date} />
                    </small>
                    <article className="my-4">
                        <Markdown
                            components={{ h1: h1WithId, h2: h2WithId, h3: h3WithId }}
                            rehypePlugins={[rehypeRaw as any]}>
                            {postData.contentHtml}
                        </Markdown>
                    </article>
                    <div className="mt-20">
                        標籤:
                        {postData.tags ? postData.tags.map(tag => (
                            <span className="inline-block m-2 p-2 rounded-sm bg-sky-300 cursor-pointer">{tag}</span>
                        )) :
                            <></>
                        }
                    </div>
                    <div>
                        筆者: Shawn TSENG
                    </div>
                </> :
                <></>
            }
        </div>
    </div>;
}
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const postData: IPost = { id, ...matterResult.data } as any;

        // Combine the data with the id
        return postData;
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(id: string) {
    try {
        const fullPath = path.join(postsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const contentHtml = matterResult.content;

        const postData: IPost = {
            id,
            contentHtml,
            ...matterResult.data
        } as any;

        // Combine the data with the id
        return postData;
    } catch (error) {
        return null;
    }
}

export interface IPost {
    id: string;
    title: string;
    date: string;
    tags: Array<Tag>;
    contentHtml: string;
}

enum Tag {
    Web3,
    CoinMarketCap,
    非技術
}
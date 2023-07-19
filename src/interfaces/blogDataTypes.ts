export interface FrontMatter {
    title?: string;
    author?: string;
    publishTime?: string;
    tags?: string[];
}

export interface Blog {
    frontMatter: FrontMatter;
    content: string;
}

export interface Post {
    name: string;
    path: string;
    texts: string;
    frontMatter: FrontMatter;
}

export interface BlogTable {
    tableName: string;
    blogList: Post[];
}

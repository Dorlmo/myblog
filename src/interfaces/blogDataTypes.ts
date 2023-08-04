export interface FrontMatter {
    title?: string;
    index?: number;
    publishTime?: string;
    tags?: string[];
}

export interface Blog {
    frontMatter: FrontMatter;
    content: string;
}

export interface BlogRecord {
    name: string;
    index?: number;
    path: string;
}
export interface BlogTable {
    name: string;
    blogList: BlogRecord[]
}

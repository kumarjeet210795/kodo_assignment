import Post from "../models/post.model";


export default function paginatePosts(page: number, pageSize: number,posts: Post[],): {
    totalCount: number;
    totalPages: number;
    results: Post[];
  } {
    const totalCount = posts.length;
    const totalPages = Math.ceil(totalCount / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const results = posts.slice(startIndex, endIndex);
  
    return {
      totalCount,
      totalPages,
      results,
    };
  }
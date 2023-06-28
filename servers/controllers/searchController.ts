import Post from "../models/post.model";

export default function searchPostsValue(searchTerm: string,post:Post[] ):Post[] {
    if (!searchTerm) {
        return post; // Return all posts if no search term provided
    }

    const exactMatch = searchTerm.match(/"([^"]+)"/);
    if (exactMatch) {
        const phrase = exactMatch[1];
        return post.filter(
            (post) => post.name.includes(phrase) || post.description.includes(phrase)
        );
    }

    const keywords = searchTerm.toLowerCase().split(" ");
    return post.filter((post) =>
        keywords.every(
            (keyword) =>
                post.name.toLowerCase().includes(keyword) ||
                post.description.toLowerCase().includes(keyword)
        )
    );
}
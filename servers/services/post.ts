import { Express, Request, Response, NextFunction } from "express";
import { post } from '../data'
import paginatePosts from "../controllers/paginationController";
import searchPostsValue from "../controllers/searchController";
import sortPostsValue from "../controllers/sortController";
import Post from "../models/post.model";



const allApiPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchTerm = req.query.stringData || "";
        const sortBy = req.query.sortData || "";
        const page:number = parseInt(req.query.page as string) || 1;
        const pageNumber:number = parseInt(req.query.pageNumber as string) || 10;

        var filteredPosts:Post[] = searchPostsValue(searchTerm as string,post);
        // console.log('18',filteredPosts)
        filteredPosts = sortPostsValue(sortBy as string,filteredPosts);
        // console.log('19',filteredPosts)

        const paginatedPosts = paginatePosts (page, pageNumber,filteredPosts);

        // console.log('22',filteredPosts)

        res.status(200).json({
            message: paginatedPosts
        });

    } catch (e) {
        res.status(403).send({ msg: `Something went wrong. Please try again later :- ${e} ` })
    }

};

export default { allApiPost };
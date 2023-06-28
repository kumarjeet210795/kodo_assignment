import { Express, Request, Response, NextFunction } from "express";
import searchPostsValue from "../controllers/searchController";
import { post } from '../data'


const searchPost = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let data = await searchPostsValue(req.query.stringData as string , post);

        res.status(200).json({
            message: data
        });

    } catch (e) {
        res.status(403).send({ msg: `Something went wrong. Please try again later :- ${e} ` })
    }

};

export default { searchPost };
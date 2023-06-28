import { Express, Request, Response, NextFunction } from "express";
import paginationPostsValue from "../controllers/paginationController";
import { post } from '../data'



const paginationPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page: number = parseInt(req.query.page as string);
        const pageNumber: number = parseInt(req.query.pageNumber as string);

        let data = await paginationPostsValue( page, pageNumber, post);

        res.status(200).json({
            message: data
        });

    } catch (e) {
        res.status(403).send({ msg: `Something went wrong. Please try again later :- ${e} ` })
    }

};

export default { paginationPost };
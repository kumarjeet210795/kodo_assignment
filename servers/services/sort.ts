import { Express, Request, Response, NextFunction } from "express";
import sortPostsValue from "../controllers/sortController";
import { post } from '../data'


const sortPost = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let sortBody: string = req.query.sortData as string
        if (typeof sortBody === "string") {
            let data = await sortPostsValue(sortBody, post);
            res.status(200).json({
                message: data
            });
        } else {
            res.status(404).send({ msg: "Please provide correct parameter" })
        }

    } catch (e) {
        //forbidden for time being I give it here.
        res.status(403).send({ msg: e })
    }
};

export default { sortPost };
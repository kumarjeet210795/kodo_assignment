"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paginationController_1 = __importDefault(require("../controllers/paginationController"));
const data_1 = require("../data");
const paginationPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page);
        const pageNumber = parseInt(req.query.pageNumber);
        let data = yield (0, paginationController_1.default)(page, pageNumber, data_1.post);
        res.status(200).json({
            message: data
        });
    }
    catch (e) {
        res.status(403).send({ msg: `Something went wrong. Please try again later :- ${e} ` });
    }
});
exports.default = { paginationPost };

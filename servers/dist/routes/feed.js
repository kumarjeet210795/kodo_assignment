"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const search_1 = __importDefault(require("../services/search"));
const sort_1 = __importDefault(require("../services/sort"));
const pagination_1 = __importDefault(require("../services/pagination"));
const post_1 = __importDefault(require("../services/post"));
const router = express_1.default.Router();
router.get('/searchPost', search_1.default.searchPost);
router.get('/sortPost', sort_1.default.sortPost);
router.get('/pagination', pagination_1.default.paginationPost);
router.get('/post', post_1.default.allApiPost);
exports.default = router;

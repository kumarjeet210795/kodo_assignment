"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { post } from '../data'
const searchController_1 = __importDefault(require("../controllers/searchController"));
const sortController_1 = __importDefault(require("../controllers/sortController"));
const paginationController_1 = __importDefault(require("../controllers/paginationController"));
describe('Feed API', () => {
    const post = [
        {
            "name": "Chief Brand Orchestrator Infrastructure",
            "image": "https://picsum.photos/640/480",
            "description": "Doloremque consequatur expedita excepturi dolores debitis. Aperiam illum dolorum officia officia consequatur sint reiciendis. Ut veniam eos nam vel. Beatae sit qui tenetur. Fugit illum cum. Vitae cupiditate maiores aut pariatur corporis.",
            "dateLastEdited": "2017-10-15T21:10:51.560Z"
        },
        {
            "name": "Lead Solutions Junior Engineer",
            "image": "https://picsum.photos/640/480",
            "description": "Facere ducimus facilis molestiae. Pariatur optio hic pariatur velit accusamus. Fugit ratione blanditiis delectus. Architecto dolor omnis. Minima reiciendis eos quos. Quis tempore libero sed odit animi vitae enim porro eos.",
            "dateLastEdited": "2017-10-16T22:16:25.514Z"
        },
    ];
    describe('searchPosts', () => {
        test('should return all posts when no search term provided', () => {
            const searchTerm = '';
            const result = (0, searchController_1.default)(searchTerm, post);
            expect(result).toEqual(post);
        });
        test('should return posts containing the search term', () => {
            const searchTerm = 'Infrastructure';
            const result = (0, searchController_1.default)(searchTerm, post);
            expect(result).toEqual([post[0]]);
        });
        test('should support exact match when search term contains a phrase within double quotes', () => {
            const searchTerm = "Junior";
            const result = (0, searchController_1.default)(searchTerm, post);
            expect(result).toEqual([post[1]]);
        });
    });
    describe('sortPosts', () => {
        test('should sort posts by name', () => {
            const sortBy = 'name';
            const result = (0, sortController_1.default)(sortBy, post);
            expect(result).toEqual([post[0], post[1]]);
            // 
        });
        test('should sort posts by dateLastEdited', () => {
            const sortBy = 'dateLastEdited';
            const result = (0, sortController_1.default)(sortBy, post);
            expect(result).toEqual([post[0], post[1]]);
            // [post[0], post[1]]
        });
        test('should default to sort posts by name if invalid sortBy parameter provided', () => {
            const sortBy = 'invalid';
            const result = (0, sortController_1.default)(sortBy, post);
            expect(result).toEqual(post);
        });
    });
    describe('paginatePosts', () => {
        test('should paginate posts based on page and pageSize', () => {
            const page = 2;
            const pageSize = 1;
            const result = (0, paginationController_1.default)(page, pageSize, post);
            expect(result.totalCount).toBe(post.length);
            expect(result.totalPages).toBe(Math.ceil(post.length / pageSize));
            expect(result.results).toEqual([post[1]]);
        });
    });
});

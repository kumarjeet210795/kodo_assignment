"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function paginatePosts(page, pageSize, posts) {
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
exports.default = paginatePosts;

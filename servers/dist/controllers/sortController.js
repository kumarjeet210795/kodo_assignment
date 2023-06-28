"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortPostsValue(sortBy, posts) {
    if (sortBy == "name") {
        return posts.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === "dateLastEdited") {
        // console.log('7',posts.sort((a, b) => new Date(a.dateLastEdited)- new Date(b.dateLastEdited)))
        // return ;
        return posts.sort((a, b) => new Date(a.dateLastEdited).getTime() - new Date(b.dateLastEdited).getTime());
    }
    // Default sort by post name if invalid sortBy parameter provided
    return posts.sort((a, b) => a.name.localeCompare(b.name));
    // return []
}
exports.default = sortPostsValue;

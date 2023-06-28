// import { post } from '../data'
import searchPostsValue from '../controllers/searchController'
import sortPostsValue from '../controllers/sortController';
import paginatePosts from '../controllers/paginationController';


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
  ]

  describe('searchPosts', () => {
    test('should return all posts when no search term provided', () => {
      const searchTerm = '';
      const result = searchPostsValue(searchTerm, post);
      expect(result).toEqual(post);
    });

    test('should return posts containing the search term', () => {
      const searchTerm = 'Infrastructure';
      const result = searchPostsValue(searchTerm, post);
      expect(result).toEqual([post[0]]);
    });

    test('should support exact match when search term contains a phrase within double quotes', () => {
      const searchTerm = "Junior";
      const result = searchPostsValue(searchTerm, post);
      expect(result).toEqual([post[1]]);
    });
  });

  describe('sortPosts', () => {
    test('should sort posts by name', () => {
      const sortBy = 'name';
      const result = sortPostsValue(sortBy, post);
      expect(result).toEqual([post[0], post[1]]);
      // 
    });

    test('should sort posts by dateLastEdited', () => {
      const sortBy = 'dateLastEdited';
      const result = sortPostsValue(sortBy, post);
      expect(result).toEqual([post[0], post[1]]);
      // [post[0], post[1]]
    });

    test('should default to sort posts by name if invalid sortBy parameter provided', () => {
      const sortBy = 'invalid';
      const result = sortPostsValue(sortBy, post);
      expect(result).toEqual(post);
    });
  });

  describe('paginatePosts', () => {
    test('should paginate posts based on page and pageSize', () => {
      const page = 2;
      const pageSize = 1;
      const result = paginatePosts(page,pageSize,post);
      expect(result.totalCount).toBe(post.length);
      expect(result.totalPages).toBe(Math.ceil(post.length / pageSize));
      expect(result.results).toEqual([post[1]]);
    });
  });

});
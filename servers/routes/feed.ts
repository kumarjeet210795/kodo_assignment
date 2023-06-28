import express from 'express';
import services from '../services/search';
import sortService from '../services/sort';
import pagination from '../services/pagination';
import post from '../services/post';
const router = express.Router();



router.get('/searchPost', services.searchPost);
router.get('/sortPost', sortService.sortPost);
router.get('/pagination', pagination.paginationPost);
router.get('/post', post.allApiPost);



export default router;

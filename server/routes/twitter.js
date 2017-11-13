import express from 'express';
import twitter from 'twitter';

//importing controller
import * as twitterController from '../controllers/twitter';

const router = express.Router();

//routes to manage favourite list
router.get('/favourite', twitterController.getFavouriteList);

router.post('/favourite', twitterController.addFavouriteList);

router.delete('/favourite/:id', twitterController.deleteFavouriteList);


//routes to manage twitts
router.get('/timeline', (req, res, next)=>{
  res.send('Get twitt');
});

router.post('/timeline', (req, res, next)=>{
  res.send('Post fav');
});

export default router;
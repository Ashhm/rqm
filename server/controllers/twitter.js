import Twitter from 'twitter';
import {
  TWITTER_CONSUMER_KEY        as consumer_key,
  TWITTER_CONSUMER_SECRET     as consumer_secret,
  TWITTER_ACCESS_TOKEN        as access_token_key,
  TWITTER_ACCESS_TOKEN_SECRET as access_token_secret
} from '../config/keys.json';

//creating twitter client
const client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
});

//following: https://api.twitter.com/1.1/friends/list.json
//follow: https://api.twitter.com/1.1/friendships/create.json
//unfollow: https://api.twitter.com/1.1/friendships/destroy.json
//query: skip_status=true&include_user_entities=false

//filter users array
const filter = (keys, data) => {
  return data.map(entry => {
    return Object.keys(entry).reduce((object, key) => {
      if(keys.indexOf(key) > -1) {
        object[key] = entry[key];
      }
      return object;
    }, {})
  });
};

//params is a query string for req and key are fields we need

//get followers list
export const getFavouriteList = (req, res, next) => {
  const params = {
    skip_status: true,
    include_user_entities: false
  };

  const keys = [
    'id',
    'name',
    'url',
    'description',
    'followers_count',
    'profile_background_image_url',
    'profile_image_url'
  ];

  client.get('friends/list.json', params, (err, data, response) => {
    if (err) {
      next(err);
    }
    const list = data.users;

    res.send(list ? filter(keys, list) : []);
  });
};

//add followers list
export const addFavouriteList = (req, res, next) => {
  const params = {
    user_id: req.params.id,
    follow: true
  };

  client.post('friendships/create.json', params, (err, tweets, response) => {
    if (!err) {
      res.send(tweets);
    }
  });
};

//delete followers list
export const deleteFavouriteList = (req, res, next) => {
  const params = {user_id: req.params.id};

  client.post('friendships/destroy.json', params, (err, tweets, response) => {
    if (!err) {
      res.send(tweets);
    }
  });
};

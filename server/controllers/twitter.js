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
//tweets: https://api.twitter.com/1.1/statuses/home_timeline.json

//filter response: recursive write result for each entry
const objectify = (filter, data) => {
  return data.map(entry => {
    return Object.keys(filter).reduce((result, key) => {
      if(filter[key]) {
        //entry could be undefined
        if(!entry[key]){
          return result;
        }
        //entry can be array or object
        const isArray = Array.isArray(entry[key]);

        result[key] = isArray ?
          objectify(filter[key], entry[key]) : objectify(filter[key], [entry[key]])[0];

        return result;
      }
      result[key] = entry[key];
      return result;
    }, {})
  })


};

//params is a query string for req and key are fields we need

//get followers list
export const getFavouriteList = (req, res, next) => {
  const params = {
    skip_status: true,
    include_user_entities: false
  };

  const filter = {
    id: null,
    name: null,
    url: null,
    description: null,
    followers_count: null,
    profile_background_image_url: null,
    profile_image_url: null
  };

  client.get('friends/list.json', params, (err, {users}, response) => {
    if (err) {
      next(err);
    }

    res.send(users ? objectify(filter, users) : []);
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

//get timeline tweets
//since_id: tweets greater than ID
//max_id: tweets less than ID
export const getTimelineTweets = (req, res, next) => {
  const params = {
    count: 10,
    trim_user: true,
    exclude_replies: false
  };

  if (req.params.lastID) {
    params.max_id = req.params.lastID;
  }

  const filter = {
    created_at: null,
    id: null,
    text: null,
    source: null,
    retweet_count: null,
    favorite_count: null,
    favorited: null,
    retweeted: null,
    entities: {
      hashtags: null,
      symbols: null,
      urls: {
        url: null,
        display_url: null
      },
      media: {
        id: null,
        media_url: null,
        display_url: null,
        type: null
      }
    },
    user: {
      id: null
    }

};

  client.get('statuses/home_timeline.json', params, (err, data, response) => {
    if (err) {
      next(err);
    }

    res.send(data ? objectify(filter, data) : []);
  });
};
import superagent from 'superagent';
import noCache from 'superagent-no-cache';
import prefix from 'superagent-prefix';
import useAgent from 'superagent-use';

const agent = useAgent(superagent);

//setup no-cache and prefix for all requests
agent.use(prefix('http://localhost:3000'));
agent.use(noCache);

export const getFavouriteList = function() {
  return agent.get('/twitter/favourite');
};

export const addFavouriteList = function(id) {
  return agent.post(`/twitter/favourite/${id}`);
};

export const delFavouriteList = function(id) {
  return agent.del(`/twitter/favourite/${id}`);
};


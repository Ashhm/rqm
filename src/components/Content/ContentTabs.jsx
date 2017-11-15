import React from 'react';
import PropTypes from 'prop-types';
import {Card, Button} from 'antd';


class ContentTabs extends React.Component {
  static propTypes = {};

  render() {
    const refreshButton = <Button itype='dashed' shape='circle' icon='reload'/>;
    const retweetButton = <Button itype='dashed' shape='circle' icon='retweet'/>;
    const likeButton =<Button itype='dashed' shape='circle' icon='like-o'/>;

    function linkify(text, urls) {
      return text.split(' ').map(word => {
        const urlInside = urls.some(({url}) => {
          return url === word;
        });

        return urlInside ? <a>{word}</a> : word;
      })
    }

    return (
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {this.props.items.map(item => {
          const {created_at, id, text, retweet_count, favourite_count, favourited, retweeted, entities, user} = item;
          const {hashtags, symbols, urls, media} = entities;
          const user_id = user.id;
          if(urls) console.log(linkify(text, urls));



          return (
            <Card key ={id} style={{width: '20%', height: '300px', padding: 0}}>
              {media && media.type === 'photo' && <img src={media.media_url} style={{width: '100%'}} alt=""/>}
              <p style={{padding: '5px', wordWrap: 'wrap'}}>{urls ? linkify(text, urls) : text}</p>
              {retweetButton}{likeButton}
            </Card>)
        })}
      </div>
    )
  }
}

export default ContentTabs;
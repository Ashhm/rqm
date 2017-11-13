import React from 'react';
import {Avatar, Button} from 'antd';

import './Favourites.less';

class FavouriteItem extends React.Component {

  render() {
    const {
      name,
      url,
      description, profile_image_url
    } = this.props.data;

    return (
      <div className='Favourites___item'>
        <Avatar
          src={profile_image_url}
          alt={`Avatar for ${name}`}
        />
        <span title={description}>{name}</span>
        <Button size='small' shape='circle' icon='link' ghost />
        <Button size='small' shape='circle' icon='close' ghost />
      </div>
    )
  }
}

export default FavouriteItem;
import React from 'react';
import {Tabs, Button} from 'antd';
import FavouriteItem from './FavouriteItem';

const TabPane = Tabs.TabPane;

import './Favourites.less';

class Favourites extends React.Component {

  render() {
    const {tags} = this.props;
    const addButton = <Button itype='dashed' shape='circle' icon='plus' ghost/>;
    return (
      <div className='Favourites___main'>
        <Tabs
          defaultActiveKey='1'
          tabPosition='top'
          animated={true}
          tabBarExtraContent={addButton}
          type='line'
        >
          {tags.map(item => {
            return (
              <TabPane
                key={item.id}
                tab={<FavouriteItem data={item} />}
              >
              </TabPane>)
          })}
        </Tabs>
      </div>
    )
  }
}

export default Favourites;
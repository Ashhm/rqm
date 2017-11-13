import React from 'react';
import PropTypes from 'prop-types';

//importing components
import Favourites from '../Favourites/Favourites';
import {PropagateLoader} from 'react-spinners';

import './Header.less';


class HeaderComponent extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.onLoad();
  }


  render() {
    const {isFetching, isError, items} = this.props;

    return (
      <div className='Header___main'>
        <PropagateLoader
          color={'#6158ff'}
          size={25}
          loading={isFetching}
        />
        {
          !isFetching && items && <Favourites tags={items} />
        }

      </div>
    )
  }
}

export default HeaderComponent;
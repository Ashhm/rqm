import React from 'react';
import PropTypes from 'prop-types';
import ContentTabs from './ContentTabs';


class ContentComponent extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const {items, isFetching} = this.props;

    return (
      <div>
        <ContentTabs
          items={items}
          loading={isFetching}
        />
      </div>
    )
  }
}

export default ContentComponent;
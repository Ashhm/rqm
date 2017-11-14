import { connect } from 'react-redux'

//importing components
import ContentComponent from '../components/Content/Content';

//importing actions
import { fetchTimeline } from '../actions/index';

const mapStateToProps = state => {
  return state.tweets;
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: (lastID) => {
      dispatch(fetchTimeline(lastID));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentComponent);

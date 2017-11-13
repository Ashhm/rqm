import { connect } from 'react-redux'

//importing components
import HeaderComponent from '../components/Header/Header';

//importing actions
import { fetchFavourites } from '../actions/index';

const mapStateToProps = state => {
  return state.favourite;
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: (group) => {
      dispatch(fetchFavourites(group));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

import { connect } from 'react-redux';
import CoverPhotoForm from './cover_photos_form';
import { updateUserPhotos } from '../../actions/session_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    updateUserPhotos: (user) => dispatch(updateUserPhotos(user))
})

export default connect(mSTP, mDTP)(CoverPhotoForm)
// imprto npm
import { connect } from 'react-redux';

// import
import RestaurantProfile from 'src/components/RestaurantProfile';
import { changeRestaurantProfileInputValue, editRestaurant } from 'src/actions/user';

const mapStateToProps = (state) => ({
  restaurantName: state.user.restaurantProfileEditInput.restaurantName,
  address: state.user.restaurantProfileEditInput.address,
  postcode: state.user.restaurantProfileEditInput.postcode,
  city: state.user.restaurantProfileEditInput.city,
  country: state.user.restaurantProfileEditInput.country,
  phone: state.user.restaurantProfileEditInput.phone,
  newPass: state.user.restaurantProfileEditInput.newPass,
  newPassConfirmation: state.user.restaurantProfileEditInput.newPassConfirmation,
  actualPass: state.user.restaurantProfileEditInput.actualPass,
});

const mapDispatchToProps = (dispatch) => ({
  changeRestaurantProfileInputValue: (newValue, fieldName) => {
    dispatch(changeRestaurantProfileInputValue(newValue, fieldName));
  },
  handleRestaurantEdit: () => {
    dispatch(editRestaurant());
  },
});

// export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantProfile);

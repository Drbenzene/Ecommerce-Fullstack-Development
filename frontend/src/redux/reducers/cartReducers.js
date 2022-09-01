import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  EMPTY_CART,
  GET_ALL_CART_ITEMS,
} from "../constants/cartConstant";
import Swal from "sweetalert2";
import {
  loadFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  cartTotal: 0,
  error: false,
};

const cusAlert = async (message, theIcon) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  await Toast.fire({
    icon: `${theIcon}`,
    title: `${message}`,
  });

  return Toast;
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let existingCartItem = loadFromLocalStorage("cartItems");

      if (existingCartItem === null || existingCartItem.length === undefined) {
        cusAlert("Product Added Successfully", "success");
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
            totalPrice: state.totalPrice + parseFloat(action.payload.price),
            cartTotal: Number(state.cartTotal + 1),
          };
      }

          let existingCartItemFind = existingCartItem.find((cartItem) => cartItem.id === action.payload.id);

          if (existingCartItemFind){
            cusAlert("Product Already Added", "error");
            return {
              ...state,
              ...state,
              exist: true,
              inCart: action.payload.id,
              error: true,
            };
          }


      cusAlert("Item Added To Cart Successfully", "success");
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + parseFloat(action.payload.price),
        cartTotal: Number(state.cartTotal + 1),
      };

    case REMOVE_FROM_CART:
      cusAlert("Item Removed from Cart", "success");
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        totalPrice: state.totalPrice - parseFloat(action.payload.price),
        cartTotal: Number(state.cartTotal - 1),
      };
    case UPDATE_CART:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          } else {
            return item;
          }
        }),
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };
    case GET_ALL_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;

import createStore from "unistore";

var totalCart
if (localStorage.getItem('cart_value') === null) {
  totalCart = 0
} else {
  totalCart = localStorage.getItem('cart_value')
}

// Checking local storage for cart list
var productInCart;
if (localStorage.getItem('productInCart') === null) {
  productInCart = require("./json/cartList.json");
} else {
  productInCart = localStorage.getItem("productInCart");
}

const initialState = {
  filter_payment: "Semua Status",
  username: "",
  emailReset: "",
  // Prouct list related props
  productListWithImage: [],
  isPerdanaSegel: false,
  isPerdanaPaketData: false,
  isVoucherData: false,
  locationSearch: "",
  // Checkout related
  checkoutLocation: "",
  postalCode: "",
  cartValue: totalCart,
  productInCart: productInCart,
  shippingPrice: 10000,
  discount: 0
};

export const store = createStore(initialState);

export const actions = store => ({
  handleSetGlobal: (state, event) => {

    store.setState({
      [event.target.name]: event.target.value
    })

  },

});
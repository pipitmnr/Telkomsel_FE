import createStore from "unistore";
var totalCart
if (localStorage.getItem('cart_value') === null) {
  totalCart = 0
} else {
  totalCart = localStorage.getItem('cart_value')
}

const initialState = {
  filter_payment: "Semua Status",
  filter_kluster: "Semua Kluster",
  username: "",
  emailReset: "",
  // Prouct list related props
  productListWithImage: [],
  isPerdanaSegel: false,
  isPerdanaPaketData: false,
  isVoucherData: false,
  locationSearch: "",
  cartValue: totalCart
};

export const store = createStore(initialState);

export const actions = store => ({
  handleSetGlobal: (state, event) => {

    store.setState({
      [event.target.name]: event.target.value
    })

  },

});
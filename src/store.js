import createStore from "unistore";


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
  locationSearch: ""
};

export const store = createStore(initialState);

export const actions = store => ({
  handleSetGlobal: (state, event) => {
                
    store.setState({ [event.target.name]: event.target.value })
    
  },
 
});
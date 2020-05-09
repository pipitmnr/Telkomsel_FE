import createStore from "unistore";


const initialState = {
  filter_payment:"Semua Jenis",
  filter_kluster:"Semua Kluster",
  username:"",

  // Prouct list related props
  productListWithImage: [],
  isPerdanaSegel: false,
  isPerdanaPaketData: false,
  isVoucherData: false
};

export const store = createStore(initialState);

export const actions = store => ({

});
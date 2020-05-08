import createStore from "unistore";


const initialState = {
  filter_payment:"Semua Jenis",
  filter_kluster:"Semua Kluster",
  username:""
};

export const store = createStore(initialState);

export const actions = store => ({

});
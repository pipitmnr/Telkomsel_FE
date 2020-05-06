import createStore from "unistore";

const initialState = {filter_payment:"Semua Jenis",
filter_kluster:"Semua Kluster"
};

export const store = createStore(initialState);

export const actions = store => ({
  
});
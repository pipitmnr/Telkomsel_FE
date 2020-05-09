import createStore from "unistore";
// import data from "../src/data/produk.json"

const initialState = {
  filter_payment:"Semua Jenis",
  filter_kluster:"Semua Kluster",
  username:""
};

export const store = createStore(initialState);

export const actions = store => ({
  handleSetGlobal: (state, event) => {
                
    store.setState({ [event.target.name]: event.target.value })
    
  },
 
});
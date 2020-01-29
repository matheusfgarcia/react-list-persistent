import {createStore} from "redux"
import { loadState,saveState } from "../components/LocalStorage/index"

const INITIAL_STATE = {
  data: [
    
  ]
}

function items(state = INITIAL_STATE, action){
  switch(action.type){
    case "ADD_ITEM":

      let exists = state.data.filter((item) => {
        return item.name === action.name;
      })

      let _state = state;

      console.log(exists.length );

      if(exists.length == 0 ){
        _state = { ...state, data: [...state.data , { name: action.name }]};
      }else{
        alert("Exists!");
      }
        
      return _state;
    default:
      return state;
  }
}


const persistedState = loadState();
const store = createStore(items,persistedState);

store.subscribe(() => {
  saveState(store.getState());
})

export default store;

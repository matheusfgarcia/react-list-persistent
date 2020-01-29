import { Provider } from 'react-redux';
import store from ".././store/"

import ShoppingList from "./ShoppingList/index"

const App = () => {
  return (
    <Provider store={store}>
      <ShoppingList />
    </Provider>
  )
}

export default App;

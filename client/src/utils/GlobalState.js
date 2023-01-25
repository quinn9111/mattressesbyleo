import React, { createContext, useContext } from "react";
import { useMattressReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useMattressReducer({
    mattresses: [],
    cart: [],
    cartOpen: false,
    vendors: [],
    currentVendor: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

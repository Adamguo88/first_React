import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer/reducer";
import data from "./data/food";
const AppContext = React.createContext(null);
const url = "http://localhost:5000/result";
// 初始資料

const ininalState = {
  logading: false,
  list: [],
  afterList: [],
  cart: [],
  cart_all_checkbox: false,
  nowMenu: [],
  total: 0,
  amount: 0,
  product: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, ininalState);

  // 請求測試產品數據;
  // const fetchData = async () => {
  //   dispatch({ type: "LOADING" });
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   dispatch({ type: "DISPLAY_ITEMS", payload: data });
  // };

  // 本機數據不用fetch
  const noFetch = () => {
    const result = data.result;
    dispatch({ type: "LOADING" });
    dispatch({ type: "DISPLAY_ITEMS", payload: result });
  };

  useEffect(() => {
    // fetchData();
    noFetch()
  }, []);

  // 換頁功能
  const filterItem = (type) => {
    dispatch({ type: "FILTER_ITEM", payload: type });
  };
  // 增加餐點
  const add = (id) => {
    dispatch({ type: "ADD", payload: id });
  };
  // 減少餐點
  const unCrease = (id) => {
    dispatch({ type: "UNCREASE", payload: id });
  };
  // 加入購物車
  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };
  // 監聽購物車。當購物車被新增或移除的時候，更新購物車的商品數量及價格
  useEffect(() => {
    dispatch({ type: "GET_TOTAL_AMOUNT" });
  }, [state.cart]);
  // ---------------以上都是菜單的功能
  // -------------------------------------
  // ---------------以下都是購物車的功能

  // 在購物車頁面新增數量
  const cartAdd = (id) => {
    dispatch({ type: "CART_ADD", payload: id });
  };
  // 在購物車頁面減少數量
  const cartUncrease = (id) => {
    dispatch({ type: "CART_UNCREASE", payload: id });
  };
  // 在購物車頁面刪除產品
  const careRemove = (id) => {
    dispatch({ type: "CARE_REMOVE", payload: id });
  };
  // 在購物車頁面確認那些產品要購買 checkbox
  const cartCheckBox = (id) => {
    dispatch({ type: "CART_CHECKBOX", payload: id });
  };
  const cartAllBuy = () => {
    dispatch({ type: "CART_ALL_BUY" });
  };
  // 監聽每一筆數據是否被更動，如果更動就需要重新所有產品價格、數量
  useEffect(() => {
    if (state.cart.length <= 0) return;
    else {
      dispatch({ type: "COUNT_TOTAL_PRICE" });
    }
  }, [state.cart, state.cart_all_checkbox]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        filterItem,
        add,
        unCrease,
        addToCart,
        cartAdd,
        cartUncrease,
        careRemove,
        cartCheckBox,
        cartAllBuy,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

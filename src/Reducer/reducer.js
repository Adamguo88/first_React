export default function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEMS":
      const getAllMenu = [
        "所有菜單",
        ...new Set(action.payload.map((item) => item.type)),
      ];
      return {
        ...state,
        list: action.payload,
        afterList: action.payload,
        loading: false,
        nowMenu: getAllMenu,
      };
    case "FILTER_ITEM":
      if (action.payload === "所有菜單") {
        // 當我在漢堡選單 +3 筆資料的時候 我需要把那三筆資料給帶回來，並且更新再原本的list選單上
        // 這樣的話當我再次回到 全部菜單的時候就可以得到原本在漢堡選單的數據
        const newList = state.list.map((obj) => {
          const getNewData = state.afterList.filter(
            (item) => item.id === obj.id
          );
          if (getNewData.length >= 1) {
            const { amount } = getNewData[0];
            return { ...obj, amount };
          }
          return obj;
        });

        return { ...state, afterList: newList, list: newList };
      }
      // 如果點其他菜單的時候，再把list的資料重新跑一遍，獲得新數據，這樣就不會有數據丟失的狀況

      const newMenu = state.list.filter((item) => item.type === action.payload);

      return { ...state, afterList: newMenu };
    case "ADD":
      // 先把當前顯示的資料拿出來新增
      const addAmount = state.afterList.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      // 把原本的List 比對 新增完畢的addAmount的資料，利用雙迴圈比對，如果有兩筆資料相同的ID的話，把新增完畢的資料更改至原本的List裡面，
      // 把afterList 和 list 更改為最新的資料
      const updatedList = state.list.map((updated) => {
        const getUpdatedData = addAmount.filter((now) => now.id === updated.id);
        if (getUpdatedData.length >= 1) {
          const { amount } = getUpdatedData[0];
          return { ...updated, amount };
        }
        return updated;
      });
      return { ...state, afterList: addAmount, list: updatedList };
    case "UNCREASE":
      // 先把刪除完畢的資料拿出來
      const remove = state.afterList.map((item) => {
        if (item.id === action.payload) {
          if (item.amount === 0) {
            return item;
          }
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      // 把更新完的資料更新到原本的 list 資料上面
      const updatedRemove = state.list.map((updated) => {
        const removeUpdatedData = remove.filter((now) => now.id === updated.id);
        if (removeUpdatedData.length >= 1) {
          const { amount } = removeUpdatedData[0];
          return { ...updated, amount };
        }
        return updated;
      });
      return { ...state, afterList: remove, list: updatedRemove };
    case "ADD_TO_CART":
      const addToCartData = state.afterList.find(
        (item) => item.id === action.payload
      );
      const findData = state.cart.find((item) => item.id === addToCartData.id);

      if (!findData && addToCartData.amount > 0) {
        return { ...state, cart: [addToCartData, ...state.cart] };
      }
      if (findData) {
        const updatedCart = state.cart.map((cart) => {
          if (cart.id === addToCartData.id) {
            return { ...cart, amount: addToCartData.amount + cart.amount };
          }
          return cart;
        });
        return { ...state, cart: updatedCart };
      }

      return state;
    case "CART_ADD":
      const cartAdd = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: cartAdd };
    case "CART_UNCREASE":
      const cartUncrease = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: cartUncrease };
    case "CARE_REMOVE":
      const cartRemove = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: cartRemove };
    case "CART_CHECKBOX":
      const control_checkbox = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isChecked: !item.isChecked };
        }
        return item;
      });
      return { ...state, cart: control_checkbox };
    case "CART_ALL_BUY":
      const checkbox_state = state.cart_all_checkbox;
      if (checkbox_state === false) {
        const all_buy = state.cart.map((item) => {
          return { ...item, isChecked: true };
        });
        return { ...state, cart: all_buy, cart_all_checkbox: true };
      }

      if (checkbox_state === true) {
        const cencel = state.cart.map((item) => {
          return { ...item, isChecked: false };
        });
        return { ...state, cart: cencel, cart_all_checkbox: false };
      }

      return state;
    case "COUNT_TOTAL_PRICE":
      // 監聽isChecked是true的數據，並且把它拿出來
      const cartData_true = state.cart.filter(
        (item) => item.isChecked === true
      );
      // 判斷是否使用者購買的東西的isChecked狀態是否都是true，如果是的話，把所有的產品價格和數量的計算一遍，
      // 如果不是的話只透過上面的cartDate_true把都是true的數據拿出去計算
      const userProduct = state.cart.every((item) => item.isChecked === true);
      // 當所有的數據都是true的話
      if (userProduct) {
        const cartData = state.cart.reduce(
          (cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemPrice = price * amount;

            cartTotal.price += itemPrice;
            cartTotal.amount += amount;
            return cartTotal;
          },
          { price: 0, amount: 0 }
        );
        const { price, amount } = cartData;
        const allProduct = state.cart.length;
        return {
          ...state,
          total: price,
          amount,
          product: allProduct,
          cart_all_checkbox: userProduct,
        };
      }
      // 當只有部分的數據是true的話
      if (!userProduct) {
        const new_CartData = cartData_true.reduce(
          (cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemPrice = price * amount;

            cartTotal.price += itemPrice;
            cartTotal.amount += amount;
            return cartTotal;
          },
          { price: 0, amount: 0 }
        );
        const { price, amount } = new_CartData;
        const allProduct = cartData_true.length;
        return {
          ...state,
          total: price,
          amount,
          product: allProduct,
          cart_all_checkbox: userProduct,
        };
      }
      return state;
    default:
      return state;
  }
}

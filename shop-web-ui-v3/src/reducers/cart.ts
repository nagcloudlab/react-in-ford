/**
 *
 * action(s)
 *
 *  - ADD_TO_CART
 *  - REMOVE_FROM_CART
 *  - UPDATE_QTY
 *  - CLEAR_CART
 *
 */

function cartReducer(state: Array<any> = [], action: any) {
  let { type, payload } = action;
  let { item, qty = 1 } = payload;

  switch (type) {
    case "ADD_TO_CART":
      let index = state.findIndex((i: any) => i.id === item.id);
      if (index === -1) {
        let cartLine = {
          item,
          qty: 1,
        };
        return [...state, cartLine];
      } else {
        return state;
      }

    case "REMOVE_FROM_CART":
      return state.filter((i: any) => i.id !== item.id);

    case "UPDATE_QTY":
      return state.map((line: any) => {
        if (line.item.id === item.id) {
          return { ...line, qty: line.qty + qty };
        }
        return line;
      });

    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export default cartReducer;

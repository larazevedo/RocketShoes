// state: estado anterior à alteração.
export default function cart(state = [], action) {
  // Switch garante que o reducer ouve somente a ação ADD TO CART
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    // Se não ouvir, deixa o estado do jeito q estava
    default:
      return state;
  }
}

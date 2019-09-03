import produce from 'immer';

// state: estado anterior à alteração.
export default function cart(state = [], action) {
  // Switch garante que o reducer ouve somente a ação ADD TO CART
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        // Verifica se o id do produto já está no carrinho
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        // Se existir,
        if (productIndex >= 0) {
          // Adiciona mais uma unidade daquele produto
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    // Se não ouvir, deixa o estado do jeito q estava
    default:
      return state;
  }
}

/*
  Immer: flexibilidade! Imutabilidade/Mutabilidade
  Consegue pegar nosso estado atual, modificar em cima de um rascunho e depois aplicar no estado

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    // Formatando o preço uma única vez no início.
    // Pra não colocar funções desnecessárias no render
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    // Dispatch: dispara uma action ao redux.
    const { dispatch } = this.props;

    // Quando dispara o dispatch, todos os reducers são ativados!
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#" /> 3
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);

/*
    Componente da Home: a partir do momento que conecta com o redux (usando o connect)
ele tem acesso a uma propriedade chamada DISPATCH.
    Esse dispatch é responsável por disparar as actions, que dizem pro redux que a gente quer
fazer alguma alteração no nosso estado.
    Na ação, obrigatoriamente, se passa um type.
    Todos os reducers ouvem todas as actions, por isso a necessidade de usar um switch.
    Nesse exemplo:
  O carrinho está vazio, seta state = [], depois de ouvir a action ideal para adicionar um
item no carrinho, retorna [ ...state], ou seja, já pega tudo o que tem no state(carrinho)
e acrescenta o action.product.
  Assim que foram feitas essas atualizações, o redux avisa todos os componentes que possuem o connect
e que estão necessitando da informação daquele reducer e executa novamente com as informações novas.


Ciclo:
  Componente dispara uma action ->
    Action avisa o reducer ->
      Reducer faz as alterações necessárias ->
        Redux avisa todos os componentes dependentes daquela informação ->
          Componentes se atualizam com a nova informação.
*/

import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://images.lojanike.com.br/landingpage/ni/184/10/assets/img/air-jordan-xxxiii-azul.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal!</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/landingpage/ni/184/10/assets/img/jordan-proto-react.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal!</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/320x320/produto/99904_783137_20190704203531.png"
          alt="Tênis"
        />
        <strong>Tênis muito legal!</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/320x320/produto/96941_1559534_20190730081031.png"
          alt="Tênis"
        />
        <strong>Tênis muito legal!</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/320x320/produto/89565_1224668_20190723100842.png"
          alt="Tênis"
        />
        <strong>Tênis muito legal!</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images.lojanike.com.br/320x320/produto/4030_367610_20190607094009.png"
          alt="Tênis"
        />
        <strong>Tênis muito legal!</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

import React from "react";
import produtos from "../data/produto";
export default props => {
  const getProdutosListItem = () => {
    return produtos.map(produto => {
      return (
        <li key={produto.id}>
          {produto.id}-{produto.nome}-> R${produto.preco}
        </li>
      );
    });
  };

  return (
    <div>
      <h2>Repeticao</h2>
      <ul>{getProdutosListItem()}</ul>
    </div>
  );
};

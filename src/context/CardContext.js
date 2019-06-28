import React, { useState } from 'react';

export const CardContext = React.createContext();

export function CardProvider(props) {

  var dataInLocalStore = localStorage.getItem('myCard') ? localStorage.getItem('myCard') : null;
  const [card, updateCardState] = useState(new Map(JSON.parse(dataInLocalStore)) );
  console.table([...card.values()])
  console.log(22)
  return (
    <CardContext.Provider
      value={{
        card: card,
        updateCard: (product, add = true) => {
          var myProduct = product.product;
          var idMyProduct = myProduct.id;
          var newCard = new Map(card);
          var newCount = 1;

          if (newCard.has(idMyProduct)) {
            var curruntCount = newCard.get(idMyProduct).count;

            if (add) {
              newCount = curruntCount + 1
            } else if (!add && curruntCount > 1) {
              newCount = curruntCount - 1
            } else {
              newCard.delete(idMyProduct)
              updateCardState(newCard);
              return;
            }
          }
          newCard.set(idMyProduct, { ...myProduct, count: newCount })
          updateCardState(newCard);
          localStorage.setItem('myCard', JSON.stringify([...newCard]));
        },
        deleteProductInCard: (productId) => {
          var newCard = new Map(card);
          newCard.delete(productId);
          updateCardState(newCard);
          localStorage.setItem('myCard', JSON.stringify([...newCard]));
        }
      }}>
      {props.children}
    </CardContext.Provider>
  )


}
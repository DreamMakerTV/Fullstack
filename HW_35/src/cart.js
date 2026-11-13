const list = document.querySelector("#cart-list");

const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
  const totalCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  const countBadge =
    document.querySelector("#cart-count") ||
    document.querySelector("[data-cart-count]");
  if (countBadge) {
    countBadge.textContent = totalCount;
  }
};

list.addEventListener("click", (event) => {
  if (event.target.closest("[data-id]")) {
    const products = JSON.parse(localStorage.getItem("cart"));
    const filteredProduct = products.filter(
      (product) => product.id !== Number(event.target.dataset.id),
    );

    localStorage.setItem("cart", JSON.stringify(filteredProduct));
    render();
  }
});

const render = () => {
  const products = JSON.parse(localStorage.getItem("cart")) ?? [];
  const markup = products
    .map((product) => {
      return `
      <li class="cart-item">
        <div class="cart-item__image">${product.image}</div>
        <div class="cart-item__info">
          <h3 class="cart-item__title">${product.title}</h3>
          <span class="cart-item__price">${product.price}</span>
        </div>
        <div class="qty">
          <span class="qty__value">${product.qty}</span>
        </div>
        <button class="btn btn--icon" data-id="${product.id}">✕</button>
      </li>
      `;
    })
    .join("");
  list.innerHTML = markup;

  updateCartCount();
};

render();

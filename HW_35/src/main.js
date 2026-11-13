const state = {
  products: [],
};

const productsGrid = document.querySelector("#products");

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

productsGrid.addEventListener("click", (event) => {
  if (event.target.closest("[data-id]")) {
    const products = JSON.parse(localStorage.getItem("cart")) ?? [];

    const existProduct = products.find(
      (p) => p.id === Number(event.target.dataset.id),
    );

    if (existProduct) {
      const items = products.map((product) => {
        if (product.id === Number(event.target.dataset.id)) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        } else {
          return product;
        }
      });

      localStorage.setItem("cart", JSON.stringify(items));
    } else {
      const product = state.products.find(
        (p) => p.id === Number(event.target.dataset.id),
      );

      localStorage.setItem(
        "cart",
        JSON.stringify([...products, { ...product, qty: 1 }]),
      );
    }

    updateCartCount();
  }
});

const createProductCard = (product) => {
  return `
    <article class="card">
      <div class="card__image">${product.image}</div>
      <div class="card__body">
        <span class="card__category">${product.category}</span>
        <h3 class="card__title">${product.title}</h3>
        <p class="card__desc">${product.description}</p>
        <div class="card__footer">
          <span class="card__price">${product.price} грн</span>
          <span class="card__rating">⭐ ${product.rating}</span>
        </div>
        <button class="btn btn--primary btn--full" data-id="${product.id}">У кошик</button>
      </div>
    </article>`;
};

const createProductSkeletonCard = () => {
  return `
    <div class="skeleton-card">
      <div class="skeleton skeleton--image"></div>
      <div class="skeleton-card__body">
        <div class="skeleton skeleton--Line skeleton--short"></div>
        <div class="skeleton skeleton--Line skeleton--medium"></div>
        <div class="skeleton skeleton--Line"></div>
        <div class="skeleton skeleton--Line skeleton--price"></div>
        <div class="skeleton skeleton--button"></div>
      </div>
    </div>`;
};

const showSkeleton = () => {
  const skeletons = Array.from({ length: 8 }, () =>
    createProductSkeletonCard(),
  ).join("");

  productsGrid.innerHTML = skeletons;
};

const load = async () => {
  try {
    showSkeleton();

    const data = await fetch(
      "https://6ac9270bfd7c536b1bda89ef.mockapi.io/products",
    );
    const products = await data.json();

    state.products = products;

    const productsHtml = products
      .map((product) => createProductCard(product))
      .join("");

    productsGrid.innerHTML = productsHtml;

    updateCartCount();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};

load();

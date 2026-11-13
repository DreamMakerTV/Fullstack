const productsGrid = document.querySelector("#products");

productsGrid.addEventListener("click", (event) => {
  // console.log(event.target);
  // console.log(event.target.dataset.id);

  if (event.target.closest("[data-id]")) {
    console.log("Added to cart");
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
          <div>
            <div class="card__price">${product.price}</div>
            <div class="card__rating">★ ${product.rating.toFixed(1)}</div>
          </div>
          <button class="btn btn--primary" data-id="${
            product.id
          }">У кошик</button>
        </div>
      </div>
    </article>
  `;
};

const createSkeleton = () => {
  const markup = Array.from(
    { length: 8 },
    () => `<div class="card card--skeleton"></div>`,
  ).join("");
  productsGrid.innerHTML = markup;
};

const load = async () => {
  try {
    createSkeleton();
    const data = await fetch(
      "https://6ac9270bfd7c536b1bda89ef.mockapi.io/products",
    );
    const products = await data.json();
    const markup = products.map(createProductCard).join("");
    productsGrid.innerHTML = markup;
  } catch (e) {
    console.error("Failed to fetch");
  }
};

load();

const products = [
  { name: "Ноутбук", price: 30000, inStock: true },
  { name: "Миша", price: 800, inStock: false },
  { name: "Клавіатура", price: 2500, inStock: true },
  { name: "Килимок", price: 300, inStock: true },
];

let filterChip = "all";

const list = document.querySelector("#product-list");

const filterContainer = document.querySelector("#filter-buttons");

const renderProducts = () => {
  const filteredProducts = products.filter((item) => {
    if (filterChip === "all") return true;
    if (filterChip === "inStock") return item.inStock;
    return !item.inStock;
  });

  const markup = filteredProducts
    .map(
      (item) => `
    <li class="product">
      <h6>${item.name}</h6>
      <p>Ціна: ${item.price} ₴</p>
      <p>В наявності: ${item.inStock ? "Так" : "Ні"}</p>
    </li>
  `,
    )
    .join("");

  list.innerHTML = markup;
};

const handleFilterClick = (event) => {
  if (event.target.tagName !== "BUTTON") return;

  filterChip = event.target.id;

  renderProducts();
};

filterContainer.addEventListener("click", handleFilterClick);

renderProducts();

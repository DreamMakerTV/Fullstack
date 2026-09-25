function createProductCard(product) {
  const li = document.createElement("li");
  li.classList.add("product-card");

  li.style.display = "flex";
  li.style.flexDirection = "column";

  const imageUrl = product.image ? product.image : "./noimage.png";

  let priceHTML = "";

  if (product.discount) {
    const discountPrice = Math.round(
      product.price - (product.price * product.discount) / 100,
    );
    priceHTML = `
      <div class="price-container">
        <span class="old-price" style="text-decoration: line-through; color: gray; font-size: 14px;">${product.price} ₴</span>
        <span class="new-price" style="color: red; font-weight: bold; font-size: 18px; margin-left: 5px;">${discountPrice} ₴</span>
        <span class="discount-badge" style="background: red; color: white; border-radius: 4px; padding: 2px 4px; font-size: 12px; margin-left: 5px;">-${product.discount}%</span>
      </div>
    `;
  } else {
    priceHTML = `
      <div class="price-container">
        <span class="regular-price" style="font-weight: bold; font-size: 18px;">${product.price} ₴</span>
      </div>
    `;
  }

  let tagsHTML = "";

  if (product.tags && product.tags.length > 0) {
    const tagsString = product.tags
      .map(
        (tag) =>
          `<span class="tag" style="background: #eee; padding: 4px 8px; border-radius: 4px; margin-right: 5px; font-size: 12px;">${tag}</span>`,
      )
      .join("");
    tagsHTML = `<div class="tags" style="margin: 10px 0;">${tagsString}</div>`;
  }

  const stockStatus = product.inStock ? "В наявності" : "Немає в наявності";
  const stockColor = product.inStock ? "green" : "red";

  li.innerHTML = `
    <div class="image-wrapper" style="width: 100%; height: 200px; margin-bottom: 15px; flex-shrink: 0;">
      <img src="${imageUrl}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: contain; background: #f8f9fa; border-radius: 4px;">
    </div>
    <div class="content-wrapper" style="display: flex; flex-direction: column; flex-grow: 1;">
      <h3 class="title" style="margin: 0 0 10px 0; font-size: 18px;">${product.title}</h3>
      <p class="category" style="color: gray; font-size: 14px; margin: 0 0 10px 0;">Категорія: ${product.category}</p>
      ${priceHTML}
      <div class="rating" style="margin-top: 10px; font-size: 14px;">⭐️ ${product.rating}</div>
      ${tagsHTML}
      <p class="status" style="color: ${stockColor}; font-weight: bold; font-size: 14px; margin: 10px 0 0 0; margin-top: auto;">${stockStatus}</p>
    </div>
  `;

  return li;
}

const catalogContainer = document.getElementById("catalog");

const productCards = products.map((product) => createProductCard(product));

catalogContainer.append(...productCards);

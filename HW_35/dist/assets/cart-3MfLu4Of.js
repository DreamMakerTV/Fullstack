import"./styles-CARi664e.js";var e=document.querySelector(`#cart-list`),t=()=>{let e=(JSON.parse(localStorage.getItem(`cart`))??[]).reduce((e,t)=>e+(t.qty||1),0),t=document.querySelector(`#cart-count`)||document.querySelector(`[data-cart-count]`);t&&(t.textContent=e)};e.addEventListener(`click`,e=>{if(e.target.closest(`[data-id]`)){let t=JSON.parse(localStorage.getItem(`cart`)).filter(t=>t.id!==Number(e.target.dataset.id));localStorage.setItem(`cart`,JSON.stringify(t)),n()}});var n=()=>{e.innerHTML=(JSON.parse(localStorage.getItem(`cart`))??[]).map(e=>`
      <li class="cart-item">
        <div class="cart-item__image">${e.image}</div>
        <div class="cart-item__info">
          <h3 class="cart-item__title">${e.title}</h3>
          <span class="cart-item__price">${e.price}</span>
        </div>
        <div class="qty">
          <span class="qty__value">${e.qty}</span>
        </div>
        <button class="btn btn--icon" data-id="${e.id}">✕</button>
      </li>
      `).join(``),t()};n();
import"./styles-CARi664e.js";var e={products:[]},t=document.querySelector(`#products`),n=()=>{let e=(JSON.parse(localStorage.getItem(`cart`))??[]).reduce((e,t)=>e+(t.qty||1),0),t=document.querySelector(`#cart-count`)||document.querySelector(`[data-cart-count]`);t&&(t.textContent=e)};t.addEventListener(`click`,t=>{if(t.target.closest(`[data-id]`)){let r=JSON.parse(localStorage.getItem(`cart`))??[];if(r.find(e=>e.id===Number(t.target.dataset.id))){let e=r.map(e=>e.id===Number(t.target.dataset.id)?{...e,qty:e.qty+1}:e);localStorage.setItem(`cart`,JSON.stringify(e))}else{let n=e.products.find(e=>e.id===Number(t.target.dataset.id));localStorage.setItem(`cart`,JSON.stringify([...r,{...n,qty:1}]))}n()}});var r=e=>`
    <article class="card">
      <div class="card__image">${e.image}</div>
      <div class="card__body">
        <span class="card__category">${e.category}</span>
        <h3 class="card__title">${e.title}</h3>
        <p class="card__desc">${e.description}</p>
        <div class="card__footer">
          <span class="card__price">${e.price} грн</span>
          <span class="card__rating">⭐ ${e.rating}</span>
        </div>
        <button class="btn btn--primary btn--full" data-id="${e.id}">У кошик</button>
      </div>
    </article>`,i=()=>`
    <div class="skeleton-card">
      <div class="skeleton skeleton--image"></div>
      <div class="skeleton-card__body">
        <div class="skeleton skeleton--Line skeleton--short"></div>
        <div class="skeleton skeleton--Line skeleton--medium"></div>
        <div class="skeleton skeleton--Line"></div>
        <div class="skeleton skeleton--Line skeleton--price"></div>
        <div class="skeleton skeleton--button"></div>
      </div>
    </div>`,a=()=>{t.innerHTML=Array.from({length:8},()=>i()).join(``)};(async()=>{try{a();let i=await(await fetch(`https://6ac9270bfd7c536b1bda89ef.mockapi.io/products`)).json();e.products=i,t.innerHTML=i.map(e=>r(e)).join(``),n()}catch(e){console.error(`Failed to fetch products:`,e)}})();
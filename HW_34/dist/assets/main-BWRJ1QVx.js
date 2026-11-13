(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#products`);e.addEventListener(`click`,e=>{e.target.closest(`[data-id]`)&&console.log(`Added to cart`)});var t=e=>`
    <article class="card">
      <div class="card__image">${e.image}</div>
      <div class="card__body">
        <span class="card__category">${e.category}</span>
        <h3 class="card__title">${e.title}</h3>
        <p class="card__desc">${e.description}</p>
        <div class="card__footer">
          <div>
            <div class="card__price">${e.price}</div>
            <div class="card__rating">★ ${e.rating.toFixed(1)}</div>
          </div>
          <button class="btn btn--primary" data-id="${e.id}">У кошик</button>
        </div>
      </div>
    </article>
  `,n=()=>{e.innerHTML=Array.from({length:8},()=>`<div class="card card--skeleton"></div>`).join(``)};(async()=>{try{n(),e.innerHTML=(await(await fetch(`https://6ac9270bfd7c536b1bda89ef.mockapi.io/products`)).json()).map(t).join(``)}catch{console.error(`Failed to fetch`)}})();
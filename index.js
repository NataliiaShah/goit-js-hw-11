import{i as c,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(s){const o="https://pixabay.com/api/",r="40891115-11d0b88dd3a60afc830d1d27f";s.includes(" ")&&s.replace(/\s+/g,"+");const a=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function f(s){return s.map(({webformatURL:o,largeImageURL:r,tags:a,likes:e,views:t,comments:i,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${a}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${d}</p>
            </div>
          </div>
        </li>`).join("")}const u=document.querySelector(".js-search"),n=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";u.addEventListener("submit",m);function m(s){s.preventDefault(),n.innerHTML="",l.style.display="block";const o=s.target.elements.search.value.trim();p(o).then(r=>{l.style.display="none",r.hits.length||c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=f(r.hits),y.refresh(),u.reset()}).catch(r=>{l.style.display="none",c.error({title:"Error",message:error.message}),console.log(r)})}const y=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map

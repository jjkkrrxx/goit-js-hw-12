import{a as y,S as p,i as c}from"./assets/vendor-aRrDMdG-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const L="55713445-fbda8ed7255a2117e2c0a47fe";async function w(e,r=1){console.log("🟣 Запит до API:",{query:e,page:r});try{const o=await y.get("https://pixabay.com/api/",{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}});return console.log("🟣 Відповідь API:",o.data),o.data}catch(o){throw console.error("Помилка API:",o),o}}let u=null;function b(e,r=!0){const o=document.querySelector(".gallery"),a=e.map(t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
          alt="${t.tags}"
        />
      </a>
      <div class="image-info">
        <span>👍 ${t.likes}</span>
        <span>👁️ ${t.views}</span>
        <span>💬 ${t.comments}</span>
        <span>📥 ${t.downloads}</span>
      </div>
    </li>
  `).join("");r?o.innerHTML=a:o.insertAdjacentHTML("beforeend",a),u&&u.refresh(),u=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function I(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function v(){const e=document.getElementById("loader");e&&e.classList.add("show")}function E(){const e=document.getElementById("loader");e&&e.classList.remove("show")}function P(){const e=document.getElementById("load-more-btn");e&&e.classList.add("show")}function m(){const e=document.getElementById("load-more-btn");e&&e.classList.remove("show")}const f=document.getElementById("search-form"),B=document.getElementById("load-more-btn");let g="",s=1,i=0,l=!1;function M(){const e=document.querySelector(".gallery-item");if(!e)return;const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function O(){const e=Math.ceil(i/15);s>=e&&(m(),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}async function h(e=!0){if(!l){l=!0,e?(s=1,m(),I()):m(),v();try{const r=await w(g,s);if(i=r.totalHits,r.hits.length===0&&s===1){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(r.hits,e);const o=s*15<i;r.hits.length>0&&o?P():s*15>=i&&O(),e||M()}catch{c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{E(),l=!1}}}f.addEventListener("submit",async e=>{e.preventDefault();const r=f.elements.searchQuery.value.trim();if(!r){c.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}g=r,await h(!0),f.reset()});B.addEventListener("click",async()=>{l||(s++,await h(!1))});
//# sourceMappingURL=index.js.map

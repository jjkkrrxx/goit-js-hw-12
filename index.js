import{a as h,S as p,i as c}from"./assets/vendor-aRrDMdG-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const L="55713445-fbda8ed7255a2117e2c0a47fe";async function w(e,o=1){console.log("🟣 Запит до API:",{query:e,page:o});try{const r=await h.get("https://pixabay.com/api/",{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});return console.log("🟣 Відповідь API:",r.data),r.data}catch(r){throw console.error("Помилка API:",r),r}}let u=null;function b(e,o=!0){const r=document.querySelector(".gallery"),a=e.map(t=>`
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
  `).join("");o?r.innerHTML=a:r.insertAdjacentHTML("beforeend",a),u&&u.destroy(),u=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function I(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function v(){const e=document.getElementById("loader");e&&e.classList.add("show")}function E(){const e=document.getElementById("loader");e&&e.classList.remove("show")}function P(){const e=document.getElementById("load-more-btn");e&&e.classList.add("show")}function m(){const e=document.getElementById("load-more-btn");e&&e.classList.remove("show")}const f=document.getElementById("search-form"),B=document.getElementById("load-more-btn");let g="",s=1,i=0,l=!1;function M(){const e=document.querySelector(".gallery-item");if(!e)return;const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}function O(){const e=Math.ceil(i/15);s>=e&&(m(),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}async function y(e=!0){if(!l){l=!0,e?(s=1,m(),I()):m(),v();try{const o=await w(g,s);if(i=o.totalHits,o.hits.length===0&&s===1){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits,e);const r=s*15<i;o.hits.length>0&&r?P():s*15>=i&&O(),e||M()}catch{c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{E(),l=!1}}}f.addEventListener("submit",async e=>{e.preventDefault();const o=f.elements.searchQuery.value.trim();if(!o){c.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}g=o,await y(!0),f.reset()});B.addEventListener("click",async()=>{l||(s++,await y(!1))});
//# sourceMappingURL=index.js.map

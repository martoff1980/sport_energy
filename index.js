/* empty css                      */import{i as f}from"./assets/vendor-DVYrn7a6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();class m{static generateFiltersHtml(e){return e.map(r=>`
          <div class="filter-card">
            <img src="${r.imgUrl}" alt="${r.name}" />
            <div class="filter-info">
              <div class="filter-name">${r.name}</div>
              <div class="filter-type">${r.filter}</div>
            </div>
          </div>
        `).join("")}}class c{constructor(e,r,i){this.name=e,this.filter=r,this.imgUrl=i}static fromJson(e){return new c(e.name,e.filter,e.imgURL)}}class a{constructor(e,r,i,t){this.page=e,this.perPage=r,this.totalPages=i,this.results=t}static fromJson(e){const r=e.results.map(i=>c.fromJson(i));return new a(e.page,e.perPage,e.totalPages,r)}}const u=class u{};u.ApiBaseUrl="https://your-energy.b.goit.study/api";let l=u;class d{async getFilters(e,r,i){const t=`${l.ApiBaseUrl}/filters?filter=${encodeURIComponent(e)}&page=${r}&limit=${i}`,s=await fetch(t);if(!s.ok)throw new Error(`Failed to fetch filters: ${s.status}`);const n=await s.json();return a.fromJson(n)}}const p=new d;p.getFilters("Muscles",1,12).then(o=>{const e=m.generateFiltersHtml(o.results),r=document.querySelector(".filters-output");if(!r)throw new Error("Can't find filters-output");r.innerHTML=e}).catch(o=>f.error({title:"Error",message:o.message,position:"topRight",timeout:5e3}));
//# sourceMappingURL=index.js.map

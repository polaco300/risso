var n=document.getElementById("header"),l=document.getElementById("logo-navbar"),s=document.getElementsByClassName("item-navbar");window.onscroll=()=>{var r=document.documentElement.scrollTop;if(r>30){n.classList.add("navbar-scroll"),l.src="/risso/images/logo-dark.svg";for(var t=0;t<s.length;t++)s[t].classList.remove("text-white"),s[t].classList.add("text-risso-blue")}else{n.classList.remove("navbar-scroll"),l.src="/risso/images/logo.svg";for(var t=0;t<s.length;t++)s[t].classList.remove("text-risso-blue"),s[t].classList.add("text-white")}};document.addEventListener("DOMContentLoaded",function(){document.getElementById("astronav-menu").addEventListener("click",()=>{[...document.querySelectorAll(".astronav-toggle")].forEach(e=>{e.classList.toggle("hidden")})});const t=document.querySelectorAll(".astronav-dropdown");t.forEach(e=>{const a=e.querySelector("button");a.addEventListener("click",d=>{e.classList.toggle("open"),e.setAttribute("aria-expanded",e.getAttribute("aria-expanded")==="true"?"false":"true"),e.hasAttribute("open")?e.removeAttribute("open"):e.setAttribute("open",""),a.nextElementSibling.classList.toggle("hidden"),Array.from(t).filter(o=>o!==e).forEach(o=>{o.classList.remove("open"),o.removeAttribute("open"),o.setAttribute("aria-expanded","false"),o.querySelector(".dropdown-toggle").classList.add("hidden")}),d.stopPropagation()})}),document.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("open"),e.removeAttribute("open"),e.setAttribute("aria-expanded","false")}),document.querySelectorAll(".dropdown-toggle").forEach(e=>e.classList.add("hidden"))})});

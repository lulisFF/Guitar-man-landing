window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".nav-menu"),t=document.querySelectorAll(".nav-menu__list-item"),n=document.querySelector(".hamburger");n.addEventListener("click",(()=>{n.classList.toggle("hamburger_active"),e.classList.toggle("nav-menu_active")})),t.forEach((t=>{t.addEventListener("click",(()=>{n.classList.toggle("hamburger_active"),e.classList.toggle("nav-menu_acitve")}))}))})),$(document).ready((function(){$("a[href*='#']").on("click",(function(e){var t=$(this);return $("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},777),e.preventDefault(),!1}))}));
//# sourceMappingURL=guitar.a76dbe8f.js.map
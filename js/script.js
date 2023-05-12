let zagolovok = document.querySelector('#typed');
let elem = document.querySelector('#title');
function scrol(text, speed) {
   let h = text.getBoundingClientRect().height;
   let  text_height = text.offsetHeight;
   let  text_offset = affset(text).top;
   let  start = 4;
   let point = window.innerHeight - text_height / start;
   if (text_height > window.innerHeight) {
      point = window.innerHeight - window.innerHeight / start;
   }
   let inner = text.innerText;
   text.style.height = h + 'px'
   text.innerText = '';
   let interval = setInterval(() => {
      if ((pageYOffset > text_offset - point) && pageYOffset < (text_offset + text_height)) {
         clearInterval(interval);
         let i = 0;
         let sass = setInterval(() => {
            if (inner[i] === '\ud83d') {
               text.innerHTML += '<div class=\'br\'></div>'
               i += 2;
            }
            text.innerHTML += inner[i];
            if (i >= inner.length - 1) {
               clearInterval(sass);
               text.style.height = 'auto'
            }
            i++;
         }, speed)
      }
   }, 210)
}
scrol(zagolovok, 8);
scrol(elem, 100);
function affset(el) {
   let  rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}




let stars = document.querySelector('#stars');
let moon = document.querySelector('#moon');
let ges = document.querySelector('#mountains_behind');
let text = document.querySelector('#text');
let btn = document.querySelector('#btn');
window.onscroll = () => {
   let y = window.scrollY
   stars.style.margin = (y * 0.45) + "px"
   moon.style.marginTop = (y * 1.30) + "px"
   ges.style.marginTop = (y * 0.55) + "px"
   text.style.marginRight = (y * 0.70) + "px"
   btn.style.marginTop = (y * 1) + "px"
}


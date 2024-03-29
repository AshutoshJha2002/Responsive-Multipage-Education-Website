//change navbar styles on scroll
window.addEventListener("scroll",() =>{
  document.querySelector('nav').classList.toggle
  ('window-scroll',window.scrollY>0)
});



//show/hide faq aqnswer
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    //change icon
    const icon = faq.querySelector('.faq__icon i');
if (icon.classList.contains('uil-plus')) {
  icon.classList.remove('uil-plus');
  icon.classList.add('uil-minus');
} else {
  icon.classList.remove('uil-minus');
  icon.classList.add('uil-plus');
}
  })
})


// show/hide nav menu
const menu=document.querySelector(".nav__menu");
const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  menuBtn.style.display='none';
  closeBtn.style.display='inline-block';
})

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display='inline-block';
  closeBtn.style.display='none';
})

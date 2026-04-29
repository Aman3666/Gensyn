// Global luxury interactions
const cursor = document.querySelector('.cursor');
if (cursor) {
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  document.querySelectorAll('a,button,.chip,.card').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
}
window.addEventListener('load', () => document.querySelector('.loader')?.classList.add('hide'));

gsap.registerPlugin(ScrollTrigger);
if (window.Lenis) {
  const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}

document.querySelectorAll('.fade-in').forEach((el)=>{
  gsap.to(el,{opacity:1,y:0,duration:1,scrollTrigger:{trigger:el,start:'top 85%'}});
});

const chips = document.querySelectorAll('.chip');
chips.forEach(c=>c.addEventListener('click',()=>{
  chips.forEach(x=>x.classList.remove('active')); c.classList.add('active');
  const cat = c.dataset.cat;
  document.querySelectorAll('.menu-item').forEach(item=>{
    item.style.display = (cat==='all' || item.dataset.cat===cat) ? 'block':'none';
  });
}));

const form = document.querySelector('#reservationForm');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!form.checkValidity()) return form.reportValidity();
    const success = document.querySelector('#success');
    success.style.display='block';
    gsap.fromTo(success,{scale:.7,opacity:0},{scale:1,opacity:1,duration:.6,ease:'back.out(1.7)'});
    form.reset();
  })
}

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.12});
  revealEls.forEach(el=>io.observe(el));
} else {
  revealEls.forEach(el=>el.classList.add('in'));
}

// ambient basepair texture (static, generated once — not decorative animation)
(function(){
  const el = document.getElementById('basepairs');
  if(!el) return;
  const bases = ['A','T','C','G'];
  let out = '';
  for(let i=0;i<1400;i++){ out += bases[Math.floor(Math.random()*4)]; }
  el.textContent = out;
})();

// close mobile nav on link click
document.querySelectorAll('nav.navlinks a').forEach(a=>{
  a.addEventListener('click', ()=>{ document.getElementById('navToggle').checked = false; });
});

const bg=document.querySelector('.burger'),ul=document.querySelector('nav ul');
bg.onclick=()=>ul.classList.toggle('open');
document.querySelectorAll('.q').forEach(q=>q.onclick=()=>{const a=q.nextElementSibling,o=q.classList.toggle('open');a.style.maxHeight=o?a.scrollHeight+'px':0});
const sl=document.querySelectorAll('.slide'),dots=document.querySelector('.dots');let i=0;
if(sl.length){sl.forEach((_,k)=>{const b=document.createElement('button');b.onclick=()=>{show(k)};dots.appendChild(b)});
function show(k){i=k;sl.forEach((s,j)=>s.classList.toggle('on',j==k));[...dots.children].forEach((d,j)=>d.classList.toggle('on',j==k))}
show(0);setInterval(()=>show((i+1)%sl.length),5000)}
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelectorAll('[data-n]').forEach(el=>{const t=+el.dataset.n;let c=0;const s=Math.max(1,Math.ceil(t/40));const iv=setInterval(()=>{c=Math.min(t,c+s);el.textContent=c;if(c>=t)clearInterval(iv)},40)});

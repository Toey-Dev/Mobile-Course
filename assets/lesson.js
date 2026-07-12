// =============================================================
// สคริปต์กลางของหลักสูตร Flutter — ใช้ร่วมกันทุกบทเรียน (บท 3 เป็นต้นไป)
// =============================================================

// ครอบด้วย if กันกรณีเปิดแบบออฟไลน์ (โหลด highlight.js จาก CDN ไม่ได้)
if (window.hljs) { hljs.highlightAll(); }

// ปุ่ม "คัดลอก" บนกล่องโค้ดทุกกล่อง
document.querySelectorAll('pre').forEach(function(pre){
  var btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = 'คัดลอก';
  btn.addEventListener('click', function(){
    var code = pre.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(function(){
      btn.textContent = '✓ คัดลอกแล้ว';
      btn.classList.add('done');
      setTimeout(function(){ btn.textContent='คัดลอก'; btn.classList.remove('done'); }, 1600);
    });
  });
  pre.appendChild(btn);
});

// แถบความคืบหน้าการอ่านด้านบน
window.addEventListener('scroll', function(){
  var h = document.documentElement;
  var scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  document.getElementById('progress').style.width = scrolled + '%';
});

// ไฮไลต์หัวข้อปัจจุบันในสารบัญ
var links = Array.from(document.querySelectorAll('#toc a'));
var sections = links.map(function(a){ return document.querySelector(a.getAttribute('href')); });
window.addEventListener('scroll', function(){
  var pos = window.scrollY + 120;
  var current = -1;
  sections.forEach(function(sec, i){ if(sec && sec.offsetTop <= pos) current = i; });
  links.forEach(function(a){ a.classList.remove('active'); });
  if(current >= 0) links[current].classList.add('active');
});

// เมนูมือถือ
var sb = document.getElementById('sidebar');
var mt = document.getElementById('menu-toggle');
mt.addEventListener('click', function(){ sb.classList.toggle('open'); });
document.querySelectorAll('#toc a').forEach(function(a){
  a.addEventListener('click', function(){ sb.classList.remove('open'); });
});

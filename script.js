// Confetti
const c = document.getElementById('confetti'), ctx = c.getContext('2d');
c.width = innerWidth; c.height = innerHeight;
let particles = Array.from({length:200}, ()=>({
  x:Math.random()*c.width, y:Math.random()*c.height,
  r:Math.random()*4+1, d:Math.random()*Math.PI*2,
  c: `hsl(${Math.random()*360},100%,60%)`
}));
function drawC(){
  ctx.clearRect(0,0,c.width,c.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,2*Math.PI);
    ctx.fillStyle = p.c; ctx.fill();
    p.y += Math.cos(p.d)+2; p.x += Math.sin(p.d);
    if(p.y>c.height){p.y=0;p.x=Math.random()*c.width;}
  });
  requestAnimationFrame(drawC);
}
drawC();

// Floating lines background
const bg = document.getElementById('bg-animation'), bgCtx = bg.getContext('2d');
bg.width=innerWidth; bg.height=innerHeight;
let lines = Array.from({length:100}, ()=>({
  x: Math.random()*bg.width, y: Math.random()*bg.height,
  len: Math.random()*100+50, a: Math.random()*Math.PI*2, v: 0.5+Math.random()
}));
function drawBG(){
  bgCtx.clearRect(0,0,bg.width,bg.height);
  lines.forEach(l=>{
    bgCtx.beginPath();
    bgCtx.moveTo(l.x, l.y);
    bgCtx.lineTo(l.x + Math.cos(l.a)*l.len, l.y + Math.sin(l.a)*l.len);
    bgCtx.strokeStyle = 'rgba(255,255,255,0.05)';
    bgCtx.lineWidth=1; bgCtx.stroke();
    l.x += Math.cos(l.a)*l.v; l.y += Math.sin(l.a)*l.v;
    if(l.x>bg.width||l.x<0||l.y>bg.height||l.y<0){
      l.x=Math.random()*bg.width; l.y=Math.random()*bg.height;
    }
  });
  requestAnimationFrame(drawBG);
}
drawBG();

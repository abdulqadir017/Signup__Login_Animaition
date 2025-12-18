const stars=document.getElementById('stars');
for(let i=0;i<120;i++){
  const s=document.createElement('div');
  s.className='star';
  s.style.top=Math.random()*100+'%';
  s.style.left=Math.random()*100+'%';
  s.style.animationDelay=Math.random()*3+'s';
  stars.appendChild(s);
}

const card=document.getElementById("card");
const signupBox=document.getElementById("signupBox");
const loginBox=document.getElementById("loginBox");
const homeBox=document.getElementById("homeBox");
const welcome=document.getElementById("welcome");


if(window.innerWidth>768){
  document.addEventListener("mousemove",e=>{
    const x=(innerWidth/2-e.clientX)/18;
    const y=(innerHeight/2-e.clientY)/18;
    card.style.transform=`rotateY(${x}deg) rotateX(${y}deg) translateZ(50px)`
  });
}

document.addEventListener("mouseleave",()=>card.style.transform="");

function showLogin(){signupBox.classList.add("hidden");loginBox.classList.remove("hidden")}
function showSignup(){loginBox.classList.add("hidden");signupBox.classList.remove("hidden")}

function typeText(el,text){
  el.innerText="";let i=0;
  const t=setInterval(()=>{el.innerText+=text[i++];if(i===text.length)clearInterval(t)},60)
}

function signup(){
  if(!suUser.value||!suFather.value||!suCity.value||!suAge.value||!suEmail.value||!suPass.value){
    card.classList.add('shake');setTimeout(()=>card.classList.remove('shake'),400);
    return;
  }
  localStorage.setItem("username",suUser.value);
  localStorage.setItem("email",suEmail.value);
  localStorage.setItem("pass",suPass.value);
  signupBox.classList.add("hidden");homeBox.classList.remove("hidden");
  typeText(welcome,`Welcome ${suUser.value} 👑`);
}

function login(){
  if(liEmail.value===localStorage.getItem("email") && liPass.value===localStorage.getItem("pass")){
    loginBox.classList.add("hidden");homeBox.classList.remove("hidden");
    typeText(welcome,`Welcome back ${localStorage.getItem("username")} ❤️`);
  }else{
    card.classList.add('shake');setTimeout(()=>card.classList.remove('shake'),400);
  }
}

function enableRipple(){
  document.addEventListener('click',e=>{
    const r=document.createElement('span');
    r.className='ripple';
    r.style.left=e.clientX+'px';
    r.style.top=e.clientY+'px';
    document.body.appendChild(r);
    setTimeout(()=>r.remove(),900);
  });
}

function enableCursorGlow(){
  document.addEventListener('mousemove',e=>{
    const g=document.createElement('div');
    g.className='cursor-glow';
    g.style.left=e.clientX+'px';
    g.style.top=e.clientY+'px';
    document.body.appendChild(g);
    setTimeout(()=>g.remove(),300);
  });
}

function enableSparkles(){
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('mouseenter',()=>btn.classList.add('spark'));
    btn.addEventListener('mouseleave',()=>btn.classList.remove('spark'));
  });
}

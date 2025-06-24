javascript:(function(){
try {
  let f = document.createElement('iframe');
  f.style.display = 'none';
  document.body.appendChild(f);
  let t = JSON.parse(f.contentWindow.localStorage.token);
  document.body.innerHTML = '';
  document.head.innerHTML = '';
  document.body.style.cssText = `
    margin:0;padding:0;
    background:radial-gradient(circle at center, #1a1a1a 0%, #000000 100%);
    color:#fff;
    font-family:'Segoe UI',sans-serif;
    overflow:hidden;
  `;

  let style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from {opacity:0;transform:translateY(20px);}
      to {opacity:1;transform:translateY(0);}
    }
    .glow-red {
      color: #ff3c3c;
      text-shadow: 0 0 4px #ff0000;
    }
    .blurred {
      filter: blur(8px);
    }
    input:focus { outline: none; }
  `;
  document.head.appendChild(style);

  let c = document.createElement('div');
  c.style.cssText = `
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
    text-align:center;
    animation:fadeIn 1s ease;
    padding:20px;
  `;

  let icon = document.createElement('img');
  icon.src = 'https://yt3.googleusercontent.com/8MKcPTC8fRKwPY_pj3mlE48apCGuc66idJfnTJ-IRtcjih6qSO6mSnAo4G3ueJOevExFokKT=s160-c-k-c0x00ffffff-no-rj';
  icon.style.cssText = `
    width:64px;
    height:64px;
    margin-bottom:10px;
    border-radius:50%;
    box-shadow:0 0 10px #7289da;
  `;

  let h1 = document.createElement('h1');
  h1.textContent = "Hated Warrior";
  h1.className = "glow-red";
  h1.style.cssText = `font-size:32px;margin:10px 0;`;

  let h2 = document.createElement('h2');
  h2.textContent = "Here is your token!! Join .gg/hacker now!!";
  h2.style.cssText = `font-size:16px;margin:0 0 20px;color:#ccc;`;

  let i = document.createElement('input');
  i.value = t;
  i.readOnly = true;
  i.className = "blurred";
  i.style.cssText = `
    padding:10px;
    font-size:14px;
    width:80%;
    max-width:500px;
    text-align:center;
    border:none;
    border-radius:8px;
    background:#222;
    color:#0f0;
    margin-bottom:10px;
    box-shadow:0 0 6px #0f0;
    transition:0.3s ease;
  `;

  let b = document.createElement('button');
  b.textContent = 'Copy Token';
  b.onclick = () => {
    navigator.clipboard.writeText(i.value);
    b.textContent = 'Copied!';
    setTimeout(() => b.textContent = 'Copy Token', 1500);
  };
  b.style.cssText = `
    padding:10px 20px;
    font-size:14px;
    border:none;
    border-radius:6px;
    background:#00ff99;
    color:#000;
    margin:5px;
    cursor:pointer;
    box-shadow:0 0 10px #00ff99;
  `;

  let showHide = document.createElement('button');
  showHide.textContent = 'Show Token';
  showHide.onclick = () => {
    if (i.classList.contains('blurred')) {
      i.classList.remove('blurred');
      showHide.textContent = 'Hide Token';
    } else {
      i.classList.add('blurred');
      showHide.textContent = 'Show Token';
    }
  };
  showHide.style.cssText = `
    padding:10px 20px;
    font-size:14px;
    border:none;
    border-radius:6px;
    background:#7289da;
    color:#fff;
    margin:5px;
    cursor:pointer;
    box-shadow:0 0 10px #7289da;
  `;

  let close = document.createElement('button');
  close.textContent = 'Close';
  close.onclick = () => location.reload();
  close.style.cssText = `
    margin-top:20px;
    padding:10px 20px;
    font-size:14px;
    border:none;
    border-radius:6px;
    background:#ff4444;
    color:#fff;
    cursor:pointer;
    box-shadow:0 0 10px #ff4444;
  `;

  c.append(icon, h1, h2, i, b, showHide, close);
  document.body.appendChild(c);

} catch(e) {
  alert('Error loading token.');
}
})();

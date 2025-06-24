javascript:(function(){
  const html = `
  <div id="tokenerUI" style="
    position:fixed;top:0;left:0;right:0;bottom:0;
    background:rgba(0,0,0,0.8);
    display:flex;align-items:center;justify-content:center;
    z-index:99999;
    font-family:sans-serif;
  ">
    <div style="
      background:#2f3136;
      padding:20px;
      border-radius:10px;
      text-align:center;
      color:#fff;
      box-shadow:0 0 10px #000;
      width:90%;max-width:400px;
    ">
      <h2 style="margin-bottom:10px;color:#00ffff;">Hated Warrior Token Injector</h2>
      <input id="tokener_input" placeholder="Enter Discord Token" type="password" style="
        width:100%;
        padding:10px;
        font-size:14px;
        border:none;
        border-radius:6px;
        background:#202225;
        color:#0f0;
        margin-bottom:10px;
      " />
      <br>
      <button id="tokener_toggle" style="margin:5px;padding:6px 12px;border:none;border-radius:5px;background:#7289da;color:#fff;">Show</button>
      <button id="tokener_copy" style="margin:5px;padding:6px 12px;border:none;border-radius:5px;background:#00ff99;color:#000;">Copy</button>
      <button id="tokener_inject" style="margin:5px;padding:6px 12px;border:none;border-radius:5px;background:#43b581;color:#fff;">Inject</button>
      <button id="tokener_close" style="margin:5px;padding:6px 12px;border:none;border-radius:5px;background:#f04747;color:#fff;">Close</button>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', html);

  const input = document.getElementById('tokener_input');
  const toggle = document.getElementById('tokener_toggle');
  const copy = document.getElementById('tokener_copy');
  const inject = document.getElementById('tokener_inject');
  const close = document.getElementById('tokener_close');

  toggle.onclick = () => {
    input.type = input.type === 'password' ? 'text' : 'password';
    toggle.textContent = input.type === 'password' ? 'Show' : 'Hide';
  };

  copy.onclick = () => {
    navigator.clipboard.writeText(input.value);
    copy.textContent = 'Copied!';
    setTimeout(() => copy.textContent = 'Copy', 1500);
  };

  inject.onclick = () => {
    const token = input.value.trim();
    if (!token) return alert("Token can't be empty");
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    iframe.contentWindow.localStorage.token = `"${token}"`;
    alert('Token injected! Reloading...');
    setTimeout(() => location.reload(), 1000);
  };

  close.onclick = () => {
    document.getElementById('tokenerUI').remove();
  };
})();

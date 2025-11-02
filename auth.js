(function(){
  const ID = "amibt";
  const PW = "2025";

  function loggedIn(){ return localStorage.getItem("amibt_login") === "ok"; }
  function requireLogin(){
    const path = location.pathname.split("/").pop();
    const gated = ["videos.html","members.html"];
    if (gated.includes(path) && !loggedIn()){ location.href = "login.html"; }
  }
  window.logout = function(){ localStorage.removeItem("amibt_login"); location.href = "login.html"; }

  document.addEventListener("DOMContentLoaded", ()=>{
    requireLogin();
    const form = document.getElementById("loginForm");
    if (form){
      form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const u = document.getElementById("username").value.trim();
        const p = document.getElementById("password").value.trim();
        if (u === ID && p === PW){
          localStorage.setItem("amibt_login","ok");
          location.href = "members.html";
        } else {
          alert("ID または パスワードが違います。 (ID: amibt / PASS: 2025)");
        }
      });
    }
  });
})();

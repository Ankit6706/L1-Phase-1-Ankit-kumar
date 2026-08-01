let username=document.getElementById("username");
let useremail=document.getElementById("usermail");
let rightusername=document.getElementById("rightusername");
let loggeduser = JSON.parse(localStorage.getItem("loggeduser"));

username.innerText=loggeduser.Name + " " +loggeduser.Lastname;
useremail.innerText=loggeduser.Email;
rightusername.innerText=loggeduser.Name;


function edit(){
    window.location.href="./Profile setting.html";
};
function change(){
    window.location.href="security.html";
}
function logout() {
    localStorage.removeItem("loggeduser");
    window.location.href = "./landing page.html";
}
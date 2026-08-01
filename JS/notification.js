    let username=document.getElementById("username");
    let useremail=document.getElementById("usermail");
    let loggeduser = JSON.parse(localStorage.getItem("loggeduser"));

    username.innerText=loggeduser.Name + " " +loggeduser.Lastname;
    useremail.innerText=loggeduser.Email;
    function logout() {
        localStorage.removeItem("loggeduser");
        window.location.href = "./landing page.html";
    }
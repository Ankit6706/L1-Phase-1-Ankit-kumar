let username=document.getElementById("username");
let useremail=document.getElementById("usermail");

let fullname=document.getElementById("fullname");
let dob=document.getElementById("dob");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let address=document.getElementById("address");
let pin=document.getElementById("pin");
let city=document.getElementById("city");
let country=document.getElementById("country");
let github=document.getElementById("github");

let loggeduser = JSON.parse(localStorage.getItem("loggeduser"));

username.innerText=loggeduser.Name + " " +loggeduser.Lastname;
useremail.innerText=loggeduser.Email;

fullname.value=loggeduser.Name+" "+loggeduser.Lastname;
email.placeholder=loggeduser.Email;
dob.value = loggeduser.DOB || "";
phone.value = loggeduser.Phone || "";
address.value = loggeduser.Address || "";
pin.value = loggeduser.Pin || "";
city.value = loggeduser.City || "";
country.value = loggeduser.Country || "";
github.value = loggeduser.Github || "";

function change() {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {

        if (users[i].Email == loggeduser.Email) {

            users[i].DOB = dob.value;
            users[i].Phone = phone.value;
            users[i].Address = address.value;
            users[i].Pin = pin.value;
            users[i].City = city.value;
            users[i].Country = country.value;
            users[i].Github = github.value;
            loggeduser = users[i];
            break;
        }
    }
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggeduser", JSON.stringify(loggeduser));
    alert("Profile updated successfully.");
}

function cancel() {

    fullname.value = loggeduser.Name + " " + loggeduser.Lastname;
    email.value = loggeduser.Email;

    dob.value = loggeduser.DOB || "";
    phone.value = loggeduser.Phone || "";
    address.value = loggeduser.Address || "";
    pin.value = loggeduser.Pin || "";
    city.value = loggeduser.City || "";
    country.value = loggeduser.Country || "";
    github.value = loggeduser.Github || "";

}

function logout() {
    localStorage.removeItem("loggeduser");
    window.location.href = "./landing page.html";
}
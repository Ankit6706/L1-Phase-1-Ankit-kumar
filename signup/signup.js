
        function checkx(){
            let first=document.getElementById("fname").value;
            let last=document.getElementById("lname").value;
            let mail=document.getElementById("mail").value;
            let password=document.getElementById("pass").value;
            let confirm=document.getElementById("conf").value;
            let checkbox=document.getElementById("checkb");

            if(first==""||last==""||mail==""||password==""||confirm==""){
                alert("All fields are mandatory");
            }
            else if(first.length<2||last.length<2){
                alert("Enter valid Name");
            }
            else if(password<8){
                alert("Password must be of at least 8 character's");
            }
            else if(confirm!=password){
                alert("Password and confirm password must be same");
            }
            else if(!checkbox.checked){
                alert("please read terms & conditions");
            }
            else{
                alert("Account created successfully")
                return true;
            }
        }

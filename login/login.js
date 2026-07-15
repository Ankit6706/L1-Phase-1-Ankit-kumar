 
        function scr(){
            let x=document.getElementById("mail").value;
            let y=document.getElementById("password").value;
            if(x==""||y==""){
                alert("All fields are mandatory");
                return false;
            }
            else if(y.length<6){
                alert("passwort must be of atleast 6 character");
                return false;
            }
            else{
                alert("Logged in successfully");
                
            }

        }
    
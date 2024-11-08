function Validate(){
var U_name = document.getElementById("Username").value
var p_word = document.getElementById("PW").value
    var username = "Bhanuprasad"
    var password = "Bhanuprasad"
    console.log(U_name);
    console.log(p_word);
    if (U_name === username && p_word === password){
        window.alert("Login Successful")
    }
    else{
        window.alert("Invalid Username or Password")
    }
}
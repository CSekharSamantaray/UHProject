function loginClick(){
    var usr = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var warning = document.getElementById("warningmsg");
    // Clear the Warning message first if there is any.
    warning.style.display = "none"; 
    // If username and password are vallid then navigate to the Home page.
    if (usr == "admin" && pass == "admin" ){ 
        window.location.href = "default.html";
    }
    // If username and password are not vallidated then display the error message.
    else{ 
        warning.style.display = "block";
    }

}
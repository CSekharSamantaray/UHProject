{  //Login Page Code inside this block.

    function loginClick(){  //Login button click function call.
        var usr = document.getElementById("username").value;
        var pass = document.getElementById("password").value;

        var warning = document.getElementById("warningmsg");
        // Clear the Warning message first if there is any.
        warning.style.display = "none"; 
        // If username and password are vallid then navigate to the Home page.
        if (usr == "admin" && pass == "admin" ){ 
            sessionStorage.setItem("username", usr);
            window.location.href = "default.html";
        }
        // If username and password are not vallidated then display the error message.
        else{ 
            warning.style.display = "block";
            if(usr == ""){
                warning.innerText = "Please enter the username.";
            }
            else if(pass == ""){
                warning.innerText = "Please enter the password.";
            }
            else if (usr != "admin" || pass != "admin"){
                warning.innerText = "The user credentials entered are incorrect. Please enter correct credentials to login.";
            }
            
        }
    }
}

{ //Home page Code inside this block. (default.html)

    function bodyOnLoad(){  //bodyonload function call.
        var username = sessionStorage.getItem("username");
        if (username == null || username == ""){
            window.location.href = "login.html";
            return;
        }
        var loggedinuser = document.getElementById("loggedinuser");
        loggedinuser.innerHTML = "<strong>Logged In User : " + sessionStorage.getItem("username") + "</strong>";
    }

    function logoutClicked(){  //Logout link function call.
        sessionStorage.setItem("username", "");
        window.location.href = "login.html";
    }

    
    function menuClicked(menuName){  //Navbar menu option clicked function which accepts the menu name to process.
        if (menuName == 'Hotels'){
            $("#divPageContainer").load("hotels.html"); 
        }
        else if(menuName == 'Aviation') {
            $("#divPageContainer").load("aviation.html"); 
        }
        else if(menuName == 'Cruise') {
            $("#divPageContainer").load("cruise.html"); 
        }
        else if(menuName == 'Rail') {
            $("#divPageContainer").load("rail.html"); 
        }
        else if(menuName == 'Tours') {
            $("#divPageContainer").load("tours.html"); 
        }
        else if(menuName == 'About') {
            $("#divPageContainer").load("about.html"); 
        }
        else if(menuName == 'Services') {
            $("#divPageContainer").load("services.html"); 
        }
        else if(menuName == 'Contact Us') {
            $("#divPageContainer").load("contactus.html"); 
        }
    }
}

{  // Aviation Page Code inside this block. (aviation.html)

    function searchFlight(){ //Search Flights button click function call.
alert("Submit called");
    }
}
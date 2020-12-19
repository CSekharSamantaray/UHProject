{
    //Login Page Code inside this block.

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
}

{
    //Home page Code inside this block. (default.html)

    //Navbar menu option clicked function which accepts the menu name to process.
    function menuClicked(menuName){
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
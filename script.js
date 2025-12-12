
function validateForm() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var error = document.getElementById("errorMsg");

    if (user == "") {
        alert("Please enter a username.");
        if(error) error.innerHTML = "Username is required*";
        return false;
    }

    if (pass == "") {
        alert("Please enter a password.");
        if(error) error.innerHTML = "Password is required*";
        return false;
    }

    alert("Login Successful! Welcome to Eventsphere.");
    return true;
}


function bookEvent() {
    
    var name = document.getElementById("bName").value;
    var date = document.getElementById("bDate").value;
    var type = document.getElementById("bType").value;
    
    
    var messageBox = document.getElementById("bookingMessage");

    messageBox.style.color = "#27ae60"; 
    messageBox.innerHTML = "✅ Success! Thank you " + name + ". Your " + type + " event has been booked for " + date + ".";

    
    document.getElementById("bName").value = "";
    document.getElementById("bDate").value = "";
    
    
    return false;
}
function welcome() {
    var userName = prompt("enter your name...");
    if (userName != null) {
        sayWelcome(userName);
    }
}
function sayWelcome(name) {
    alert("Welcome " + name + " To MY CV");
}

welcome()
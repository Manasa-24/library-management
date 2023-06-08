// document.getElementById("login").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if (authenticateUser(username, password)) {
//       console.log("Authentication successful. Redirecting to the dashboard...");
//     } else {
//               console.log("Authentication failed. Please check your credentials.");
//     }
//   });
  
//   function authenticateUser(username, password) {
//     var amanasa = "admin";
//     var amanasa = "password";
//     if (username === amanasa && password === amanasa) {
//       return true; 
//     } else {
//       return false; 
//     }
//   }

document.getElementById("login").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username.trim() === "" || password.trim() === "") {
    alert("Please fill in your credentials.");
    return;
  }

  if (authenticateUser(username, password)) {
    window.location.href = "./bookslist/bookslist.html"; 
  } else {
    alert("Invalid username or password.");
  }
});

function authenticateUser(username, password) {
  var validUsername = "admin";
  var validPassword = "password";

  if (username === validUsername && password === validPassword) {
    return true; 
  } else {
    return false;
  }
}

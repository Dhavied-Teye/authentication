const registerForm = document.getElementById("register");
registerForm.addEventListener("submit", registerUser);

function registerUser(event) {
  event.preventDefault(); //prevent the default reload of email
  //Collect the email input
  const email = document.getElementById("email").value;
  //Collect the password input
  const password = document.getElementById("password").value;
  //Validate inputs
  //Save email and password

  //Provide feedback

  console.log(email, password);
}

// write a function that takes first name and last name and returns full name

// function userName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// const myName = userName("David", "Teye");
// const nameOne = userName("micheal", "scofield");
// const nameTwo = userName("john", "snow");
// const nameThree = userName("aleo", "black");

// console.log(myName, nameOne, nameTwo, nameThree);

// function userGreet(greet1, greet2) {
//   return `${greet1} ${greet2}`;
// }

// const goodDay = userGreet("good", "morning");
// console.log(goodDay);

//Write a function that takes an email and returns the email provider
function userMailProvider(email) {
  const startAt = email.indexOf("@") + 1;
  return email.slice(startAt);
}

const emailProvider = userMailProvider("kay@gmail.com");
console.log(emailProvider);
//kay@gmail.com

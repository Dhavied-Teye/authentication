fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.table(data);
    for (const product of data) {
      // Create the product div
      const div = document.createElement("div"); //create a div
      div.classList.add("flex", "flex-col", "items-center");
      const h1 = document.createElement("h1"); //create a h1 and append to product div
      h1.innerText = product.title; //add text to h1
      h1.classList.add("text-2xl", "font-bold");
      div.appendChild(h1); //place h1 in the div.
      //create img and append to product div
      const img = document.createElement("img");
      img.setAttribute("src", product.image);
      img.setAttribute("alt", product.title);
      img.classList.add("h-[250px]");
      div.appendChild(img);
      //Append the product div into the DOM
      const parent = document.getElementById("products"); //target products div on the html
      parent.appendChild(div); //place div in products div
    }
  });

//write a function that takes full name and then return the fullname with the surname all in caps
//where fullname follows the format <firstname othernames surname>

// function transformName(firstName, lastName) {
//   const capsName = (lastName.style.textTransform = "uppercase");
//   return `%{firstName} %{lastName}`;
// }
// transformName("David", "Teye");

// function transformName(firstName, lastName) {
//   const capsName = lastName.toUpperCase(); // Correctly converting lastName to uppercase
//   return `${firstName} ${capsName}`; // Correct string interpolation
// }

// console.log(transformName("David", "Teye"));
// console.log(transformName("David", "narh"));
// console.log(transformName("David", "king"));

function transformFullName(fullName) {
  // split fullName based on space
  const nameParts = fullName.split(" ");
  //determine the last index
  const lastIndex = nameParts.length - 1;
  //replace the lastIndex element with the UPPERCASE of itself
  nameParts[lastIndex] = nameParts[lastIndex].toUpperCase();
  //join the array with space and return
  return nameParts.join(" ");
}

const myName = transformFullName("Michael Kwame Hammond");
console.log(myName);

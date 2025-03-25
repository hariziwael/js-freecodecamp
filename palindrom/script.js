const textInput = document.getElementById("text-input");
const checkBtn =document.getElementById("check-btn");
const res = document.getElementById("result");

checkBtn.addEventListener("click", ()=> {
  if (!textInput.value) {
        alert("Please input a value.");
        return;
    }

    // Normalize input: remove non-alphanumeric characters & convert to lowercase
    const cleanedText = textInput.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const isPalindrome = cleanedText === [...cleanedText].reverse().join("");

    // Display result while keeping the original text
    res.textContent = isPalindrome
        ? `${textInput.value} is a palindrome.`
        : `${textInput.value} is not a palindrome.`;















  // if (textInput.value === "") {
  //       alert("Please input a value.");
  // }
  // if (textInput.value === "A"){
  //   res.innerText = "A is a palindrome"
  // }
  // if (textInput.value === "eye"){
  //   res.innerText = "eye is a palindrome"
  // }
  // if (textInput.value === "_eye"){
  //   res.innerText = "_eye is a palindrome"
  // }
  // if (textInput.value === "race car"){
  //   res.innerText = "race car is a palindrome"
  // }
  // if (textInput.value === "not a palindrome"){
  //   res.innerText = "not a palindrome is not a palindrome"
  // }
  // if(textInput.value === "A man, a plan, a canal. Panama"){
  //   res.innerText = "A man, a plan, a canal. Panama is a palindrome"
  // }
  // if(textInput.value === "never odd or even"){
  //   res.innerText = "never odd or even is a palindrome"
  // }
  // if (textInput.value === "nope"){
  //   res.innerText = "nope is not a palindrome"
  // }
  // if (textInput.value === "almostomla"){
  //   res.innerText = "almostomla is not a palindrome"
  // }
  // if (textInput.value === "My age is 0, 0 si ega ym."){
  //   res.innerText = "My age is 0, 0 si ega ym. is a palindrome"
  // }
  // if (textInput.value === "1 eye for of 1 eye."){
  //   res.innerText = "1 eye for of 1 eye. is not a palindrome"
  // }
  // if (textInput.value === "0_0 (: /-\ :) 0-0"){
  //   res.innerText = "0_0 (: /-\ :) 0-0 is a palindrome"
  // }
  // if (textInput.value === "five|\_/|four"){
  //   res.innerText = "five|\_/|four is not a palindrome"
  // }

  // if (!textInput.value) {
  //       res.innerText = "Please enter a value.";
  //       return;
  //   }

  //   // Normalize input: remove non-alphanumeric characters & convert to lowercase
  //   const normalizedStr = textInput.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  //   // Check if it's a palindrome
  //   const isPalindrome = normalizedStr === [...normalizedStr].reverse().join("");

  //   // Display result
  //   res.innerText = isPalindrome ? "It is a palindrome!" : "It is not a palindrome.";
  
  
});
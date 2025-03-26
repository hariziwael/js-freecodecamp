🥗 Calorie Counter App
A simple calorie tracking app that lets users:
✅ Set a calorie budget
✅ Add food entries (breakfast, lunch, dinner, snacks)
✅ Track exercise and calorie expenditure
✅ View surplus or deficit in calories

📌 How It Works
1️⃣ Enter your daily calorie budget.
2️⃣ Add food entries under different categories.
3️⃣ Enter exercise calories burned.
4️⃣ Click Calculate to see your calorie balance.
5️⃣ Clear the form anytime with Reset.

⚙️ JavaScript Features
1️⃣ Add New Food Entries
Dynamically appends input fields for food items in selected categories.


    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
      const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
      const HTMLString = `
      <label for="${entryDropdown.value}-${entryNumber}-name">إدراج ${entryNumber} اسم</label>
      <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="اسم" />
      <label for="${entryDropdown.value}-${entryNumber}-calories">إدراج ${entryNumber} سعرات حرارية</label>
      <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="سعرات حرارية" />`;
      targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
    }
2️⃣ Clean and Validate Inputs
Prevents invalid characters and scientific notation.

 
    function cleanInputString(str) {
      return str.replace(/[+-\s]/g, '');
    }
    
    function isInvalidInput(str) {
      return str.match(/\d+e\d+/i);
    }
3️⃣ Calculate Calories
Adds up all calorie inputs.

Deducts exercise calories.

Displays surplus or deficit message.


    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastCalories = getCaloriesFromInputs(document.querySelectorAll("#breakfast input[type='number']"));
      const lunchCalories = getCaloriesFromInputs(document.querySelectorAll("#lunch input[type='number']"));
      const dinnerCalories = getCaloriesFromInputs(document.querySelectorAll("#dinner input[type='number']"));
      const snacksCalories = getCaloriesFromInputs(document.querySelectorAll("#snacks input[type='number']"));
      const exerciseCalories = getCaloriesFromInputs(document.querySelectorAll("#exercise input[type='number']"));
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) return;
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'فائض' : 'عجز';
    
      output.innerHTML = `
        <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} ${surplusOrDeficit} السعرات حرارية</span>
        <hr>
        <p>${budgetCalories} السعرات الحرارية المدرجة في الميزانية</p>
        <p>${consumedCalories} السعرات الحرارية المستهلكة</p>
        <p>${exerciseCalories} السعرات الحرارية المحروقة</p>
      `;
    
      output.classList.remove('hide');
    }
4️⃣ Reset the Form
Clears all inputs and resets the UI.


    function clearForm() {
      document.querySelectorAll('.input-container').forEach(container => container.innerHTML = '');
      budgetNumberInput.value = '';
      output.innerText = '';
      output.classList.add('hide');
    }
🏗 How to Run
1️⃣ Clone the repo:


git clone https://github.com/hariziwael/js-freecodecamp/blob/main/calorie%20counter/script.js
cd calorie-counter

2️⃣ Open index.html in your browser.

📌 Next Steps
🚀 Enhancements:

Add local storage to save entries.

Improve UI with animations.

Add a graph to visualize calorie trends.

🤝 Contributing
Want to improve this project? Fork the repo and submit a PR!

Would you like a live demo link or screenshots added? 😊

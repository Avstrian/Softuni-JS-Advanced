function calorieObject(arrayStrings) {
    foodCalories = {}

    for (let i = 0; i < arrayStrings.length; i+=2) {
        foodCalories[arrayStrings[i]] = Number(arrayStrings[i + 1]);
    }

    console.log(foodCalories)
}
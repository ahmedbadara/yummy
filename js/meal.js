// meal.js
export async function fetchRandomMeal() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      if (data && data.meals && data.meals.length > 0) {
        displayMeal(data.meals[0]);
      } else {
        console.error("No meal data found.");
      }
    } catch (error) {
      console.error("Error fetching meal data:", error);
    }
  }
  
  function displayMeal(meal) {
    const mealData = `
      <h3>${meal.strMeal}</h3>
      <p>${meal.strCategory}</p>
      <p>${meal.strArea}</p>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img-fluid">
      <p>${meal.strInstructions}</p>
    `;
    $("#mealData").html(mealData);
  }
  
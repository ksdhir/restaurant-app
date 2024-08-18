const labelMapping = {
  calories: 'Calories',
  protein: 'Protein',
  carbs: 'Carbohydrates',
  fat: 'Fat',
  sugars: 'Sugars',
  sodium: 'Sodium',
}

export const formatNutritionData = (nutritionData) => {
  return Object.keys(nutritionData).map((key) => ({
    label: labelMapping[key],
    value: `${nutritionData[key]} ${
      key === 'calories' ? 'kcal' : key !== 'sodium' ? 'g' : 'mg'
    }`,
  }))
}

export enum MealCategories {
  BREAKFAST = 'Breakfast',
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
}

export type MealInput = string;
export type Category = string;

export type MealsComponentProps = {
  mealCategories: MealCategories[];
  handleMealInput: (text: MealInput, category: MealCategories) => void;
};

export { View, Text, TextInput, TouchableOpacity } from 'react-native';

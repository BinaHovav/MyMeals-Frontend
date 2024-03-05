export { View, Text, TextInput, TextInputProps, TouchableOpacity, FlatList } from 'react-native';

export enum MealCategories {
  BREAKFAST = 'Breakfast',
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
}

export type MealInput = string;
export type MealList = string[];
export type Category = string;

export type MealsComponentProps = {
  mealCategories: MealCategories[];
};

export enum MealCategories {
  BREAKFAST = 'Breakfast',
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
}

export type MealText = string;
export type Category = string;

export interface AppButton {
  id: string;
  label: string;
  onButtonPress: () => void;
}

export enum Day {
  Sun = 'Sunday',
  Mon = 'Monday',
  Tue = 'Tuesday',
  Wed = 'Wednesday',
  Thu = 'Thursday',
  Fri = 'Friday',
}

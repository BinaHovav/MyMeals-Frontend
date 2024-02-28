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

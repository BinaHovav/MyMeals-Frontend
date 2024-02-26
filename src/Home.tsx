import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

import DaySelector from './components/DaySelector';
import Meals from './components/Meals';

export enum MealCategories {
  BREAKFAST = 'Breakfast',
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
}

export enum Day {
  Sun = 'Sunday',
  Mon = 'Monday',
  Tue = 'Tuesday',
  Wed = 'Wednesday',
  Thu = 'Thursday',
  Fri = 'Friday',
}

const HomePage: React.FC = () => {
  const [meals, setMeals] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);

  const appButtons = [
    { id: 'recipes', label: 'Recipes', onButtonPress: () => console.log('recipes') },
    { id: 'chatGPT', label: 'Consult with chatGPT', onButtonPress: () => console.log('chatGPT') },
  ];

  type MealText = string;
  type Category = string;

  const handleBreakfastText = (text: MealText, category: Category) => {
    console.log('text, category', text, category);
  };

  const handleDayPress = (day: Day | null): void => {
    setSelectedDay(day);
  };

  const getDay = (day: Day | null): string => {
    return day ? day : '';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          style={styles.container}
        >
          <View style={styles.form}>
            <DaySelector
              daysOfWeek={Object.values(Day)}
              selectedDay={selectedDay}
              onSelectDay={handleDayPress}
            />
            <Text style={styles.title}>
              {selectedDay ? `${getDay(selectedDay)} menu` : 'Select a day'}
            </Text>
            {selectedDay ? (
              <Meals
                handleBreakfastText={handleBreakfastText}
                mealCategories={Object.values(MealCategories)}
                meals={meals}
              />
            ) : (
              <View style={styles.form}>
                <Text>Welcome to MyMeals!</Text>
              </View>
            )}
            <View style={styles.appButtonsContainer}>
              {appButtons.map(({ id, label, onButtonPress }) => (
                <TouchableOpacity key={id} style={styles.button} onPress={onButtonPress}>
                  <Text style={styles.buttonText}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.error}>{errorMessage} </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

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

type DayOfWeek = {
  short: string;
  full: string;
};

const HomePage: React.FC = () => {
  const [meals, setMeals] = useState<string[]>(['', '', '']);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const mealCategories: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  const daysOfWeek: DayOfWeek[] = [
    { short: 'Sun', full: 'Sunday' },
    { short: 'Mon', full: 'Monday' },
    { short: 'Tue', full: 'Tuesday' },
    { short: 'Wed', full: 'Wednesday' },
    { short: 'Thu', full: 'Thursday' },
    { short: 'Fri', full: 'Friday' },
  ];

  const handleMealChange = (text: string, index: number): void => {
    const updatedMeals = [...meals];
    updatedMeals[index] = text;
    setMeals(updatedMeals);
  };

  const handleDayPress = (day: string): void => {
    setSelectedDay(day);
  };

  const getFullDayName = (shortDay: string): string => {
    const dayObject = daysOfWeek.find((day) => day.short === shortDay);
    return dayObject ? dayObject.full : '';
  };

  const buttons = [
    { label: 'Recipes', onPress: () => console.log('recipes') },
    {
      label: 'Consult with chatGPT',
      onPress: () => console.log('chatGPT'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          style={styles.container}
        >
          <View style={styles.form}>
            <DaySelector
              daysOfWeek={daysOfWeek}
              selectedDay={selectedDay}
              onSelectDay={handleDayPress}
            />
            <Text style={styles.title}>
              {selectedDay ? `${getFullDayName(selectedDay)} menu` : 'Select a day'}
            </Text>
            <View>
              {mealCategories.map((category, index) => (
                <View key={index}>
                  <Text style={styles.label}>{category}</Text>
                  <TextInput
                    style={styles.input}
                    value={meals[index]}
                    placeholder={`What are you having for ${category.toLowerCase()}?`}
                    onChangeText={(text) => handleMealChange(text, index)}
                  />
                </View>
              ))}
            </View>
            <View style={styles.buttonsContainer}>
              {buttons.map((button, index) => (
                <TouchableOpacity key={index} style={styles.button} onPress={button.onPress}>
                  <Text style={styles.buttonText}>{button.label}</Text>
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

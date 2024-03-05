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
  Image,
} from 'react-native';
import styles from './styles';

import DaySelector from './components/daySelector/DaySelector';
import Meals from './components/meals/Meals';

import { MealCategories } from './models/meals.model';
import { AppButton, Day } from './models/app.model';

const Home: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);

  const homeButtons: AppButton[] = [
    { id: 'recipes', label: 'Recipes', onButtonPress: () => console.log('recipes') },
    { id: 'chatGPT', label: 'Consult with chatGPT', onButtonPress: () => console.log('chatGPT') },
  ];

  const handleDayPress = (day: Day): void => {
    setSelectedDay(day);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/meals-logo.png')} />
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
            <Text style={styles.title}>{selectedDay ? `${selectedDay} menu` : 'Select a day'}</Text>
            {selectedDay ? (
              <Meals mealCategories={Object.values(MealCategories)} />
            ) : (
              <View style={styles.form}>
                <Text>Welcome to MyMeals!</Text>
              </View>
            )}
            <View style={styles.homeButtonsContainer}>
              {homeButtons.map(({ id, label, onButtonPress }) => (
                <TouchableOpacity key={id} style={styles.button} onPress={onButtonPress}>
                  <Text style={styles.buttonText}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

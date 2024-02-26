import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from '../styles';
import { MealCategories } from '../Home';

type MealsComponentProps = {
  mealCategories: MealCategories[];
  meals: string[];
  handleBreakfastText: (text: string, category: MealCategories) => void;
};

const Meals: React.FC<MealsComponentProps> = ({ mealCategories, handleBreakfastText }) => {
  const [textMeal, setMealText] = useState('');
  const [breakfastText, setBreakfastText] = useState('');
  const [lunchText, setLunchText] = useState('');
  const [dinnerText, setDinnerText] = useState('');

  const onMealEnter = (text: string, category: MealCategories) => {
    switch (category) {
      case MealCategories.BREAKFAST:
        setBreakfastText(text);
        break;
      case MealCategories.LUNCH:
        setLunchText(text);
        break;
      case MealCategories.DINNER:
        setDinnerText(text);
        break;
      default:
        break;
    }
  };

  const getCategoryInput = (category: MealCategories) => {
    switch (category) {
      case MealCategories.BREAKFAST:
        return breakfastText;
      case MealCategories.LUNCH:
        return lunchText;
      case MealCategories.DINNER:
        return dinnerText;
      default:
        return '';
    }
  };

  return (
    <View>
      {mealCategories.map((category, index) => (
        <View key={index}>
          <Text style={styles.label}>{category}</Text>
          <TextInput
            style={styles.input}
            value={getCategoryInput(category)}
            placeholder={`What are you having for ${category.toLowerCase()}?`}
            onChangeText={(text) => {
              onMealEnter(text, category);
            }}
          />
          <TouchableOpacity
            onPress={() => handleBreakfastText(getCategoryInput(category), category)}
          >
            <Text>Enter</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => onMealEnter('', '')}> */}
          {/* <Text style={styles.renderedText}>
          {category === 'Breakfast' ? breakfastText : category === 'Lunch' ? lunchText : dinnerText}
        </Text> */}
          {/* <Text style={styles.renderedText}>
            {category === 'Breakfast'
              ? breakfastText
              : category === 'Lunch'
              ? lunchText
              : dinnerText}
          </Text> */}
        </View>
      ))}
    </View>
  );
};

export default Meals;

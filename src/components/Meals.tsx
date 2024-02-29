import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { MealCategories } from '../models/meals.model';

type MealsComponentProps = {
  mealCategories: MealCategories[];
  handleMealText: (text: MealText, category: MealCategories) => void;
};

type MealText = string;

const Meals: React.FC<MealsComponentProps> = ({ mealCategories, handleMealText }) => {
  const [mealText, setMealText] = useState<Record<MealCategories, MealText>>({
    [MealCategories.BREAKFAST]: '',
    [MealCategories.LUNCH]: '',
    [MealCategories.DINNER]: '',
  });
  const [showEnteredText, setShowEnteredText] = useState<Record<MealCategories, boolean>>({
    [MealCategories.BREAKFAST]: false,
    [MealCategories.LUNCH]: false,
    [MealCategories.DINNER]: false,
  });

  const onMealEnter = (text: MealText, category: MealCategories) => {
    setMealText((prev) => ({
      ...prev,
      [category]: text,
    }));
  };

  const getCategoryInput = (category: MealCategories) => {
    return mealText[category];
  };

  const handleMealTextPress = (category: MealCategories) => {
    handleMealText(getCategoryInput(category), category);
    setShowEnteredText((prev) => ({
      ...prev,
      [category]: true,
    }));
  };

  return (
    <View>
      {mealCategories.map((category, index) => (
        <View key={index}>
          <Text style={styles.label}>{category}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={getCategoryInput(category)}
              placeholder={`What are you having for ${category.toLowerCase()}?`}
              onChangeText={(text) => onMealEnter(text, category)}
            />
            <TouchableOpacity onPress={() => handleMealTextPress(category)}>
              <Text style={styles.enterButton}>+</Text>
            </TouchableOpacity>
          </View>
          {showEnteredText[category] && (
            <Text style={styles.enteredText}>{getCategoryInput(category)}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

export default Meals;

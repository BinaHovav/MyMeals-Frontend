import React, { useState } from 'react';
import styles from '../../styles';
import {
  MealCategories,
  MealInput,
  MealsComponentProps,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from '../../models/meals.model';

const Meals: React.FC<MealsComponentProps> = ({ mealCategories, handleMealInput }) => {
  const [mealInput, setMealInput] = useState<Record<MealCategories, MealInput>>({
    [MealCategories.BREAKFAST]: '',
    [MealCategories.LUNCH]: '',
    [MealCategories.DINNER]: '',
  });
  const [showUserInput, setShowUserInput] = useState<Record<MealCategories, boolean>>({
    [MealCategories.BREAKFAST]: false,
    [MealCategories.LUNCH]: false,
    [MealCategories.DINNER]: false,
  });

  const onMealEnter = (text: MealInput, category: MealCategories) => {
    setMealInput((prev) => ({
      ...prev,
      [category]: text,
    }));
  };

  const handleMealInputPress = (category: MealCategories) => {
    handleMealInput(mealInput[category], category);
    setShowUserInput((prev) => ({
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
              value={mealInput[category]}
              placeholder={`What are you having for ${category.toLowerCase()}?`}
              onChangeText={(text) => onMealEnter(text, category)}
            />
            <TouchableOpacity
              onPress={() => handleMealInputPress(category)}
              testID={`plus-button-${category}`}
            >
              <Text style={styles.enterButton}>+</Text>
            </TouchableOpacity>
          </View>
          {showUserInput[category] && <Text style={styles.enteredText}>{mealInput[category]}</Text>}
        </View>
      ))}
    </View>
  );
};

export default Meals;

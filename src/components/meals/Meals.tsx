import React, { useState } from 'react';
import styles from '../../styles';
import {
  MealCategories,
  MealInput,
  MealList,
  MealsComponentProps,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from '../../models/meals.model';

const MAX_ITEMS = 3;

const Meals: React.FC<MealsComponentProps> = ({ mealCategories }) => {
  const [mealInput, setMealInput] = useState<Record<MealCategories, MealInput>>({
    [MealCategories.BREAKFAST]: '',
    [MealCategories.LUNCH]: '',
    [MealCategories.DINNER]: '',
  });
  const [mealList, setMealList] = useState<Record<MealCategories, MealList>>({
    [MealCategories.BREAKFAST]: [],
    [MealCategories.LUNCH]: [],
    [MealCategories.DINNER]: [],
  });
  const [enteredText, setEnteredText] = useState<Record<MealCategories, MealInput>>({
    [MealCategories.BREAKFAST]: '',
    [MealCategories.LUNCH]: '',
    [MealCategories.DINNER]: '',
  });

  const onMealInputChange = (text: MealInput, category: MealCategories) => {
    setMealInput((prev) => ({
      ...prev,
      [category]: text,
    }));
  };

  const handleMealInputPress = (category: MealCategories) => {
    const currentList = [...mealList[category], mealInput[category]];

    if (currentList.length <= MAX_ITEMS) {
      setEnteredText((prev) => ({
        ...prev,
        [category]: currentList,
      }));

      setMealList((prev) => ({
        ...prev,
        [category]: currentList,
      }));
    }

    setMealInput((prev) => ({
      ...prev,
      [category]: '',
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
              onChangeText={(text) => onMealInputChange(text, category)}
            />
            <TouchableOpacity
              onPress={() => handleMealInputPress(category)}
              testID={`plus-button-${category}`}
            >
              <Text style={styles.enterButton}>+</Text>
            </TouchableOpacity>
          </View>
          {enteredText[category].length > 0 ? (
            <>
              <FlatList
                data={enteredText[category].slice(0, MAX_ITEMS)}
                keyExtractor={(item, itemIndex) => itemIndex.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={styles.enteredItem}>
                    <Text>{item}</Text>
                  </View>
                )}
              />
              {enteredText[category].length >= MAX_ITEMS && (
                <Text style={styles.limitMessage}>
                  You've reached the maximum of {MAX_ITEMS} items per meal
                </Text>
              )}
            </>
          ) : null}
        </View>
      ))}
    </View>
  );
};

export default Meals;

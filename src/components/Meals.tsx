import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';

type MealsComponentProps = {
  mealCategories: string[];
  meals: string[];
  handleMealChange: (text: string, index: number) => void;
};

const MealsComponent: React.FC<MealsComponentProps> = ({
  mealCategories,
  meals,
  handleMealChange,
}) => (
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
);

export default MealsComponent;

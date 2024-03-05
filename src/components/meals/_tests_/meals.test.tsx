import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Meals from '../Meals';
import { MealCategories } from '../../../models/meals.model';

// Mocking the handleMealInput function
const mockHandleMealInput = jest.fn();

// Define your test cases
describe('Meals Component', () => {
  it('renders input and button for each meal category', () => {
    const mealCategories = [MealCategories.BREAKFAST, MealCategories.LUNCH, MealCategories.DINNER];
    const { getByPlaceholderText, getByTestId } = render(
      <Meals mealCategories={mealCategories} handleMealInput={mockHandleMealInput} />
    );

    mealCategories.forEach((category) => {
      expect(
        getByPlaceholderText(`What are you having for ${category.toLowerCase()}?`)
      ).toBeDefined();
      expect(getByTestId(`plus-button-${category}`)).toBeDefined();
    });
  });

  it('handles meal input and press correctly', () => {
    const mealCategories = [MealCategories.BREAKFAST];
    const { getByPlaceholderText, getByTestId } = render(
      <Meals mealCategories={mealCategories} handleMealInput={mockHandleMealInput} />
    );

    // Simulate typing in the input
    fireEvent.changeText(
      getByPlaceholderText(`What are you having for ${MealCategories.BREAKFAST.toLowerCase()}?`),
      'Scrambled Eggs'
    );

    // Simulate pressing the enter button
    fireEvent.press(getByTestId('plus-button-Breakfast'));

    // Expect the handleMealInput function to be called with the correct arguments
    expect(mockHandleMealInput).toHaveBeenCalledWith('Scrambled Eggs', MealCategories.BREAKFAST);
  });
});

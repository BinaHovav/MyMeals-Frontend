import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Meals from './Meals';
import { MealCategories } from '../../models/meals.model';

const mockHandleMealInput = jest.fn();

describe('Meals Component', () => {
  it('renders input and button for each meal category', () => {
    const mealCategories = Object.values(MealCategories);
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

    fireEvent.changeText(
      getByPlaceholderText(`What are you having for ${MealCategories.BREAKFAST.toLowerCase()}?`),
      'Scrambled Eggs'
    );

    fireEvent.press(getByTestId('plus-button-Breakfast'));

    expect(mockHandleMealInput).toHaveBeenCalledWith('Scrambled Eggs', MealCategories.BREAKFAST);
  });
});

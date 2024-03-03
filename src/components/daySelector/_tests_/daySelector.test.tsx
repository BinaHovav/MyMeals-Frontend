import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DaySelector from '../DaySelector';
import { Day } from '../../../models/app.model';

describe('DaySelector', () => {
  const daysOfWeek: Day[] = [Day.Sun, Day.Mon, Day.Tue, Day.Wed, Day.Thu, Day.Fri];

  test('renders days correctly', () => {
    const { getByText } = render(
      <DaySelector daysOfWeek={daysOfWeek} selectedDay={null} onSelectDay={() => {}} />
    );

    daysOfWeek.forEach((day) => {
      const abbreviatedDay = day.substring(0, 3);
      expect(getByText(abbreviatedDay)).toBeDefined();
    });
  });

  test('calls onSelectDay when a day is pressed', () => {
    const onSelectDayMock = jest.fn();
    const { getByText } = render(
      <DaySelector daysOfWeek={daysOfWeek} selectedDay={null} onSelectDay={onSelectDayMock} />
    );

    fireEvent.press(getByText('Sun'));
    expect(onSelectDayMock).toHaveBeenCalledWith(Day.Sun);
  });
});

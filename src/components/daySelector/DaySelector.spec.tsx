import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DaySelector from './DaySelector';
import { Day } from '../../models/app.model';

describe('DaySelector', () => {
  const daysOfWeek: Day[] = Object.values(Day);

  it('renders days correctly', () => {
    const { getByText } = render(
      <DaySelector daysOfWeek={daysOfWeek} selectedDay={null} onSelectDay={() => {}} />
    );

    daysOfWeek.forEach((day) => {
      expect(getByText(day)).toBeDefined();
    });
  });

  it('calls onSelectDay when a day is pressed', () => {
    const onSelectDayMock = jest.fn();
    const { getByText } = render(
      <DaySelector daysOfWeek={daysOfWeek} selectedDay={null} onSelectDay={onSelectDayMock} />
    );

    fireEvent.press(getByText(Day.Sun));
    expect(onSelectDayMock).toHaveBeenCalledWith(Day.Sun);
  });
});

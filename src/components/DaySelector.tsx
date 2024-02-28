import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { Day } from '../models/meals.model';

type DaySelectorProps = {
  daysOfWeek: Day[];
  selectedDay: Day | null;
  onSelectDay: (day: Day) => void;
};

const DaySelector: React.FC<DaySelectorProps> = ({ daysOfWeek, selectedDay, onSelectDay }) => {
  return (
    <View style={styles.daysContainer}>
      {daysOfWeek.map((day) => (
        <TouchableOpacity
          key={day}
          style={[styles.dayButton, selectedDay === day ? styles.selectedDayButton : null]}
          onPress={() => onSelectDay(day)}
        >
          <Text
            style={[
              styles.dayButtonText,
              selectedDay === day ? styles.selectedDayButtonText : null,
            ]}
          >
            {day.substring(0, 3)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DaySelector;

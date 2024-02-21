import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
// Define a type for the props expected by DaySelector
type DaySelectorProps = {
  daysOfWeek: { short: string; full: string }[];
  selectedDay: string | null;
  onSelectDay: (day: string) => void;
};

const DaySelector: React.FC<DaySelectorProps> = ({ daysOfWeek, selectedDay, onSelectDay }) => {
  return (
    <View style={styles.daysContainer}>
      {daysOfWeek.map((day) => (
        <TouchableOpacity
          key={day.short}
          style={[styles.dayButton, selectedDay === day.short ? styles.selectedDayButton : null]}
          onPress={() => onSelectDay(day.short)}
        >
          <Text
            style={[
              styles.dayButtonText,
              selectedDay === day.short ? styles.selectedDayButtonText : null,
            ]}
          >
            {day.short}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DaySelector;

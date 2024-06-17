import { useState } from "react";
import { View, Button, Platform, StyleSheet, Text } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";


type DatePickerFormProps = {
  onDateChange: (date: string) => void;
};

export default function DatePickerForm({ onDateChange }: DatePickerFormProps)  {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"date" | "time">("date");
  const [text, setText] = useState("Empty");

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    const formattedDate = formatDate(currentDate);
    setText(formattedDate);
    onDateChange(formattedDate);
  };

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${year}-${padZero(month)}-${padZero(day)} ${padZero(hours)}:${padZero(minutes)}`;
    return formattedDate;
  };

  const padZero = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const showMode = (currentMode: "date" | "time") => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
      <View style={styles.bottons}>
        <Text>{text}</Text>
        <Button onPress={() => showMode("date")} title="Fecha" />
        <Button onPress={() => showMode("time")} title="Hora" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottons:{
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});

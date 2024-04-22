import {

    GestureResponderEvent,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
  } from "react-native";
  import colors from "../src/colors";

type CustomButtonProps = {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  theme: "outline" | "fill";
  style?: ViewStyle;
  textStyle?: TextStyle;
  icono?: React.ReactNode;
};

export const CustomButton = ({
  text,
  onPress,
  theme,
  style,
  textStyle,
  icono,
}: CustomButtonProps) => {
    let themeStyle = fillTheme;
  if (theme === "fill") themeStyle = fillTheme;
  if (theme === "outline") themeStyle = outlineTheme;

  const appliedStyles: ViewStyle[] = [styles.button, themeStyle.button];
  if (style) appliedStyles.push(style);

  return (
    <TouchableOpacity
      style={appliedStyles}
      onPress={onPress}
    >
        <View style={{ gap: 16}}>{icono}</View>
        <Text style={[styles.text, themeStyle.text, textStyle]}>{text}</Text>
        
    </TouchableOpacity>
    );
};

const getColor = (theme: "fill" | "outline") => {
    if (theme === "fill") return "#fff";
    if (theme === "outline") return "#db1b68";
    return "#000";
  };

  const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        flexDirection: "row",
        padding: 8,
        paddingLeft: 16,
        borderRadius: 8,
        minHeight: 48,
        overflow: "hidden",
      },
      text: {
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
      },
  });

  const fillTheme = StyleSheet.create({
    button: {
      backgroundColor: colors.Red.light,
    },
    text: {
      color: "#fff",
    },
    disabled: {
      backgroundColor: "rgba(255,255,255,0.5)",
    },
  });
  
  const outlineTheme = StyleSheet.create({
    button: {
      backgroundColor: "#fff",
      borderColor: colors.Blue.dark,
      borderWidth: 2,
      alignContent: "center",
      // padding: 10,
      // borderRadius: 22,
    },
    text: {
      color: colors.Blue.dark,
    },
    disabled: {
      backgroundColor: "rgba(255,255,255,0.1)",
    },
  });
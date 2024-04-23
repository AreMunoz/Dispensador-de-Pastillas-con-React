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

   // Determina si hay un icono presente
   const hasIcon = !!icono;
   
  return (
    <TouchableOpacity style={appliedStyles} onPress={onPress}>
      <View style={{ marginRight: hasIcon ? 10 : 0 }}>
        {icono && <View>{icono}</View>}
      </View>
      <Text style={[styles.text, themeStyle.text, textStyle, hasIcon && { marginLeft: 20 }]}>
        {text}
      </Text>
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
    width: "100%",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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

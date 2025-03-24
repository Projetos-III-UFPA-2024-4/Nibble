import { TextInput, View } from "react-native";
import { styles } from "./textBoxLogin.style.js";
import { useState } from "react";

function TextBoxLogin(props) {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <View style={[styles.input, isFocused ? { borderColor: 'blue', borderWidth: 2 } : {}]}>
      <TextInput
        style={{ flex: 1 }}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        onChangeText={props.onChangeText}
        value={props.value}
        autoCapitalize="none"
        keyboardType={props.isPassword ? "default" : "email-address"}
        onFocus={() => {
          console.log(`Campo ${props.placeholder} recebeu foco`);
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

export default TextBoxLogin;
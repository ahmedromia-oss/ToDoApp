import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { InputFieldProps } from "../Props/InputFieldProps";

export const CustomInput: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  numberOfLines = 1,
  maxLength,
  style,
  inputStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={[styles.label, isFocused && styles.labelFocused]}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          multiline && styles.multilineContainer,
        ]}
      >
        <TextInput
          style={[
            styles.input,
            multiline && styles.multilineInput,
            inputStyle
          ]}
          placeholder={placeholder}
          placeholderTextColor="#666666"
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          maxLength={maxLength}
          textAlignVertical={multiline ? "top" : "center"}
          selectionColor="#ff8c42"
          {...props}
        />
      </View>
      {maxLength && value && (
        <Text style={styles.charCount}>
          {value.length}/{maxLength}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 8,
    letterSpacing: -0.2,
  },
  labelFocused: {
    color: "#ff8c42",
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: "#333333",
    borderRadius: 12,
    backgroundColor: "#1a1a1a",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainerFocused: {
    borderColor: "#ff8c42",
    backgroundColor: "#1f1f1f",
    shadowColor: "#ff8c42",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  multilineContainer: {
    minHeight: 100,
  },
  input: {
    padding: 16,
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "400",
    letterSpacing: -0.1,
    lineHeight: 22,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
    paddingTop: 16,
  },
  charCount: {
    fontSize: 12,
    color: "#666666",
    textAlign: "right",
    marginTop: 4,
    fontWeight: "500",
  },
});
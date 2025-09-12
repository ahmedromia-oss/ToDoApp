import React from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import { FloatingButtonProps } from "../Props/FloatingButtonProps";



export const FloatingButton = ({
  onPress,
  icon = "+",
  backgroundColor = "#ff8c42",
  size = 64,
  iconColor = "#0a0a0a",
  iconSize = 28,
}: FloatingButtonProps) => {
  const scaleValue = new Animated.Value(1);
  const rotateValue = new Animated.Value(0);

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 0.85,
        useNativeDriver: true,
      }),
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      })
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 4,
        tension: 60,
        useNativeDriver: true,
      }),
      Animated.timing(rotateValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      })
    ]).start();
  };

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          transform: [{ scale: scaleValue }],
        },
      ]}
    >
      {/* Outer glow ring */}
      <Animated.View
        style={[
          styles.glowRing,
          {
            width: size + 12,
            height: size + 12,
            borderRadius: (size + 12) / 2,
          },
        ]}
      />
      
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor,
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.95}
      >
        {/* Inner gradient effect */}
        <Animated.View
          style={[
            styles.innerGradient,
            {
              width: size - 4,
              height: size - 4,
              borderRadius: (size - 4) / 2,
            },
          ]}
        />
        
        {/* Subtle highlight */}
        <Animated.View
          style={[
            styles.highlight,
            {
              width: size - 16,
              height: size - 16,
              borderRadius: (size - 16) / 2,
            },
          ]}
        />

        <Animated.Text
          style={[
            styles.icon,
            {
              color: iconColor,
              fontSize: iconSize,
              lineHeight: iconSize + 2,
              transform: [{ rotate }],
            }
          ]}
        >
          {icon}
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 32,
    right: 24,
    zIndex: 1000,
    shadowColor: "#ff8c42",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 16,
  },
  glowRing: {
    position: "absolute",
    top: -6,
    left: -6,
    backgroundColor: "rgba(255, 140, 66, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(255, 140, 66, 0.3)",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  innerGradient: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    top: 2,
    left: 2,
  },
  highlight: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    top: 8,
    left: 8,
  },
  icon: {
    fontWeight: "200",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    zIndex: 1,
  },
});
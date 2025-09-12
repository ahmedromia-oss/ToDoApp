import { Check, Trash2 } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ToDoCardProps } from "../models/ToDoCardProps";

export const TodoCard = (
  { Title, describtion, completed, id, onDelete, onToggle }: ToDoCardProps,
) => {
  return (
    <View style={[styles.card, completed ? styles.cardCompleted : styles.cardActive]}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          completed ? styles.checkboxCompleted : styles.checkboxEmpty
        ]}
        onPress={() => onToggle(id)}
        activeOpacity={0.7}
      >
        {completed && <Check size={14} color="#0a0a0a" strokeWidth={3} />}
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Text
          style={[
            styles.title,
            completed ? styles.titleCompleted : styles.titleActive
          ]}
          numberOfLines={2}
        >
          {Title}
        </Text>

        {describtion && describtion.trim() !== "" && (
          <Text
            style={[
              styles.description,
              completed ? styles.descriptionCompleted : styles.descriptionActive
            ]}
            numberOfLines={3}
          >
            {describtion}
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(id)}
        activeOpacity={0.6}
      >
        <Trash2 size={18} color="#ff6b6b" strokeWidth={2} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  cardActive: {
    backgroundColor: '#1a1a1a',
    borderColor: '#333333',
    shadowColor: '#ff8c42',
    shadowOpacity: 0.1,
  },
  cardCompleted: {
    backgroundColor: '#151515',
    borderColor: '#2a2a2a',
    opacity: 0.7,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    marginRight: 14,
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  checkboxEmpty: {
    borderColor: '#555555',
    backgroundColor: 'transparent',
  },
  checkboxCompleted: {
    backgroundColor: '#ff8c42',
    borderColor: '#ff8c42',
    shadowColor: '#ff8c42',
    shadowOpacity: 0.3,
  },
  contentContainer: {
    flex: 1,
    marginRight: 14,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 6,
    letterSpacing: -0.2,
    lineHeight: 22,
  },
  titleActive: {
    color: '#ffffff',
  },
  titleCompleted: {
    color: '#666666',
    textDecorationLine: 'line-through',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.1,
  },
  descriptionActive: {
    color: '#aaaaaa',
  },
  descriptionCompleted: {
    color: '#555555',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    padding: 10,
    borderRadius: 10,
    marginTop: -2,
    backgroundColor: '#222222',
    borderWidth: 1,
    borderColor: '#333333',
  },
});
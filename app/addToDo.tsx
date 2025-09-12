import { CustomInput } from "@/Shared/components/InputField";
import { ToDoContext } from "@/ToDos/contexts/ToDoContext";
import { addToDoDto } from "@/ToDos/DTOs/addToDo.dto";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const AddTodoForm: React.FC = () => {
  const [addToDo, setToDo] = useState<addToDoDto>({ Title: "", describtion: "" });
  const [buttonScale] = useState(new Animated.Value(1));
  const router = useRouter();
  const { addTodo } = useContext(ToDoContext);

  const handleSubmit = (): void => {
    if (addToDo.Title.trim()) {
      // Button press animation
      Animated.sequence([
        Animated.timing(buttonScale, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(buttonScale, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();

      addTodo({ describtion: addToDo.describtion, Title: addToDo.Title });
      // Reset form after submission
      setToDo({ Title: "", describtion: "" });
      router.back();
    }
  };

  // Handler for updating Title
  const handleTitleChange = (text: string): void => {
    setToDo(prev => ({ ...prev, Title: text }));
  };

  // Handler for updating Description
  const handleDescriptionChange = (text: string): void => {
    setToDo(prev => ({ ...prev, describtion: text }));
  };

  const isFormValid = addToDo.Title.trim().length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.formTitle}>Create New Task</Text>
        <Text style={styles.formSubtitle}>
          Add a new task to your todo list
        </Text>
      </View>

      <View style={styles.form}>
        <CustomInput
          label="Task Title"
          placeholder="Enter your task title..."
          value={addToDo.Title}
          onChangeText={handleTitleChange}
          maxLength={100}
        />

        <CustomInput
          label="Description"
          placeholder="Add a description (optional)..."
          value={addToDo.describtion}
          onChangeText={handleDescriptionChange}
          multiline
          numberOfLines={4}
          maxLength={250}
        />

        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <TouchableOpacity
            style={[
              styles.button,
              isFormValid ? styles.buttonActive : styles.buttonDisabled
            ]}
            onPress={handleSubmit}
            disabled={!isFormValid}
            activeOpacity={0.9}
          >
            <Text style={[
              styles.buttonText,
              isFormValid ? styles.buttonTextActive : styles.buttonTextDisabled
            ]}>
              Create Task
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 24,
  },
  header: {
    marginBottom: 32,
    paddingTop: 20,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  formSubtitle: {
    fontSize: 16,
    color: '#aaaaaa',
    fontWeight: '400',
  },
  form: {
    flex: 1,
  },
  button: {
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonActive: {
    backgroundColor: '#ff8c42',
    shadowColor: '#ff8c42',
    shadowOpacity: 0.4,
  },
  buttonDisabled: {
    backgroundColor: '#2a2a2a',
    shadowOpacity: 0.1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  buttonTextActive: {
    color: '#0a0a0a',
  },
  buttonTextDisabled: {
    color: '#666666',
  },
  cancelButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#888888',
    fontWeight: '500',
  },
});
export default AddTodoForm
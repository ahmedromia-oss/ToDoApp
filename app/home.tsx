// index.tsx (your home screen)
import { useNavigation } from "expo-router";
import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FloatingButton } from "../Shared/components/floatingButton";
import { TodoCard } from "../ToDos/components/Card";
import { ToDoContext } from "../ToDos/contexts/ToDoContext";

export default function HomeScreen() {
  const { ToDos, ToggleToDo, removeToDo } = useContext(ToDoContext);
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.subtitle}>
            {ToDos.length} {ToDos.length === 1 ? 'task' : 'tasks'} • {ToDos.filter(todo => !todo.completed).length} active
          </Text>
        </View>
      </View>
                    
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ToDos.length === 0 ? styles.emptyScrollContent : styles.scrollContent}
      >
        {ToDos.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No tasks yet</Text>
            <Text style={styles.emptyText}>
              Tap the + button to create your first task
            </Text>
          </View>
        ) : (
          ToDos.map((todo) => (
            <TodoCard
              key={todo.id}
              completed={todo.completed}
              Title={todo.Title}
              id={todo.id}
              onDelete={removeToDo}
              onToggle={ToggleToDo}
              describtion={todo.describtion || ""}
            />
          ))
        )}
      </ScrollView>
             
      <View style={styles.floatingButtonContainer}>
        <FloatingButton onPress={() => navigation.navigate("AddToDo" as never)}>
        </FloatingButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#ff8c42',
    fontWeight: '500',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 100,
  },
  emptyScrollContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 12,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
    maxWidth: 280,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 120, // Raised from default position to account for tab bar
    right: 20,
  },
});
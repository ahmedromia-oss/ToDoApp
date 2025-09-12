# ToDoApp

A simple React Native To-Do application for managing tasks.

## Features

- Add, remove, and toggle tasks
- Task statistics (total and active)
- Modern UI with Floating Action Button

## Project Structure

```
ToDoApp/
├── app/
│   └── home.tsx           # Main home screen
├── ToDos/
│   ├── components/
│   │   └── Card.tsx       # Task card component
│   ├── contexts/
│   │   └── ToDoContext.tsx # ToDo context provider
│   ├── DTOs/
│   │   └── addToDo.dto.ts # DTO for adding tasks
│   ├── hooks/
│   │   └── useToDo.ts     # Custom hook for ToDo logic
│   └── models/
│       └── ToDo.model.ts  # Task model
├── Shared/
│   └── components/
│       └── floatingButton.tsx # Floating button component
├── dataStore.ts           # Initial ToDo data
├── package.json
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional, if using Expo)

## Setup

1. **Install dependencies:**

   ```
   npm install
   ```

2. **Start the app:**

   ```
   npm run start
   ```

   If using Expo, you can also run:

   ```
   npx expo start
   ```

3. **Run on your device:**
   - Use the Expo Go app or an emulator as prompted in the terminal.

## Customization

- Edit initial tasks in `dataStore.ts`.
- Update UI components in `ToDos/components` and `Shared/components`.

## Troubleshooting

- If you see an empty task list, ensure `dataStore.ts` exports a non-empty array.
- For issues with dependencies, try deleting `node_modules` and running `npm install` again.

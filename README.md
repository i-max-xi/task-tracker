# Task Tracker

## Overview

This **Task Tracker** is a simple yet efficient task management application built using **React, TypeScript, Context API, NextUI, and Framer Motion**. It allows users to:

- Add, edit, and delete tasks.
- Search tasks both by name and description.
- Filter tasks by priority.
- Persist tasks using local storage.

## 🚀 Running the Application Locally

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/i-max-xi/task-tracker.git
cd task-tracker
```

### **2️⃣ Install Dependencies**

```sh
npm install  # or yarn install
```

### ** 3️⃣ Start the Development Server**

```sh
npm run dev
```

Then, open http://localhost:5173/ in your browser.

### ** 4️⃣ Run Tests**

```sh
npm run run test
```

## Code Organization and Implementation

## Components

- `ui/` contains core UI components like **Task List**, **Task Item**, and **Task Form**.
- `shared/` contains reusable components like **Search Bar** and **Priority Filter**.

## Context API (`task-context.tsx`)

- Manages global state for tasks and search filtering.
- Uses `useReducer` for state updates.
- Saves tasks to `localStorage` to persist them between sessions.

## Testing

- Implemented using **Jest**
- Covers unit tests for core components like **Task List**, **Task Item**, and **Priority Filter**.

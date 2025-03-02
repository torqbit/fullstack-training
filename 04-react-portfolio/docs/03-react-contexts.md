# Understanding React Context

## What is React Context?

React Context provides a way to pass data through the component tree without having to pass props manually at every level. It's designed to share data that can be considered "global" for a tree of React components.

## When to Use Context?

- Theme data (e.g., dark/light mode)
- User authentication data
- Language preferences
- Global state management
- Any data that needs to be accessed by many components

## Basic Context Implementation

### 1. Creating a Context

```tsx
// UserContext.ts
import { createContext } from "react";

interface User {
  name: string;
  role: string;
}

interface UserContextType {
  user: User | null;
}

const UserContext = createContext<UserContextType>({ user: null });
export default UserContext;
```

### 2. Providing Context

```tsx
// App.tsx
import { FC } from "react";
import UserContext from "./contexts/UserContext";
import { User } from "./types/user";

const App: FC = () => {
  const user: User = {
    name: "John Doe",
    role: "admin",
  };

  return (
    <UserContext.Provider value={{ user }}>
      <MainContent />
    </UserContext.Provider>
  );
};

export default App;
```

### 3. Consuming Context

```tsx
// MainContent.tsx
import { FC, useContext } from "react";
import UserContext from "./contexts/UserContext";

const MainContent: FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default MainContent;
```

## Example: Theme Context with TypeScript

```tsx
// types/theme.ts
export type ThemeMode = "light" | "dark";

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

// contexts/ThemeContext.tsx
import { createContext, FC, useState, ReactNode } from "react";
import { ThemeMode, ThemeContextType } from "../types/theme";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
```

## Common Use Cases with TypeScript

### 1. Authentication Context

```tsx
// types/auth.ts
export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  user: AuthUser | null;
  login: (userData: AuthUser) => void;
  logout: () => void;
}

// contexts/AuthContext.tsx
import { createContext, FC, useState, ReactNode } from "react";
import { AuthUser, AuthContextType } from "../types/auth";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (userData: AuthUser) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
```

## 2. Internationalization Context

```tsx
// types/language.ts
export type Language = "en" | "es" | "fr";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// contexts/LanguageContext.tsx
import { createContext, FC, useState, ReactNode } from "react";
import { Language, LanguageContextType } from "../types/language";

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};
```

## Using useReducer with Context

Combining `useReducer` with Context provides a more robust state management solution, especially for complex state logic. Here's how to enhance our User context example:

### 1. Define Action Types and State

```tsx
// types/userTypes.ts
export interface User {
  name: string;
  role: string;
}

export interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export type UserAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_ERROR"; payload: string }
  | { type: "LOGOUT" };
```

## 2. Create Reducer

```tsx
// reducers/userReducer.ts
import { UserState, UserAction } from "../types/userTypes";

export const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case "LOGIN_ERROR":
      return {
        user: null,
        isLoading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
```

## 3. Create Context with Reducer

```tsx
// contexts/UserContext.tsx
import { createContext, useReducer, FC, ReactNode } from "react";
import { userReducer } from "../reducers/userReducer";
import { UserState, UserAction, User } from "../types/userTypes";

interface UserContextType {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
```

## 4. Using the Enhanced Context

```tsx
// components/LoginComponent.tsx
import { FC, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { User } from "../types/userTypes";

const LoginComponent: FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const handleLogin = async () => {
    dispatch({ type: "LOGIN_START" });

    try {
      // Simulate API call
      const userData: User = {
        name: "John Doe",
        role: "admin",
      };

      dispatch({ type: "LOGIN_SUCCESS", payload: userData });
    } catch (error) {
      dispatch({
        type: "LOGIN_ERROR",
        payload: "Login failed. Please try again.",
      });
    }
  };

  return (
    <div>
      {state.isLoading ? (
        <p>Loading...</p>
      ) : state.error ? (
        <p>Error: {state.error}</p>
      ) : state.user ? (
        <div>
          <h1>Welcome, {state.user.name}!</h1>
          <p>Role: {state.user.role}</p>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginComponent;
```

## UserProvider in your application

```tsx
import { FC } from "react";
import { UserProvider } from "./contexts/UserContext";
import LoginComponent from "./components/LoginComponent";
import Dashboard from "./components/Dashboard";

const App: FC = () => {
  return (
    <UserProvider>
      {/* All components inside UserProvider can access the user context */}
      <div className='app'>
        <LoginComponent />
        <Dashboard />
        {/* Other components that need access to user state */}
      </div>
    </UserProvider>
  );
};

export default App;
```

And here's how you might use it in a nested component:

```tsx
import { FC, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Dashboard: FC = () => {
  const { state } = useContext(UserContext);

  if (!state.user) {
    return <div>Please log in to view the dashboard</div>;
  }

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <p>Welcome back, {state.user.name}</p>
      <p>Your role is: {state.user.role}</p>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
```

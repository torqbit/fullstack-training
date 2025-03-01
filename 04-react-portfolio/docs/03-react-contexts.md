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

```jsx
// UserContext.ts
import { createContext } from "react";

interface User {
  name: string;
  role: string;
}

interface UserContextType {
  user: User | null;
}

const UserContext = createContext < UserContextType > { user: null };
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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
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

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
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

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
```

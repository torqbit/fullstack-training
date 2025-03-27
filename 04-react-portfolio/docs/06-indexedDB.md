# Working with IndexedDB

IndexedDB is a low-level API for client-side storage of significant amounts of structured data. It lets you store and retrieve objects that are indexed with a key, and is useful for web applications that need to work offline.

## Key Features

- Stores significant amounts of structured data
- Supports indexes for faster searching
- Works asynchronously to prevent blocking
- Follows same-origin policy
- Supports transactions for data integrity
- Object-oriented database

## Basic Concepts

1. **Database**: The highest level of the hierarchy
2. **Object Store**: Similar to tables in SQL databases
3. **Index**: Additional key paths for faster searches
4. **Transaction**: Groups operations together
5. **Cursor**: Mechanism for iterating over records

## TypeScript Example

Here's a complete example showing how to work with IndexedDB using TypeScript:

```typescript
// Define the interface for our data
interface TodoItem {
  id?: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

class TodoDB {
  private readonly dbName = "TodoDatabase";
  private readonly storeName = "todos";
  private db: IDBDatabase | null = null;

  // Initialize the database
  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, {
            keyPath: "id",
            autoIncrement: true,
          });
          store.createIndex("title", "title", { unique: false });
          store.createIndex("completed", "completed", { unique: false });
        }
      };
    });
  }

  // Add a new todo item
  async addTodo(todo: Omit<TodoItem, "id">): Promise<number> {
    return new Promise((resolve, reject) => {
      if (!this.db) throw new Error("Database not initialized");

      const transaction = this.db.transaction(this.storeName, "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.add(todo);

      request.onsuccess = () => resolve(request.result as number);
      request.onerror = () => reject(request.error);
    });
  }

  // Get all todo items
  async getAllTodos(): Promise<TodoItem[]> {
    return new Promise((resolve, reject) => {
      if (!this.db) throw new Error("Database not initialized");

      const transaction = this.db.transaction(this.storeName, "readonly");
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Update a todo item
  async updateTodo(todo: TodoItem): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.db) throw new Error("Database not initialized");

      const transaction = this.db.transaction(this.storeName, "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.put(todo);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // Delete a todo item
  async deleteTodo(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.db) throw new Error("Database not initialized");

      const transaction = this.db.transaction(this.storeName, "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}
```

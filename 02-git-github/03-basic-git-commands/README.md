# Basic Git Commands

## Understanding the Git Workflow

Before diving into commands, it's important to understand that Git has three main states:

1. **Working Directory**: Where you modify your files
2. **Staging Area**: Where you prepare changes for commit
3. **Git Repository**: Where your committed changes are stored

## Essential Git Commands

### 1. `git init`

Initializes a new Git repository in the current directory.

```bash
git init
```

This creates a new .git subdirectory that contains all necessary repository files.

### 2. git add

Adds files to the staging area. This command tracks new files and stages modified files.

```bash
# Add a specific file
git add filename.txt

# Add multiple files
git add file1.txt file2.txt

# Add all files in current directory
git add .

# Add all files with specific extension
git add *.js
```

### 3. git commit

Records changes from the staging area to the repository.

```bash
# Commit with a message
git commit -m "Your descriptive commit message"

# Commit all modified tracked files (skips staging)
git commit -a -m "Your message"
```

### 4. git status

Shows the status of files in your working directory and staging area.

```bash
git status


# For a more concise output
git status -s
```

Example output:

```plaintext

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
    modified:   file1.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
    modified:   file2.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
    file3.txt
```

### 5. git log

Shows commit history.

```bash
# Basic log
git log

# One line per commit
git log --oneline

# Show graph of branches
git log --graph --oneline

# Show last n commits
git log -n 5
```

## Understanding the Staging Area

The staging area (also known as the "index") is a crucial concept in Git. It's an intermediate area where you prepare your changes before committing them.

### Staging Area Workflow:

1. Make changes in your working directory
2. Stage changes using git add
3. Review staged changes using git status
4. Commit changes using git commit

### Additional Useful Commands View Changes

View Changes

```bash
# View unstaged changes
git diff

# View staged changes
git diff --staged
```

Remove Files

```bash
# Remove file from both working directory and staging area
git rm filename.txt

# Remove file only from staging area
git rm --cached filename.txt
```

Undo Changes

```bash
# Unstage changes
git restore --staged filename.txt

# Discard changes in working directory
git restore filename.txt
```

## Best Practices

1. Commit Often : Make small, focused commits
2. Write Clear Messages : Use descriptive commit messages
3. Review Changes : Always check git status and git diff before committing
4. Stage Thoughtfully : Group related changes in the same commit

## Common Scenarios

### 1. Starting a New Project

```bash
mkdir my-project
cd my-project
git init
git add .
git commit -m "Initial commit"
```

2. Modifying Existing Files

```bash

# Edit files
git status                  # Check what's changed
git diff                    # Review changes
git add modified_file.txt   # Stage changes
git commit -m "Update file" # Commit changes

```

3. Adding New Files

```bash
# Create new file
touch new_file.txt
git add new_file.txt
git commit -m "Add new file"
```

Remember: These commands form the foundation of Git usage. Understanding them well is crucial for effective version control.

## Practice Assignments

### Assignment 1: Initialize and Make First Commits

1. Create a new directory called "my-first-repo"
2. Initialize it as a Git repository
3. Create a README.md file with some basic information
4. Stage and commit the README.md file
5. Make some changes to README.md
6. View the differences and commit the changes

### Assignment 2: Working with Multiple Files

1. Create three different .txt files in your repository
2. Add content to each file
3. Stage two files but leave one unstaged
4. Check the status to see the different states
5. Commit the staged files
6. Stage and commit the remaining file separately

### Assignment 3: Practicing Undo Operations

1. Create a new file called "test.txt"
2. Add some content and stage it
3. Unstage the file using git restore --staged
4. Make more changes to the file
5. Use git restore to discard the changes
6. Verify that the changes were discarded

### Assignment 4: Log and History Practice

1. Make at least 5 different commits with clear messages
2. View the commit history using git log
3. Try different log formats (--oneline, --graph)
4. Find a specific commit by its message
5. View the changes made in a specific commit

### Assignment 5: Advanced Staging

1. Create a file with multiple sections
2. Make changes throughout the file
3. Stage only specific parts of the file using git add -p
4. Review the staged and unstaged changes
5. Commit the staged changes
6. Stage and commit the remaining changes

Each assignment should be completed in order, as they build upon previous concepts. Remember to use git status frequently to monitor your progress and git log to review your history.

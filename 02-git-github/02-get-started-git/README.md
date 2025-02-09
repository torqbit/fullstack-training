# Getting Started with Git

## 1. Installing Git

### For Windows:

1. Download Git from [git-scm.com](https://git-scm.com/download/windows)
2. Run the installer and follow the installation wizard
3. Verify installation by opening Command Prompt or PowerShell:

```bash
git --version
```

### For macOS:

1. Install via Homebrew (recommended):

```bash
brew install git
```

Or install Xcode Command Line Tools:

```bash
xcode-select --install
```

### For Linux:

1. Use your package manager (e.g., apt, yum, dnf) to install Git:

```bash
sudo apt-get update
sudo apt-get install git
```

## 2. Initial Git Configuration

After installation, configure your identity. This is important because every Git commit uses this information:

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

Verify the configuration:

```bash
git config --list
```

## 3. Git Architecture

Git maintains three main areas:

1. Working Directory : Where you modify your files
2. Staging Area (Index) : Where you prepare changes for commit
3. Repository (.git directory) : Where Git stores the metadata and database

## 4. Creating Your First Repository

### Initialize a New Repository

1. Create a new directory:

```bash
mkdir hello-git
cd hello-git
```

2. Initialize a Git repository:

```bash
git init
```

### Basic Git Workflow

1. Check Status : View the state of your working directory

```bash
git status
```

2. Stage Changes : Add files to staging area

```bash
git add README.md
```

3. Commit Changes : Save changes to the repository

```bash
git commit -m "Initial commit"
```

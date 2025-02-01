# Node Package Manager (NPM): Your JavaScript Project's Best Friend 📦

Ever wondered how JavaScript developers manage their project dependencies without going crazy? Enter NPM - the world's largest software registry and the default package manager for Node.js!

## What is NPM? 🤔

NPM (Node Package Manager) is like a giant library where developers can:

- Share their code packages with others
- Reuse code from other developers
- Manage project dependencies effortlessly
- Update packages when new versions are released

## Why Use NPM? 🎯

1. **Dependency Management**: NPM automatically handles all your project dependencies, making sure everything works together harmoniously.

2. **Version Control**: Need a specific version of a package? NPM's got you covered with semantic versioning.

3. **Scripts Automation**: Automate repetitive tasks with NPM scripts - from building your project to running tests.

4. **Easy Updates**: Keep your packages up-to-date with simple commands.

## Essential NPM Commands 🛠️

```bash
# Initialize a new project
npm init

# Install a package
npm install package-name

# Install dependencies from package.json
npm install

# Run scripts defined in package.json
npm run script-name
```

## Creating a Basic Web Project 🌐

Let's set up a simple project that serves static HTML, CSS, and JavaScript files.

### Step 1: Project Initialization

```bash
# Create a new directory and initialize npm
mkdir web-project
cd web-project
npm init -y
```

### Step 2: Install Simple HTTP Server

```bash
# Install http-server as a development dependency
npm install --save-dev http-server
```

### Step 3: Project Structure

Create the following directory structure:

```
web-project/
├── public/
│   ├── js/
│   │   └── main.js
│   ├── css/
│   │   └── style.css
│   └── index.html
└── package.json
```

### Step 4: Configure Package Scripts

Update your package.json to include the server script:

```json
{
  "scripts": {
    "start": "http-server web -p 8080"
  }
}
```

### Step 5: Create Basic Files

1. web/index.html :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My portfolio website</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div id="app">
      <h1>Hello, World!</h1>
    </div>
    <script src="js/main.js"></script>
  </body>
</html>
```

2. Add the css and javascript files in the js and css folder respectively :

3. Run the project :

```bash
# Start the server
npm start
```

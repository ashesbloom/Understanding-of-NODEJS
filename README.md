# Understanding-of-NODEJS

## Introduction

This repository is a comprehensive and well-documented guide for Node.js, providing detailed explanations, and best practices for developers looking to enhance their Node.js skills.

## Prerequisites
- Node.js
- npm (Node Package Manager)
- nodemon (Install globally with `npm install -g nodemon`)
- Basic knowledge of command line interface (CLI) operations.

## Installation

### 1. Install Node.js

To install Node.js, follow these steps:

1. Go to the [Node.js official website](https://nodejs.org/).
2. Download the LTS (Long Term Support) version for your operating system.
3. Follow the installation instructions for your specific operating system.

### 2. Verify Node.js Installation

To verify the installation, open your terminal or command prompt and run the following command:

```bash
node -v
```
This should display the installed npm version.

## Creating `package.json`

1. Create a new directory for your project and navigate into it:

```bash
mkdir my-project
cd my-project
```
2. Initialize a new npm project. This will create a `package.json` file:

```bash
npm init -y
```
## Running Scripts
To run the scripts, use the following npm commands:

## Example
To run the file handling script, use:
```sh
npm run file
```

- **File Handling**: `npm run file`
- **Module Management**: `npm run module`
- **HTTP Server**: `npm run server`
- **Server Logging**: `npm run server_log`
- **URL Handling**: `npm run url`
- **Express Server**: `npm run express`
- **Express Methods**: `npm run methods`
- **Middleware**: `npm run middleware`
- **Server-Side Rendering**: `npm run render`

## Package Scripts Configuration
```json
"scripts": {
  "file": "nodemon ./file_handling/file",
  "module": "nodemon ./module/module",
  "server": "nodemon ./http_server/index",
  "server_log": "nodemon ./http_server/server_log",
  "url": "nodemon ./url_handling/index",
  "express": "nodemon ./express/index",
  "methods": "nodemon ./express/methods",
  "middleware": "nodemon ./Middleware/index",
  "render": "nodemon ./server_side_rendering/server.js"
}
```

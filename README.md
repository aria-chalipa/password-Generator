# Password Generator

A modern, user-friendly web application that generates strong and secure passwords. This project is built with TypeScript, Tailwind CSS, and HTML5 to provide a clean, responsive interface for password generation.

## 🚀 Live Demo

Check out the live application here: **[Password Generator Live](https://aria-chalipa.github.io/password-Generator)**

## Features

✨ **Key Features**
- 🔐 Generate strong and secure passwords
- 📏 Customize password length (4-20 characters)
- 🎛️ **Multiple password type options**:
  - **All**: Mix of uppercase, lowercase, numbers, and special characters
  - **Numbers Only**: Generate numeric passwords
  - **Characters Only**: Generate alphabetic passwords (letters only)
- 🎨 Modern, responsive UI with dark theme
- 📋 One-click copy functionality
- ⚡ Real-time password generation
- 🎯 Easy-to-use interface

## Tech Stack

- **Frontend**: HTML5, TypeScript
- **Styling**: Tailwind CSS 4.3.0
- **Build Tool**: TypeScript Compiler (tsc)
- **Package Manager**: npm

## Project Structure

```
password-Generator/
├── index.html          # Main HTML file with form and UI
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── src/                # Source CSS files
│   └── output.css      # Compiled Tailwind CSS
├── ts/                 # TypeScript source files
├── built/              # Compiled JavaScript output
│   └── main.js         # Main application logic
└── node_modules/       # Project dependencies
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aria-chalipa/password-Generator.git
   cd password-Generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

### Development

To watch for TypeScript changes and automatically compile:
```bash
npm run watch
```

### Running the Application

1. Open `index.html` in your web browser or visit the [live demo](https://aria-chalipa.github.io/password-Generator)
2. Enter the desired password length (4-20 characters)
3. **Select the password type**:
   - **All**: Generates passwords with mixed character types
   - **Numbers Only**: Generates numeric-only passwords
   - **Characters Only**: Generates letter-only passwords
4. Click the "Generate" button to create a password
5. Click the "Copy" button to copy the password to your clipboard

## How It Works

1. **Input**: User specifies the desired password length using the number input (range: 4-20)
2. **Password Type Selection**: Choose from three password generation modes:
   - **All**: Combines uppercase letters, lowercase letters, numbers, and special characters
   - **Numbers Only**: Uses only numeric digits (0-9)
   - **Characters Only**: Uses only alphabetic characters (A-Z, a-z)
3. **Generation**: Click the generate button to create a password based on your selections
4. **Display**: The generated password is displayed in the result area
5. **Copy**: Use the copy button to quickly copy the password to clipboard

## Building & Deployment

The project uses Tailwind CSS for styling. The output CSS is compiled into `src/output.css`.

To rebuild CSS:
```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css
```

### Deploying to GitHub Pages

This project is deployed using GitHub Pages. The application is automatically served from the `main` branch at:
```
https://aria-chalipa.github.io/password-Generator
```

To deploy your own version:
1. Push changes to the `main` branch
2. Enable GitHub Pages in repository settings (Settings → Pages)
3. Select `main` branch as the source
4. Your site will be live at `https://yourusername.github.io/password-Generator`

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is licensed under the ISC License.

## Author

**aria-chalipa**

## Version

1.0.0

---

**Note**: This is a client-side application with no backend requirements. All password generation happens locally in your browser for maximum security. No data is sent to any server.

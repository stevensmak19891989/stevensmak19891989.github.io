# 🎱 Bingo Caller App

A beautiful, feature-rich bingo caller web application with all traditional bingo calls, multiple game modes, and professional features for running your own bingo games!

## ✨ Features

### Core Functionality
- 🎲 **Random Number Generator** - Calls numbers randomly with no repeats
- 📢 **Traditional Bingo Calls** - All 90 British or 75 American bingo calls
- 🎨 **Modern Design** - Sleek, gradient-based UI with smooth animations
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile devices

### Advanced Features
- ⏮️ **Undo Last Call** - Made a mistake? Reverse the last number called
- ⏩ **Auto-Call Mode** - Automatic number calling with adjustable speed (2-10 seconds)
- 📊 **Call History Panel** - See the last 10 numbers called at a glance
- 💾 **Auto-Save** - Game state persists even if you close the browser
- 📥 **Export Game Data** - Download complete call history as text file
- 🎤 **Voice Announcements** - Text-to-speech reads numbers and calls (optional)
- 🔊 **Sound Effects** - Audio feedback on each call (can be toggled)
- 🎉 **Confetti Animation** - Celebration when all numbers are called
- 🖥️ **Fullscreen Mode** - Perfect for projecting during games
- 🎮 **Dual Game Modes** - Switch between British 90-ball and American 75-ball
- 🎨 **5 Color Themes** - Purple, Ocean Blue, Sunset Orange, Forest Green, Royal Purple

### Keyboard Shortcuts
- **Space** - Call next number
- **Ctrl+R** - Reset game
- **Ctrl+Z** - Undo last call
- **Escape** - Close settings modal

## 🚀 How to Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `bingo-app`)
4. Choose "Public" visibility
5. Click "Create repository"

### Step 2: Upload Your Files

Using Git (recommended):
```bash
cd "c:\Users\StevenMcCready\OneDrive - The Summit\Desktop\Bingo-app"
git init
git add .
git commit -m "Initial commit - Enhanced Bingo app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bingo-app.git
git push -u origin main
```

Or use GitHub's web interface to upload files directly.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes, then visit: `https://YOUR_USERNAME.github.io/bingo-app/`

## 🎮 How to Use

### Basic Operation
1. **Call a Number**: Click "Call Number" button or press Spacebar
2. **See the Call**: Number and traditional calling phrase displayed prominently
3. **Track Progress**: Visual grid shows all called numbers highlighted in green
4. **Reset Game**: Click "Reset" when ready to start a new game

### Advanced Features
- **Auto-Call**: Click "Auto Call" to automatically call numbers at set intervals
- **Undo**: Made a mistake? Click "Undo" to reverse the last call
- **History**: View the last 10 called numbers in the history panel
- **Export**: Download complete game history as a text file
- **Settings**: Click the gear icon to customize:
  - Game mode (90-ball or 75-ball)
  - Color theme
  - Auto-call speed
  - Sound effects
  - Voice announcements
  - Confetti animation
- **Fullscreen**: Click fullscreen icon for projection mode

## 🎯 Traditional Bingo Calls

### British 90-Ball Bingo Calls Include:
- **11** - "Legs Eleven"
- **22** - "Two Little Ducks"
- **88** - "Two Fat Ladies"
- **90** - "Top of the Shop"
- And 86 more traditional calls!

### American 75-Ball Mode
Switch to 75-ball mode in settings for American-style bingo (1-75).

## 🛠️ Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, animations, and themes
- **Vanilla JavaScript** - No dependencies, pure lightweight code
- **Web APIs** - Web Audio API, Speech Synthesis API, Fullscreen API
- **LocalStorage** - Persistent game state
- **Canvas API** - Confetti animations

## 📄 Files

- `index.html` - Main HTML structure with modal and controls
- `styles.css` - Complete styling with 5 themes and responsive design
- `script.js` - Full game logic with all features
- `README.md` - This file

## 🎨 Customization

### Color Themes
Choose from 5 built-in themes in settings:
- **Default** - Purple gradient
- **Ocean** - Cool blue tones
- **Sunset** - Warm orange hues
- **Forest** - Natural greens
- **Royal** - Deep purples

### Game Modes
- **90-Ball** - Traditional British bingo (1-90)
- **75-Ball** - American bingo (1-75)

### Auto-Call Speed
Adjust from 2 to 10 seconds between calls in settings.

## 📱 Browser Support

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

**Note**: Voice announcements require browser speech synthesis support.

## 💡 Tips for Best Experience

1. **For Projection**: Use fullscreen mode for better visibility
2. **For Accessibility**: Enable voice announcements
3. **For Fast Games**: Use auto-call mode with 2-3 second intervals
4. **For Practice**: Try different themes to reduce eye strain

## 🔒 Privacy

All game data is stored locally in your browser. No data is sent to any server.

## 📝 License

Free to use for personal and commercial projects.

---

Enjoy your enhanced bingo games! 🎉

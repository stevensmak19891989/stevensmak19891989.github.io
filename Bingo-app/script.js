// Traditional British Bingo Calls (1-90)
const bingoCalls90 = {
    1: "Kelly's Eye", 2: "One Little Duck", 3: "Cup of Tea", 4: "Knock at the Door",
    5: "Man Alive", 6: "Tom's Tricks", 7: "Lucky Seven", 8: "Garden Gate",
    9: "Doctor's Orders", 10: "Boris's Den", 11: "Legs Eleven", 12: "One Dozen",
    13: "Unlucky for Some", 14: "Valentine's Day", 15: "Young and Keen", 16: "Sweet Sixteen",
    17: "Dancing Queen", 18: "Coming of Age", 19: "Goodbye Teens", 20: "One Score",
    21: "Key of the Door", 22: "Two Little Ducks", 23: "The Lord is My Shepherd", 24: "Two Dozen",
    25: "Duck and Dive", 26: "Pick and Mix", 27: "Gateway to Heaven", 28: "In a State",
    29: "Rise and Shine", 30: "Dirty Gertie", 31: "Get Up and Run", 32: "Buckle My Shoe",
    33: "Dirty Knee", 34: "Ask for More", 35: "Jump and Jive", 36: "Three Dozen",
    37: "More than Eleven", 38: "Christmas Cake", 39: "39 Steps", 40: "Life Begins",
    41: "Time for Fun", 42: "Winnie the Pooh", 43: "Down on Your Knees", 44: "Droopy Drawers",
    45: "Halfway There", 46: "Up to Tricks", 47: "Four and Seven", 48: "Four Dozen",
    49: "PC", 50: "Half a Century", 51: "Tweak of the Thumb", 52: "Deck of Cards",
    53: "Stuck in the Tree", 54: "Clean the Floor", 55: "Snakes Alive", 56: "Was She Worth It?",
    57: "Heinz Varieties", 58: "Make Them Wait", 59: "Brighton Line", 60: "Five Dozen",
    61: "Baker's Bun", 62: "Turn of the Screw", 63: "Tickle Me", 64: "Red Raw",
    65: "Old Age Pension", 66: "Clickety Click", 67: "Made in Heaven", 68: "Saving Grace",
    69: "Either Way Up", 70: "Three Score and Ten", 71: "Bang on the Drum", 72: "Six Dozen",
    73: "Queen Bee", 74: "Candy Store", 75: "Strive and Strive", 76: "Trombones",
    77: "Sunset Strip", 78: "Heaven's Gate", 79: "One More Time", 80: "Gandhi's Breakfast",
    81: "Stop and Run", 82: "Straight On Through", 83: "Time for Tea", 84: "Seven Dozen",
    85: "Staying Alive", 86: "Between the Sticks", 87: "Torquay in Devon", 88: "Two Fat Ladies",
    89: "Nearly There", 90: "Top of the Shop"
};

// American 75-Ball Bingo Calls
const bingoCalls75 = {
    1: "Kelly's Eye", 2: "One Little Duck", 3: "Cup of Tea", 4: "Knock at the Door",
    5: "Man Alive", 6: "Tom Mix", 7: "Lucky Seven", 8: "Garden Gate",
    9: "Doctor's Orders", 10: "Big Fat Hen", 11: "Legs Eleven", 12: "One Dozen",
    13: "Unlucky for Some", 14: "Valentine's Day", 15: "Young and Keen", 16: "Sweet Sixteen",
    17: "Dancing Queen", 18: "Coming of Age", 19: "Goodbye Teens", 20: "One Score",
    21: "Key of the Door", 22: "Two Little Ducks", 23: "Thee and Me", 24: "Two Dozen",
    25: "Duck and Dive", 26: "Pick and Mix", 27: "Gateway to Heaven", 28: "In a State",
    29: "Rise and Shine", 30: "Dirty Gertie", 31: "Get Up and Run", 32: "Buckle My Shoe",
    33: "Dirty Knee", 34: "Ask for More", 35: "Jump and Jive", 36: "Three Dozen",
    37: "More than Eleven", 38: "Christmas Cake", 39: "39 Steps", 40: "Life Begins",
    41: "Time for Fun", 42: "Winnie the Pooh", 43: "Down on Your Knees", 44: "Droopy Drawers",
    45: "Halfway There", 46: "Up to Tricks", 47: "Four and Seven", 48: "Four Dozen",
    49: "PC", 50: "Half a Century", 51: "Tweak of the Thumb", 52: "Deck of Cards",
    53: "Stuck in the Tree", 54: "Clean the Floor", 55: "Snakes Alive", 56: "Was She Worth It?",
    57: "Heinz Varieties", 58: "Make Them Wait", 59: "Brighton Line", 60: "Five Dozen",
    61: "Baker's Bun", 62: "Turn of the Screw", 63: "Tickle Me", 64: "Red Raw",
    65: "Old Age Pension", 66: "Clickety Click", 67: "Made in Heaven", 68: "Saving Grace",
    69: "Either Way Up", 70: "Three Score and Ten", 71: "Bang on the Drum", 72: "Six Dozen",
    73: "Queen Bee", 74: "Candy Store", 75: "Strive and Strive"
};

// Game State
let gameState = {
    mode: 90,
    calledNumbers: new Set(),
    availableNumbers: [],
    callHistory: [],
    lastCalledNumber: null,
    autoCallInterval: null,
    autoCallSpeed: 5000,
    soundEnabled: true,
    voiceEnabled: false,
    confettiEnabled: true,
    theme: 'default'
};

// DOM Elements
const currentNumberDisplay = document.getElementById('currentNumber').querySelector('.number');
const currentCallingDisplay = document.getElementById('currentCalling');
const callButton = document.getElementById('callButton');
const autoCallButton = document.getElementById('autoCallButton');
const resetButton = document.getElementById('resetButton');
const undoButton = document.getElementById('undoButton');
const exportButton = document.getElementById('exportButton');
const calledCountDisplay = document.getElementById('calledCount');
const remainingCountDisplay = document.getElementById('remainingCount');
const gameModeDisplay = document.getElementById('gameMode');
const numbersGrid = document.getElementById('numbersGrid');
const historyList = document.getElementById('historyList');
const settingsButton = document.getElementById('settingsButton');
const fullscreenButton = document.getElementById('fullscreenButton');
const settingsModal = document.getElementById('settingsModal');
const closeSettings = document.getElementById('closeSettings');
const saveSettings = document.getElementById('saveSettings');
const confettiCanvas = document.getElementById('confettiCanvas');

// Settings Elements
const gameModeSelect = document.getElementById('gameModeSelect');
const themeSelect = document.getElementById('themeSelect');
const autoCallSpeedSelect = document.getElementById('autoCallSpeed');
const soundToggle = document.getElementById('soundToggle');
const voiceToggle = document.getElementById('voiceToggle');
const confettiToggle = document.getElementById('confettiToggle');

// Audio Context
let audioContext;
let speechSynthesis = window.speechSynthesis;

// Initialize the game
function initGame() {
    const maxNumber = gameState.mode;
    gameState.availableNumbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
    gameState.calledNumbers.clear();
    gameState.callHistory = [];
    gameState.lastCalledNumber = null;
    
    currentNumberDisplay.textContent = '-';
    currentCallingDisplay.textContent = 'Press "Call Number" to start';
    updateStats();
    updateHistory();
    createNumberGrid();
    
    callButton.disabled = false;
    undoButton.disabled = true;
    exportButton.disabled = true;
    
    stopAutoCall();
    loadGameState();
}

// Create number grid
function createNumberGrid() {
    numbersGrid.innerHTML = '';
    const maxNumber = gameState.mode;
    
    for (let i = 1; i <= maxNumber; i++) {
        const ball = document.createElement('div');
        ball.className = 'number-ball';
        ball.textContent = i;
        ball.id = `ball-${i}`;
        numbersGrid.appendChild(ball);
    }
}

// Call a number
function callNumber() {
    if (gameState.availableNumbers.length === 0) {
        currentCallingDisplay.textContent = 'All numbers called! Game over!';
        callButton.disabled = true;
        stopAutoCall();
        if (gameState.confettiEnabled) launchConfetti();
        return;
    }
    
    if (gameState.lastCalledNumber) {
        const prevBall = document.getElementById(`ball-${gameState.lastCalledNumber}`);
        if (prevBall) prevBall.classList.remove('latest');
    }
    
    const randomIndex = Math.floor(Math.random() * gameState.availableNumbers.length);
    const number = gameState.availableNumbers[randomIndex];
    
    gameState.availableNumbers.splice(randomIndex, 1);
    gameState.calledNumbers.add(number);
    gameState.callHistory.push(number);
    gameState.lastCalledNumber = number;
    
    const bingoCalls = gameState.mode === 90 ? bingoCalls90 : bingoCalls75;
    const calling = bingoCalls[number];
    
    currentNumberDisplay.textContent = number;
    currentCallingDisplay.textContent = calling;
    
    const ball = document.getElementById(`ball-${number}`);
    if (ball) ball.classList.add('called', 'latest');
    
    updateStats();
    updateHistory();
    
    undoButton.disabled = false;
    exportButton.disabled = false;
    
    if (gameState.soundEnabled) playSound();
    if (gameState.voiceEnabled) speakNumber(number, calling);
    
    saveGameState();
    
    if (gameState.availableNumbers.length === 0) {
        callButton.disabled = true;
        stopAutoCall();
        if (gameState.confettiEnabled) setTimeout(() => launchConfetti(), 500);
    }
}

// Undo last call
function undoLastCall() {
    if (gameState.callHistory.length === 0) return;
    
    const lastNumber = gameState.callHistory.pop();
    gameState.calledNumbers.delete(lastNumber);
    gameState.availableNumbers.push(lastNumber);
    gameState.availableNumbers.sort((a, b) => a - b);
    
    const ball = document.getElementById(`ball-${lastNumber}`);
    if (ball) ball.classList.remove('called', 'latest');
    
    if (gameState.callHistory.length === 0) {
        currentNumberDisplay.textContent = '-';
        currentCallingDisplay.textContent = 'Press "Call Number" to start';
        gameState.lastCalledNumber = null;
        undoButton.disabled = true;
        exportButton.disabled = true;
    } else {
        const newLastNumber = gameState.callHistory[gameState.callHistory.length - 1];
        const bingoCalls = gameState.mode === 90 ? bingoCalls90 : bingoCalls75;
        currentNumberDisplay.textContent = newLastNumber;
        currentCallingDisplay.textContent = bingoCalls[newLastNumber];
        gameState.lastCalledNumber = newLastNumber;
        
        const newBall = document.getElementById(`ball-${newLastNumber}`);
        if (newBall) newBall.classList.add('latest');
    }
    
    callButton.disabled = false;
    updateStats();
    updateHistory();
    saveGameState();
}

// Auto-call toggle
function toggleAutoCall() {
    if (gameState.autoCallInterval) {
        stopAutoCall();
    } else {
        startAutoCall();
    }
}

function startAutoCall() {
    if (gameState.availableNumbers.length === 0) return;
    
    autoCallButton.innerHTML = '<i class="fas fa-pause"></i> Pause';
    autoCallButton.classList.add('btn-primary');
    autoCallButton.classList.remove('btn-secondary');
    
    callNumber();
    
    gameState.autoCallInterval = setInterval(() => {
        if (gameState.availableNumbers.length > 0) {
            callNumber();
        } else {
            stopAutoCall();
        }
    }, gameState.autoCallSpeed);
}

function stopAutoCall() {
    if (gameState.autoCallInterval) {
        clearInterval(gameState.autoCallInterval);
        gameState.autoCallInterval = null;
        autoCallButton.innerHTML = '<i class="fas fa-forward"></i> Auto Call';
        autoCallButton.classList.remove('btn-primary');
        autoCallButton.classList.add('btn-secondary');
    }
}

// Update stats
function updateStats() {
    calledCountDisplay.textContent = gameState.calledNumbers.size;
    remainingCountDisplay.textContent = gameState.availableNumbers.length;
    gameModeDisplay.textContent = `${gameState.mode}-Ball`;
}

// Update history
function updateHistory() {
    historyList.innerHTML = '';
    
    if (gameState.callHistory.length === 0) {
        historyList.innerHTML = '<p class="history-empty">No calls yet</p>';
        return;
    }
    
    const recentCalls = gameState.callHistory.slice(-10).reverse();
    const bingoCalls = gameState.mode === 90 ? bingoCalls90 : bingoCalls75;
    
    recentCalls.forEach(number => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <span class="history-number">${number}</span>
            <span class="history-calling">${bingoCalls[number]}</span>
        `;
        historyList.appendChild(item);
    });
}

// Export
function exportCalledNumbers() {
    const bingoCalls = gameState.mode === 90 ? bingoCalls90 : bingoCalls75;
    let content = `Bingo Game - ${gameState.mode}-Ball\n`;
    content += `Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}\n`;
    content += `Total Numbers Called: ${gameState.callHistory.length}\n\n`;
    content += `Call Order:\n${'='.repeat(50)}\n`;
    
    gameState.callHistory.forEach((number, index) => {
        content += `${index + 1}. ${number} - ${bingoCalls[number]}\n`;
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bingo-game-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// Reset
function resetGame() {
    if (confirm('Are you sure you want to reset the game?')) {
        initGame();
    }
}

// Sound
function playSound() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Voice
function speakNumber(number, calling) {
    if (!speechSynthesis) return;
    
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(`${number}, ${calling}`);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    speechSynthesis.speak(utterance);
}

// Confetti
function launchConfetti() {
    const canvas = confettiCanvas;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const confettiCount = 150;
    const colors = ['#6366f1', '#ec4899', '#22c55e', '#f59e0b', '#3b82f6', '#8b5cf6'];
    
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5,
            velocity: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 5
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let stillActive = false;
        
        confettiPieces.forEach(piece => {
            piece.y += piece.velocity;
            piece.rotation += piece.rotationSpeed;
            
            if (piece.y < canvas.height) stillActive = true;
            
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
            ctx.restore();
        });
        
        if (stillActive) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
}

// Fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            document.body.classList.add('fullscreen');
            fullscreenButton.innerHTML = '<i class="fas fa-compress"></i>';
        });
    } else {
        document.exitFullscreen().then(() => {
            document.body.classList.remove('fullscreen');
            fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
        });
    }
}

// Settings
function openSettings() {
    settingsModal.classList.add('active');
    
    gameModeSelect.value = gameState.mode.toString();
    themeSelect.value = gameState.theme;
    autoCallSpeedSelect.value = gameState.autoCallSpeed.toString();
    soundToggle.checked = gameState.soundEnabled;
    voiceToggle.checked = gameState.voiceEnabled;
    confettiToggle.checked = gameState.confettiEnabled;
}

function closeSettingsModal() {
    settingsModal.classList.remove('active');
}

function applySettings() {
    const newMode = parseInt(gameModeSelect.value);
    const newTheme = themeSelect.value;
    
    gameState.autoCallSpeed = parseInt(autoCallSpeedSelect.value);
    gameState.soundEnabled = soundToggle.checked;
    gameState.voiceEnabled = voiceToggle.checked;
    gameState.confettiEnabled = confettiToggle.checked;
    
    if (newTheme !== gameState.theme) {
        gameState.theme = newTheme;
        document.body.setAttribute('data-theme', newTheme === 'default' ? '' : newTheme);
    }
    
    if (newMode !== gameState.mode) {
        if (gameState.callHistory.length > 0) {
            if (confirm('Changing game mode will reset the current game. Continue?')) {
                gameState.mode = newMode;
                initGame();
            }
        } else {
            gameState.mode = newMode;
            initGame();
        }
    }
    
    saveGameState();
    closeSettingsModal();
}

// Storage
function saveGameState() {
    const saveData = {
        mode: gameState.mode,
        calledNumbers: Array.from(gameState.calledNumbers),
        callHistory: gameState.callHistory,
        theme: gameState.theme,
        autoCallSpeed: gameState.autoCallSpeed,
        soundEnabled: gameState.soundEnabled,
        voiceEnabled: gameState.voiceEnabled,
        confettiEnabled: gameState.confettiEnabled
    };
    localStorage.setItem('bingoGameState', JSON.stringify(saveData));
}

function loadGameState() {
    const savedData = localStorage.getItem('bingoGameState');
    if (!savedData) return;
    
    try {
        const data = JSON.parse(savedData);
        
        gameState.theme = data.theme || 'default';
        gameState.autoCallSpeed = data.autoCallSpeed || 5000;
        gameState.soundEnabled = data.soundEnabled !== false;
        gameState.voiceEnabled = data.voiceEnabled || false;
        gameState.confettiEnabled = data.confettiEnabled !== false;
        
        if (gameState.theme !== 'default') {
            document.body.setAttribute('data-theme', gameState.theme);
        }
        
        if (data.mode === gameState.mode && data.callHistory && data.callHistory.length > 0) {
            gameState.callHistory = data.callHistory;
            gameState.calledNumbers = new Set(data.calledNumbers);
            
            const maxNumber = gameState.mode;
            gameState.availableNumbers = [];
            for (let i = 1; i <= maxNumber; i++) {
                if (!gameState.calledNumbers.has(i)) {
                    gameState.availableNumbers.push(i);
                }
            }
            
            if (gameState.callHistory.length > 0) {
                gameState.lastCalledNumber = gameState.callHistory[gameState.callHistory.length - 1];
                const bingoCalls = gameState.mode === 90 ? bingoCalls90 : bingoCalls75;
                currentNumberDisplay.textContent = gameState.lastCalledNumber;
                currentCallingDisplay.textContent = bingoCalls[gameState.lastCalledNumber];
                
                gameState.callHistory.forEach(number => {
                    const ball = document.getElementById(`ball-${number}`);
                    if (ball) ball.classList.add('called');
                });
                
                const lastBall = document.getElementById(`ball-${gameState.lastCalledNumber}`);
                if (lastBall) lastBall.classList.add('latest');
                
                undoButton.disabled = false;
                exportButton.disabled = false;
            }
            
            updateStats();
            updateHistory();
        }
    } catch (e) {
        console.error('Error loading saved game:', e);
    }
}

// Event Listeners
callButton.addEventListener('click', callNumber);
autoCallButton.addEventListener('click', toggleAutoCall);
resetButton.addEventListener('click', resetGame);
undoButton.addEventListener('click', undoLastCall);
exportButton.addEventListener('click', exportCalledNumbers);
settingsButton.addEventListener('click', openSettings);
fullscreenButton.addEventListener('click', toggleFullscreen);
closeSettings.addEventListener('click', closeSettingsModal);
saveSettings.addEventListener('click', applySettings);

settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) closeSettingsModal();
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !callButton.disabled && !settingsModal.classList.contains('active')) {
        e.preventDefault();
        callNumber();
    } else if (e.code === 'KeyR' && e.ctrlKey) {
        e.preventDefault();
        resetGame();
    } else if (e.code === 'KeyZ' && e.ctrlKey && !undoButton.disabled) {
        e.preventDefault();
        undoLastCall();
    } else if (e.code === 'Escape' && settingsModal.classList.contains('active')) {
        closeSettingsModal();
    }
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.body.classList.remove('fullscreen');
        fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
    }
});

// Initialize
initGame();

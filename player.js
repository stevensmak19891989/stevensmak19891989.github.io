// Bingo calls (same as main app)
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

// Player state
let playerState = {
    mode: 90,
    card: [],
    calledNumbers: [],
    markedCells: new Set(),
    hasWon: false,
    winningPattern: null
};

// DOM Elements
const currentNumberEl = document.getElementById('currentNumber').querySelector('.number');
const currentCallingEl = document.getElementById('currentCalling');
const gameModeEl = document.getElementById('gameMode');
const bingoCardEl = document.getElementById('bingoCard');
const bingoButton = document.getElementById('bingoButton');
const recentNumbersEl = document.getElementById('recentNumbers');
const newCardButton = document.getElementById('newCardButton');
const winnerModal = document.getElementById('winnerModal');
const closeWinnerModal = document.getElementById('closeWinnerModal');
const winnerPattern = document.getElementById('winnerPattern');

// Generate a random bingo card
function generateBingoCard() {
    const card = [];
    const mode = playerState.mode;
    
    if (mode === 75) {
        // American 75-ball (5x5 with free space)
        const columns = [
            { range: [1, 15], letter: 'B' },
            { range: [16, 30], letter: 'I' },
            { range: [31, 45], letter: 'N' },
            { range: [46, 60], letter: 'G' },
            { range: [61, 75], letter: 'O' }
        ];
        
        // Header row
        card.push(['B', 'I', 'N', 'G', 'O']);
        
        // Number rows
        for (let row = 0; row < 5; row++) {
            const cardRow = [];
            for (let col = 0; col < 5; col++) {
                if (row === 2 && col === 2) {
                    cardRow.push('FREE');
                } else {
                    const { range } = columns[col];
                    const numbers = [];
                    for (let i = range[0]; i <= range[1]; i++) {
                        numbers.push(i);
                    }
                    const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
                    cardRow.push(randomNum);
                    // Remove to avoid duplicates in column
                    const index = numbers.indexOf(randomNum);
                    numbers.splice(index, 1);
                }
            }
            card.push(cardRow);
        }
    } else {
        // British 90-ball (3 rows x 9 columns, 5 numbers per row)
        for (let row = 0; row < 3; row++) {
            const cardRow = [];
            const numbersInRow = [];
            
            // Generate 5 random positions for numbers in this row
            const positions = [];
            while (positions.length < 5) {
                const pos = Math.floor(Math.random() * 9);
                if (!positions.includes(pos)) {
                    positions.push(pos);
                }
            }
            positions.sort((a, b) => a - b);
            
            for (let col = 0; col < 9; col++) {
                if (positions.includes(col)) {
                    // Place a number in this column
                    const min = col === 0 ? 1 : col * 10;
                    const max = col === 8 ? 90 : (col + 1) * 10 - 1;
                    
                    let num;
                    do {
                        num = Math.floor(Math.random() * (max - min + 1)) + min;
                    } while (numbersInRow.includes(num));
                    
                    numbersInRow.push(num);
                    cardRow.push(num);
                } else {
                    cardRow.push(null);
                }
            }
            card.push(cardRow);
        }
    }
    
    return card;
}

// Render the bingo card
function renderBingoCard() {
    bingoCardEl.innerHTML = '';
    
    playerState.card.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellEl = document.createElement('div');
            cellEl.className = 'card-cell';
            
            if (rowIndex === 0 && playerState.mode === 75) {
                // Header row for 75-ball
                cellEl.classList.add('header');
                cellEl.textContent = cell;
            } else if (cell === 'FREE') {
                cellEl.classList.add('free');
                cellEl.textContent = 'FREE';
                cellEl.dataset.marked = 'true';
            } else if (cell === null) {
                // Empty cell for 90-ball
                cellEl.style.visibility = 'hidden';
            } else {
                cellEl.textContent = cell;
                cellEl.dataset.row = rowIndex;
                cellEl.dataset.col = colIndex;
                cellEl.dataset.number = cell;
                
                // Check if this number has been called
                if (playerState.calledNumbers.includes(cell)) {
                    cellEl.classList.add('called');
                    cellEl.dataset.marked = 'true';
                }
                
                // Manual marking (optional)
                cellEl.addEventListener('click', () => toggleMark(cellEl));
            }
            
            bingoCardEl.appendChild(cellEl);
        });
    });
}

// Toggle manual marking
function toggleMark(cellEl) {
    if (cellEl.classList.contains('header') || cellEl.classList.contains('free')) return;
    
    const number = parseInt(cellEl.dataset.number);
    if (playerState.calledNumbers.includes(number)) {
        // Can't unmark called numbers
        return;
    }
    
    if (cellEl.dataset.marked === 'true') {
        cellEl.dataset.marked = 'false';
        cellEl.classList.remove('marked');
    } else {
        cellEl.dataset.marked = 'true';
        cellEl.classList.add('marked');
    }
    
    checkForWin();
}

// Check for winning patterns
function checkForWin() {
    if (playerState.hasWon) return;
    
    const cells = document.querySelectorAll('.card-cell');
    const gridSize = playerState.mode === 75 ? 5 : 9;
    const marked = [];
    
    cells.forEach(cell => {
        if (cell.dataset.marked === 'true') {
            const row = parseInt(cell.dataset.row) || 0;
            const col = parseInt(cell.dataset.col) || 0;
            marked.push({ row, col });
        }
    });
    
    let winPattern = null;
    
    if (playerState.mode === 75) {
        // Check rows
        for (let row = 1; row <= 5; row++) {
            const rowMarked = marked.filter(m => m.row === row);
            if (rowMarked.length === 5) {
                winPattern = `Horizontal Line (Row ${row})`;
                break;
            }
        }
        
        // Check columns
        if (!winPattern) {
            for (let col = 0; col < 5; col++) {
                const colMarked = marked.filter(m => m.col === col);
                if (colMarked.length === 5) {
                    winPattern = `Vertical Line (Column ${col + 1})`;
                    break;
                }
            }
        }
        
        // Check diagonals
        if (!winPattern) {
            const diag1 = marked.filter(m => m.row - 1 === m.col);
            const diag2 = marked.filter(m => m.row + m.col === 4);
            
            if (diag1.length === 5) {
                winPattern = 'Diagonal Line (Top-Left to Bottom-Right)';
            } else if (diag2.length === 5) {
                winPattern = 'Diagonal Line (Top-Right to Bottom-Left)';
            }
        }
        
        // Check full house
        if (!winPattern && marked.length === 25) {
            winPattern = 'Full House (All Numbers)';
        }
    } else {
        // 90-ball: Check for lines (any row)
        for (let row = 0; row < 3; row++) {
            const rowNumbers = playerState.card[row].filter(n => n !== null);
            const rowMarked = marked.filter(m => m.row === row);
            
            if (rowMarked.length === rowNumbers.length && rowNumbers.length > 0) {
                winPattern = `Line (Row ${row + 1})`;
                break;
            }
        }
        
        // Check full house
        if (!winPattern) {
            const totalNumbers = playerState.card.flat().filter(n => n !== null).length;
            if (marked.length === totalNumbers) {
                winPattern = 'Full House (All Numbers)';
            }
        }
    }
    
    if (winPattern) {
        playerState.hasWon = true;
        playerState.winningPattern = winPattern;
        bingoButton.disabled = false;
    } else {
        bingoButton.disabled = true;
    }
}

// Show winner modal
function showWinnerModal() {
    winnerPattern.textContent = playerState.winningPattern;
    winnerModal.classList.add('active');
}

// Update display from game state
function updateFromGameState(gameState) {
    if (!gameState) return;
    
    // Update mode if changed
    if (gameState.mode !== playerState.mode) {
        playerState.mode = gameState.mode;
        gameModeEl.textContent = `${gameState.mode}-Ball`;
        generateNewCard();
    }
    
    // Update called numbers
    if (gameState.callHistory && gameState.callHistory.length > 0) {
        playerState.calledNumbers = gameState.callHistory;
        
        const lastNumber = gameState.callHistory[gameState.callHistory.length - 1];
        const bingoCalls = gameState.mode === 90 ? bingoCalls90 : bingoCalls75;
        
        currentNumberEl.textContent = lastNumber;
        currentCallingEl.textContent = bingoCalls[lastNumber];
        
        // Mark numbers on card
        markCalledNumbers();
        
        // Update recent numbers
        updateRecentNumbers();
    }
}

// Mark called numbers on card
function markCalledNumbers() {
    const cells = document.querySelectorAll('.card-cell');
    
    cells.forEach(cell => {
        const number = parseInt(cell.dataset.number);
        if (number && playerState.calledNumbers.includes(number)) {
            if (!cell.classList.contains('called')) {
                cell.classList.add('called');
                cell.dataset.marked = 'true';
            }
        }
    });
    
    checkForWin();
}

// Update recent numbers display
function updateRecentNumbers() {
    recentNumbersEl.innerHTML = '';
    
    if (playerState.calledNumbers.length === 0) {
        recentNumbersEl.innerHTML = '<p class="empty-state">No numbers called yet</p>';
        return;
    }
    
    const recent = playerState.calledNumbers.slice(-10).reverse();
    
    recent.forEach((num, index) => {
        const numEl = document.createElement('div');
        numEl.className = 'recent-number';
        if (index === 0) numEl.classList.add('latest');
        numEl.textContent = num;
        recentNumbersEl.appendChild(numEl);
    });
}

// Generate new card
function generateNewCard() {
    playerState.card = generateBingoCard();
    playerState.hasWon = false;
    playerState.winningPattern = null;
    bingoButton.disabled = true;
    renderBingoCard();
    savePlayerCard();
}

// Save player card to localStorage
function savePlayerCard() {
    localStorage.setItem('playerBingoCard', JSON.stringify({
        card: playerState.card,
        mode: playerState.mode
    }));
}

// Load player card from localStorage
function loadPlayerCard() {
    const saved = localStorage.getItem('playerBingoCard');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.mode === playerState.mode) {
                playerState.card = data.card;
                return true;
            }
        } catch (e) {
            console.error('Error loading saved card:', e);
        }
    }
    return false;
}

// Listen for game updates
function listenForUpdates() {
    // Check localStorage for game state updates
    setInterval(() => {
        const gameState = localStorage.getItem('bingoGameState');
        if (gameState) {
            try {
                const state = JSON.parse(gameState);
                updateFromGameState(state);
            } catch (e) {
                console.error('Error parsing game state:', e);
            }
        }
    }, 1000); // Check every second
}

// Initialize
function init() {
    // Load or generate card
    if (!loadPlayerCard()) {
        generateNewCard();
    } else {
        renderBingoCard();
    }
    
    // Load current game state
    const gameState = localStorage.getItem('bingoGameState');
    if (gameState) {
        try {
            updateFromGameState(JSON.parse(gameState));
        } catch (e) {
            console.error('Error loading game state:', e);
        }
    }
    
    // Start listening for updates
    listenForUpdates();
}

// Event listeners
newCardButton.addEventListener('click', generateNewCard);
bingoButton.addEventListener('click', showWinnerModal);
closeWinnerModal.addEventListener('click', () => {
    winnerModal.classList.remove('active');
});

// Initialize on load
init();

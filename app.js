// Initialize Tool
function init() {
    loadDorks();
    loadHistory();
    setInterval(glowEffects, 2000); // Add cyber animations
}

// Load dorks based on selected engine
function loadDorks() {
    const engine = document.getElementById('search-engine').value;
    const dorkList = document.getElementById('dork-list');
    
    dorkList.innerHTML = dorkDatabase[engine].map(dork => `
        <div class="dork-item" onclick="selectDork('${dork.query}')">
            <span class="risk-${dork.risk}">${dork.name}</span>
            <span class="category">${dork.category}</span>
        </div>
    `).join('');
}

// Execute search function
function executeSearch() {
    const query = document.getElementById('dork-query').value;
    const engine = document.getElementById('search-engine').value;
    
    if (!query) {
        showAlert('⚠️ Please select or enter a dork!');
        return;
    }
    
    const searchURLs = {
        google: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        shodan: `https://www.shodan.io/search?query=${encodeURIComponent(query)}`
    };
    
    window.open(searchURLs[engine], '_blank');
    saveToHistory(query, engine);
}

// History Management
function saveToHistory(query, engine) {
    const history = JSON.parse(localStorage.getItem('dorkHistory') || [];
    history.unshift({ query, engine, timestamp: new Date() });
    localStorage.setItem('dorkHistory', JSON.stringify(history.slice(0, 20)));
    loadHistory();
}

// Initialize when page loads
window.onload = init;
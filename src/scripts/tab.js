// Tab navigation
const tabs = document.querySelectorAll('.tab');
const containers = document.querySelectorAll('.projects-container');

// Function to set the active tab
function setActiveTab(tabId) {
    tabs.forEach(t => t.classList.remove('active'));
    containers.forEach(c => c.classList.remove('active'));

    const activeTab = document.querySelector(`.tab[data-target="${tabId}"]`);
    const activeContainer = document.getElementById(tabId);

    if (activeTab && activeContainer) {
        activeTab.classList.add('active');
        activeContainer.classList.add('active');
        // Save the active tab in localStorage
        localStorage.setItem('activeTab', tabId);
    }
}

// Event listener for tab clicks
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        setActiveTab(tab.dataset.target);
    });
});

// Restore active tab on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTabId = localStorage.getItem('activeTab');
    if (savedTabId) {
        setActiveTab(savedTabId);
    } else {
        // Default to the first tab if no tab is saved
        const defaultTabId = tabs[0]?.dataset.target;
        if (defaultTabId) {
            setActiveTab(defaultTabId);
        }
    }
});

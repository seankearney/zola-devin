document.addEventListener('DOMContentLoaded', function() {
    let searchIndex;
    const searchInput = document.querySelector('.search-input');
    const searchOverlay = document.querySelector('.search-overlay');
    const resultsContainer = document.querySelector('.results-container');
    const closeButton = document.querySelector('.close-search');

    // Load the search index
    fetch('/search_index.en.js')
        .then(response => response.text())
        .then(data => {
            // Remove the "window.searchIndex = " part and parse the JSON
            const jsonStr = data.replace('window.searchIndex = ', '').replace(/;$/, '');
            searchIndex = JSON.parse(jsonStr);
            
            // Initialize lunr with the search index
            searchIndex = lunr.Index.load(searchIndex);
        })
        .catch(error => {
            console.error('Error loading search index:', error);
        });

    // Show overlay when focusing on search input
    searchInput.addEventListener('focus', () => {
        searchOverlay.classList.add('active');
        searchOverlay.style.display = 'flex';
    });

    // Close overlay when clicking close button
    closeButton.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchOverlay.style.display = 'none';
        searchInput.value = '';
        resultsContainer.innerHTML = '';
    });

    // Close overlay when clicking outside
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
            searchOverlay.style.display = 'none';
            searchInput.value = '';
            resultsContainer.innerHTML = '';
        }
    });

    // Real-time search as user types
    let debounceTimer;
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = searchInput.value.trim();
            if (query.length < 2) {
                resultsContainer.innerHTML = '';
                return;
            }
            performSearch(query);
        }, 200); // Debounce for better performance
    });

    // Perform search and display results
    function performSearch(query) {
        if (!searchIndex) {
            resultsContainer.innerHTML = '<p>Search index is still loading...</p>';
            return;
        }

        try {
            const results = searchIndex.search(query);
            if (results.length === 0) {
                resultsContainer.innerHTML = '<p class="p-4 text-gray-500">No results found</p>';
                return;
            }

            const resultsHtml = results.map(result => `
                <a href="/posts/${result.ref}" class="block p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <h3 class="text-lg font-semibold text-[var(--text-primary)]">${result.ref}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Score: ${result.score.toFixed(2)}</p>
                </a>
            `).join('');

            resultsContainer.innerHTML = resultsHtml;
        } catch (error) {
            console.error('Search error:', error);
            resultsContainer.innerHTML = '<p class="p-4 text-red-500">An error occurred while searching</p>';
        }
    }
});

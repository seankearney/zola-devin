document.addEventListener('DOMContentLoaded', function() {
    let searchIndex;
    const searchInput = document.querySelector('.search-input');
    const searchOverlay = document.querySelector('.search-overlay');
    const resultsContainer = document.querySelector('.results-container');
    const closeButton = document.querySelector('.close-search');

    // Load the search index
    const searchIndexPath = document.querySelector('meta[name="search-index"]').getAttribute('content');
    fetch(searchIndexPath)
        .then(response => response.text())
        .then(data => {
            // Remove the "window.searchIndex = " part and parse the JSON
            const jsonStr = data.replace('window.searchIndex = ', '').replace(/;$/, '');
            const rawData = JSON.parse(jsonStr);
            
            try {
                // Load the serialized index directly
                searchIndex = lunr.Index.load(rawData);
            } catch (e) {
                console.warn('Version mismatch warning:', e);
                // Continue using the index anyway as lunr is backward compatible
                searchIndex = lunr.Index.load(rawData);
            }
        })
        .catch(error => {
            console.error('Error loading search index:', error);
            resultsContainer.innerHTML = '<p class="p-4 text-red-500">Failed to load search index</p>';
        });

    // Show overlay when focusing on search input
    searchInput.addEventListener('focus', () => {
        searchOverlay.classList.remove('hidden');
        searchOverlay.classList.add('flex');
    });

    // Close overlay when clicking close button
    closeButton.addEventListener('click', () => {
        searchOverlay.classList.add('hidden');
        searchOverlay.classList.remove('flex');
        searchInput.value = '';
        resultsContainer.innerHTML = '';
    });

    // Close overlay when clicking outside
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.add('hidden');
            searchOverlay.classList.remove('flex');
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
                <a href="${result.ref}" class="block p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <h3 class="text-lg font-semibold text-[var(--text-primary)]">${result.ref.split('/').pop()}</h3>
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

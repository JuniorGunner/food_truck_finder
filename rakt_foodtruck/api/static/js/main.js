document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('mapid').setView([37.7749, -122.4194], 13); // San Francisco coordinates
    var markersLayer = new L.LayerGroup().addTo(map); // Create a layer group for markers

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    function clearMarkers() {
        markersLayer.clearLayers(); // Clear all markers from the layer group
    }

    function addMarker(truck) {
        L.marker([truck.latitude, truck.longitude])
            .addTo(markersLayer) // Add to the layer group instead of directly to the map
            .bindPopup(`<b>${truck.applicant}</b><br>${truck.food_items}`);
    }

    function searchTrucks(searchTerm) {
        const url = new URL('/api/foodtrucks/', window.location.origin);
        if (searchTerm) {
            url.searchParams.append('search', searchTerm);
        }

        fetch(url)
            .then(response => response.json())
            .then(trucks => {
                clearMarkers(); // Clear existing markers
                trucks.forEach(addMarker);
            })
            .catch(error => console.error('Error fetching food truck data:', error));
    }

    map.locate({setView: true, maxZoom: 16});

    // Event listener for the search form submission
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search-input').value;
        searchTrucks(searchTerm);
    });

    // Initial call to display all trucks
    fetchAndDisplayTrucks();
});

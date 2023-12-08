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

    function fetchAndDisplayTrucks(lat, lng, distance) {
        const url = new URL('/api/foodtrucks/', window.location.origin);
        if (lat && lng) {
            url.searchParams.append('lat', lat);
            url.searchParams.append('lng', lng);
            if (distance) {
                url.searchParams.append('distance', distance);
            }
        }

        fetch(url)
            .then(response => response.json())
            .then(trucks => {
                clearMarkers(); // Clear existing markers
                trucks.forEach(addMarker);
            })
            .catch(error => console.error('Error fetching food truck data:', error));
    }

    function searchTruckByName(name) {
        const url = new URL('/api/foodtrucks/', window.location.origin);
        url.searchParams.append('search', name);

        fetch(url)
            .then(response => response.json())
            .then(trucks => {
                clearMarkers(); // Clear existing markers
                trucks.forEach(addMarker);
            })
            .catch(error => console.error('Error searching for food truck:', error));
    }

    map.locate({setView: true, maxZoom: 16, watch: true});

    map.on('locationfound', function(e) {
        fetchAndDisplayTrucks(e.latlng.lat, e.latlng.lng, 5);
    });

    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search-input').value;
        searchTruckByName(searchTerm);
    });

    fetchAndDisplayTrucks(); // Fetch all food trucks initially
});

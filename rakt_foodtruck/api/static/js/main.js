document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('mapid').setView([37.7749, -122.4194], 13); // San Francisco coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Update the map based on user's current location
    map.locate({setView: true, maxZoom: 16});
    
    // Fetch and display the food truck markers
    function fetchAndDisplayTrucks() {
        fetch('/api/foodtrucks/') // Update to use the correct URL path for your API
            .then(response => response.json())
            .then(trucks => {
                console.log(trucks); 
                // Add markers for each truck
                trucks.forEach(truck => {
                    L.marker([truck.latitude, truck.longitude])
                        .addTo(map)
                        .bindPopup(`<b>${truck.applicant}</b><br>${truck.food_items}`);
                });
            })
            .catch(error => console.error('Error fetching food truck data:', error));
    }

    // Listen for the map to get the user's location, then fetch and display trucks
    // map.on('locationfound', function(e) {
    //     fetchAndDisplayTrucks();
    // });

    fetchAndDisplayTrucks();
});



document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('mapid').setView([37.7749, -122.4194], 13); // San Francisco coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Function to fetch and display the food truck markers
    function fetchAndDisplayTrucks(lat, lng, distance) {
        // Construct the API URL with query parameters for location and distance
        const url = new URL('/api/foodtrucks/', window.location.origin);
        if (lat && lng) {
            url.searchParams.append('lat', lat);
            url.searchParams.append('lng', lng);
            if (distance) {
                url.searchParams.append('distance', distance);
            }
        }

        // Fetch the food trucks from the API
        fetch(url)
            .then(response => response.json())
            .then(trucks => {
                // Clear existing markers if you store them in a global array or layer group
                // markers.clearLayers();

                // Add markers for each truck
                trucks.forEach(truck => {
                    L.marker([truck.latitude, truck.longitude])
                        .addTo(map)
                        .bindPopup(`<b>${truck.applicant}</b><br>${truck.food_items}`);
                });
            })
            .catch(error => console.error('Error fetching food truck data:', error));
    }

    // Function to search for a food truck by name
    function searchTruckByName(name) {
        // Construct the API URL with a search query parameter
        const url = new URL('/api/foodtrucks/', window.location.origin);
        url.searchParams.append('search', name);

        // Fetch the food trucks from the API
        fetch(url)
            .then(response => response.json())
            .then(trucks => {
                // Clear existing markers and display the searched trucks
                // markers.clearLayers();
                trucks.forEach(truck => {
                    L.marker([truck.latitude, truck.longitude])
                        .addTo(map)
                        .bindPopup(`<b>${truck.applicant}</b><br>${truck.food_items}`);
                });
            })
            .catch(error => console.error('Error searching for food truck:', error));
    }

    // Update the map based on the user's current location
    map.locate({setView: true, maxZoom: 16, watch: true});

    // Event listener for location found
    map.on('locationfound', function(e) {
        // Fetch and display trucks within a 5 km radius of the user's location
        fetchAndDisplayTrucks(e.latlng.lat, e.latlng.lng, 5);
    });

    // Handle the search form submission
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search-input').value;
        searchTruckByName(searchTerm);
    });

    // Initially fetch all food trucks to display
    fetchAndDisplayTrucks();
});




// document.addEventListener('DOMContentLoaded', function() {
//     var map = L.map('mapid').setView([37.7749, -122.4194], 13); // San Francisco coordinates

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '© OpenStreetMap contributors'
//     }).addTo(map);

//     // Update the map based on user's current location
//     map.locate({setView: true, maxZoom: 16});
    
//     // Fetch and display the food truck markers
//     function fetchAndDisplayTrucks() {
//         fetch('/api/foodtrucks/') // Update to use the correct URL path for your API
//             .then(response => response.json())
//             .then(trucks => {
//                 console.log(trucks); 
//                 // Add markers for each truck
//                 trucks.forEach(truck => {
//                     L.marker([truck.latitude, truck.longitude])
//                         .addTo(map)
//                         .bindPopup(`<b>${truck.applicant}</b><br>${truck.food_items}`);
//                 });
//             })
//             .catch(error => console.error('Error fetching food truck data:', error));
//     }

//     // Listen for the map to get the user's location, then fetch and display trucks
//     // map.on('locationfound', function(e) {
//     //     fetchAndDisplayTrucks();
//     // });

//     fetchAndDisplayTrucks();
// });



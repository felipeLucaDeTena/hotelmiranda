// Initialize and add the map

function initMap() {
    // The location of madrid

    const madrid = { lat: 40.4379543, lng: -3.6795367 };
    // The map, centered at madrid
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: madrid,
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });

    const svgMarker = {
        path: "m3.885,14.64105l11.84103,0l3.65897,-12.22295l3.65897,12.22295l11.84103,0l-9.57958,7.55411l3.65916,12.22295l-9.57958,-7.55431l-9.57958,7.55431l3.65916,-12.22295l-9.57958,-7.55411z",
        fillColor: "#d7503e",
        strokeWeight: 0,
        fillOpacity: 1,
        scale: 0.7,
        anchor: new google.maps.Point(15, 30),
    };

    // The marker, positioned at madrid
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const markers = locations.map((location, i) => {
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
            position: location,
            icon: svgMarker,
            map: map,
            label: label,
        });
        marker.addListener("click", () => {
            infoWindow.setContent(label);
            infoWindow.open(map, marker);
        });
        return marker;
    });

    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
    let currentPosition;
    document.querySelector("#btn-geocoding").addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    currentPosition = pos;
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        }
    });

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
    }

    function getDistanceMatrix(position, destinations) {
        const service = new google.maps.DistanceMatrixService();

        service
            .getDistanceMatrix({
                origins: [position],
                destinations: destinations,
                travelMode: "DRIVING",
            })
            .then((response) => {
                console.log(response);
                const sortedOrder = response.rows[0].elements.sort(
                    (a, b) => a.distance.value - b.distance.value
                );

                for (let dist of sortedOrder) {
                    const destinationAddress = document.createElement("li");
                    destinationAddress.innerText =
                        dist.distance.text + " - " + dist.duration.text;
                    document
                        .getElementById("results")
                        .appendChild(destinationAddress);
                }
            });
    }

    const destinations = locations.map((location) => ({
        lat: location.lat,
        lng: location.lng,
    }));

    const geocoder = new google.maps.Geocoder();
    let address;
    function findAddress() {
        address = document.querySelector("#adress-geocoding").value;
        geocoder.geocode({ address: address }, function (results, status) {
            if (status == "OK") {
                map.setCenter(results[0].geometry.location);
                let marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                });
                return results[0].geometry.location;
            } else {
                alert(
                    "Geocode was not successful for the following reason: " +
                        status
                );
            }
        });
    }

    document
        .querySelector("#btn-searchlocation")
        .addEventListener("click", findAddress);

    document
        .querySelector("#btn-nearestHotel")
        .addEventListener("click", () => {
            if (currentPosition) {
                const myPosition = new google.maps.LatLng(
                    currentPosition.lat,
                    currentPosition.lng
                );
                getDistanceMatrix(myPosition, destinations);
            } else if (address) {
                console.log(address);
                getDistanceMatrix(address, destinations);
            } else {
                alert("There is no origin");
            }
        });
}

const locations = [
    { lat: 40.4379543, lng: -3.6795367 },
    { lat: 27.937698158678735, lng: -15.547693123655627 },
    { lat: 39.741019830885946, lng: 3.0424626371986414 },
    { lat: 43.3847970140528, lng: -4.294176276040558 },
    { lat: 36.51517997855664, lng: -4.88594455623221 },
    { lat: 41.390586207645974, lng: 2.1539201788423363 },
    { lat: 41.86102955638386, lng: 3.1174099599339935 },
    { lat: 37.99295778662124, lng: -1.129239388266448 },
    { lat: 28.306409472456963, lng: -16.620198317792315 },
    { lat: 28.732800480604784, lng: -17.91103115013308 },
];

window.initMap = initMap;

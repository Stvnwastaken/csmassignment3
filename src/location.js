import "./index.css";

navigator.geolocation.getCurrentPosition((position) => {
    document.getElementById("location").innerText = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`; // eslint-disable-line no-undef(position.coords.latitude, position.coords.longitude);
});

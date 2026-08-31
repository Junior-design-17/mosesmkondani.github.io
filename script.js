/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

```
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});
```

}

/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

```
link.addEventListener("click", function() {

    if (navMenu) {
        navMenu.classList.remove("active");
    }

});
```

});

/* ================= FOOTER YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

```
yearElement.textContent = new Date().getFullYear();
```

}

/* ================= LEAFLET MAP ================= */

const mapElement = document.getElementById("map");

if (mapElement && typeof L !== "undefined") {

```
/*
    Temporary map centred on Zimbabwe.

    We will replace this later with your actual
    project maps / Web GIS application.
*/

const map = L.map("map").setView(
    [-17.8252, 31.0335],
    6
);


/*
    OpenStreetMap base layer.
*/

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map);


/*
    Temporary marker.

    This is only a placeholder.
    We can replace it with your actual
    project location later.
*/

L.marker([-17.8252, 31.0335])
    .addTo(map)
    .bindPopup(
        "<strong>Moses Mkondani GIS Portfolio</strong><br>" +
        "Temporary interactive map."
    );


/*
    Temporary circle showing an area of interest.
*/

L.circle(
    [-17.8252, 31.0335],
    {
        radius: 50000
    }
).addTo(map);
```

}

/* ================= SCROLL REVEAL ================= */

const sections = document.querySelectorAll(
".section, .featured-project, .dark-section, .webgis-section, .cv-section"
);

const observerOptions = {
threshold: 0.08
};

const sectionObserver = new IntersectionObserver(
function(entries) {

```
    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

},
observerOptions
```

);

sections.forEach(function(section) {

```
sectionObserver.observe(section);
```

});

/* =========================================================
   MOSES MKONDANI
   GEOSPATIAL SCIENTIST PORTFOLIO
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

const navLinks = document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {

            navMenu.classList.remove("active");

        }

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

});


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", function (event) {

    if (!navMenu || !menuToggle) {
        return;
    }


    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedToggle &&
        navMenu.classList.contains("active")
    ) {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


/* =========================================================
   FOOTER YEAR
   ========================================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const sections = document.querySelectorAll(
    ".section, " +
    ".featured-project, " +
    ".dark-section, " +
    ".webgis-section, " +
    ".cv-section"
);


if ("IntersectionObserver" in window) {

    const observerOptions = {
        threshold: 0.08
    };


    const sectionObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        sectionObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            observerOptions
        );


    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });

} else {

    /*
        Fallback for browsers that do not support
        IntersectionObserver.
    */

    sections.forEach(function (section) {

        section.classList.add("visible");

    });

}


/* =========================================================
   LEAFLET MAP
   ========================================================= */

/*
    The current portfolio homepage does not contain
    an element with id="map".

    Therefore no Leaflet map is created here.

    This section is intentionally kept ready for a
    future interactive map if you add:

        <div id="map"></div>

    to the HTML.
*/


const mapElement =
    document.getElementById("map");


if (
    mapElement &&
    typeof L !== "undefined"
) {

    const map = L.map("map").setView(
        [-17.8252, 31.0335],
        6
    );


    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,

            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">' +
                "OpenStreetMap" +
                "</a>"
        }
    ).addTo(map);


    L.marker(
        [-17.8252, 31.0335]
    )
        .addTo(map)
        .bindPopup(
            "<strong>Moses Mkondani GIS Portfolio</strong><br>" +
            "Interactive geospatial map."
        );


    L.circle(
        [-17.8252, 31.0335],
        {
            radius: 50000
        }
    ).addTo(map);

}

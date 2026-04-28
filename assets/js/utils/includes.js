(function () {
    function loadIncludeSync(url, elementId) {
        var target = document.getElementById(elementId);

        if (!target) {
            return;
        }

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);

        try {
            xhr.send(null);
            if (xhr.status === 200 || xhr.status === 0) {
                target.innerHTML = xhr.responseText;
            }
        } catch (error) {
            console.error("No se pudo cargar el include:", url, error);
        }
    }

    function normalizePageName(value) {
        if (!value) {
            return "index";
        }

        var cleanValue = value.split("?")[0].split("#")[0];

        try {
            cleanValue = decodeURIComponent(cleanValue);
        } catch (error) {
            // Keep the raw value if it cannot be decoded.
        }

        cleanValue = cleanValue.replace(/\/+$|^\/+/, "");

        if (!cleanValue) {
            return "index";
        }

        var lastSegment = cleanValue.split("/").pop() || "index";
        return lastSegment.replace(/\.html?$/i, "").toLowerCase();
    }

    function markActiveMenuItem() {
        var page = normalizePageName(window.location.pathname);
        var links = document.querySelectorAll(".main-header .navigation a");

        links.forEach(function (link) {
            var item = link.closest("li");
            if (!item) {
                return;
            }

            var href = normalizePageName(link.getAttribute("href"));
            var isActive = href === page;

            item.classList.toggle("current", isActive);
            item.classList.toggle("current-menu-item", isActive);

            if (isActive) {
                item.classList.add("current");
            }
        });
    }

    loadIncludeSync("components/header.html", "site-header");
    loadIncludeSync("components/footer.html", "site-footer");
    markActiveMenuItem();
})();
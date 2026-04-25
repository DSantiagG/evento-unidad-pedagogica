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

    function markActiveMenuItem() {
        var page = window.location.pathname.split("/").pop() || "index.html";
        var links = document.querySelectorAll(".main-header .navigation a");

        links.forEach(function (link) {
            var item = link.closest("li");
            if (!item) {
                return;
            }

            var href = link.getAttribute("href");
            if (href === page) {
                item.classList.add("current");
            } else {
                item.classList.remove("current");
            }
        });
    }

    loadIncludeSync("components/header.html", "site-header");
    loadIncludeSync("components/footer.html", "site-footer");
    markActiveMenuItem();
})();
(function () {
    var el = document.getElementById('visit-count');
    if (!el) return;

    var host = location.hostname;
    var isLocal = host === 'localhost' || host === '127.0.0.1' || host === '';

    if (isLocal) {
        el.textContent = '—';
        return;
    }

    fetch('https://abacus.jasoncameron.dev/hit/unicauca-coloquio-praxis-2026-homepage/main-counter')
        .then(function (r) { return r.json(); })
        .then(function (d) {
            if (d && typeof d.value === 'number') {
                el.textContent = d.value.toLocaleString('es-CO');
            } else {
                el.textContent = '—';
            }
        })
        .catch(function () { el.textContent = '—'; });
})();
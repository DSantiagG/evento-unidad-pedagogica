(function () {
    var MODAL_CLASS = 'insc-overlay';
    var FOCUSABLE_SELECTORS = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    var conferences = [
        {
            triggerSelector: '.conference-trigger:not(.conference-gabriel-trigger)',
            overlayId: 'conferencia-modal-overlay',
            titleId: 'conferencia-modal-title',
            title: 'Narrativa de experiencia, pedagogía y formación',
            speaker: 'Daniel Hugo Suárez',
            institution: 'Universidad de Buenos Aires',
            summary: 'La conferencia referirá a algunas de las contribuciones de investigación biográfico narrativa al campo de la pedagogía, a la investigación educativa y al desarrollo profesional docente. Se detendrá a analizar y problematizar las potencialidades de las narrativas de experiencia para colaborar a la recuperación y revitalización de la pedagogía como territorio de saber legítimo y público. Particularmente, describirá y narrará experiencias vinculadas con el despliegue territorial de la documentación narrativa de experiencias pedagógicas en el marco de la Red de Formación Docente y Narrativas Pedagógicas del IICE-UBA. Focalizará asimismo en describir ese dispositivo de investigación-formación-acción co-participado, centrado en la escritura, lectura, comentario, conversación y re-escritura de versiones sucesivas de relatos de experiencia.'
        },
        {
            triggerSelector: '.conference-gabriel-trigger',
            overlayId: 'gabriel-modal-overlay',
            titleId: 'gabriel-modal-title',
            title: 'Trayectorias de formación e investigación biográfico narrativa en Colombia desde el movimiento pedagógico a hoy',
            speaker: 'Gabriel Jaime Murillo Arango',
            institution: 'Universidad de Antioquia',
            summary: 'El propósito de la conferencia parte de la exposición de una síntesis de las experiencias más significativas que han balizado los programas de formación de profesores y profesoras, en relación con las áreas de interés más relevantes en el campo de la investigación educativa en Colombia. En esta sobresalen diversas líneas de trabajo que se ocupan de las narrativas de experiencia escolar con base en una visión interdisciplinaria o transdisciplinaria y la hibridación de enfoques de interpretación cualitativa, que comprende las metodologías de historias de vida desarrolladas en las ciencias sociales, las diferentes corrientes de la pedagogía contemporánea, los avances del movimiento pedagógico y de las redes docentes, lo cual configura un campo teórico y experimental suficientemente sólido y habilitado para el intercambio de saberes y experiencias en el escenario internacional. Un balance semejante debe reflejar también el avance de posiciones logradas en relación con la implementación de currículos en las instituciones de formación docente, ya sea a nivel de pregrado o de posgrado, así como la amplia difusión de iniciativas de diverso orden vinculadas con una pedagogía de la memoria, a pesar de que hoy se pretenda reducirla a esta como un fantasma que recorre el mundo poshumano de la posverdad, sin pasado ni futuro.'
        }
    ];

    function buildModal(conference) {
        var institution = conference.institution
            ? '<br><span>' + conference.institution + '</span>'
            : '';
        var modalHtml = [
            '<div id="' + conference.overlayId + '" class="' + MODAL_CLASS + '" role="dialog" aria-modal="true" aria-labelledby="' + conference.titleId + '">',
            '  <div class="insc-modal">',
            '    <button class="insc-close" aria-label="Cerrar">&times;</button>',
            '    <div class="insc-header">',
            '      <div class="insc-icon"><i class="fa-solid fa-microphone"></i></div>',
            '      <h2 class="insc-title" id="' + conference.titleId + '">' + conference.title + '</h2>',
            '      <div class="insc-separator"></div>',
            '    </div>',
            '    <div class="insc-body">',
            '      <p class="insc-form-desc" style="text-align:center;margin-bottom:1rem;">',
            '        <strong>' + conference.speaker + '</strong>' + institution,
            '      </p>',
            '      <p class="insc-form-desc" style="text-align:justify;margin-bottom:0;">',
            '        ' + conference.summary,
            '      </p>',
            '    </div>',
            '  </div>',
            '</div>'
        ].join('\n');

        document.body.insertAdjacentHTML('beforeend', modalHtml);
        bindModal(conference);
    }

    function bindModal(conference) {
        var overlay = document.getElementById(conference.overlayId);
        var trigger = document.querySelector(conference.triggerSelector);
        var closeBtn = overlay.querySelector('.insc-close');

        function openModal() {
            overlay.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            var firstFocusable = overlay.querySelector(FOCUSABLE_SELECTORS);
            if (firstFocusable) {
                setTimeout(function () { firstFocusable.focus(); }, 50);
            }
        }

        function closeModal() {
            overlay.classList.remove('is-open');
            document.body.style.overflow = '';
            trigger.focus();
        }

        trigger.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
                closeModal();
            }
        });
    }

    conferences.forEach(buildModal);
})();
(function () {
    var MODAL_HTML = [
        '<div id="conferencia-modal-overlay" class="insc-overlay" role="dialog" aria-modal="true" aria-labelledby="conferencia-modal-title">',
        '  <div class="insc-modal">',
        '    <button class="insc-close" aria-label="Cerrar">&times;</button>',
        '    <div class="insc-header">',
        '      <div class="insc-icon"><i class="fa-solid fa-microphone"></i></div>',
        '      <h2 class="insc-title" id="conferencia-modal-title">Narrativa de experiencia, pedagogía y formación</h2>',
        '      <div class="insc-separator"></div>',
        '    </div>',
        '    <div class="insc-body">',
        '      <p class="insc-form-desc" style="text-align:center;margin-bottom:1rem;">',
        '        <strong>Daniel Hugo Suárez</strong>',
        '      </p>',
        '      <p class="insc-form-desc" style="text-align:justify;margin-bottom:0;">',
        '        La conferencia referirá a algunas de las contribuciones de investigación biográfico narrativa al campo de la pedagogía, a la investigación educativa y al desarrollo profesional docente. Se detendrá a analizar y problematizar las potencialidades de las narrativas de experiencia para colaborar a la recuperación y revitalización de la pedagogía como territorio de saber legítimo y público. Particularmente, describirá y narrará experiencias vinculadas con el despliegue territorial de la documentación narrativa de experiencias pedagógicas en el marco de la Red de Formación Docente y Narrativas Pedagógicas del IICE-UBA. Focalizará asimismo en describir ese dispositivo de investigación-formación-acción co-participado, centrado en la escritura, lectura, comentario, conversación y re-escritura de versiones sucesivas de relatos de experiencia.',
        '      </p>',
        '    </div>',
        '  </div>',
        '</div>'
    ].join('\n');

    document.body.insertAdjacentHTML('beforeend', MODAL_HTML);

    var overlay = document.getElementById('conferencia-modal-overlay');
    var trigger = document.querySelector('.conference-trigger');
    var closeBtn = overlay.querySelector('.insc-close');
    var focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    function openModal() {
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        var firstFocusable = overlay.querySelector(focusableSelectors);
        if (firstFocusable) {
            setTimeout(function () { firstFocusable.focus(); }, 50);
        }
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
        trigger.focus();
    }

    trigger.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
            closeModal();
        }
    });
})();

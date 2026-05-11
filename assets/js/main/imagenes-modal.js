(function () {
    var MODAL_HTML = [
        '<div id="imagenes-modal-overlay" class="insc-overlay" role="dialog" aria-modal="true" aria-labelledby="imagenes-modal-title">',
        '  <div class="insc-modal">',
        '    <button class="insc-close" aria-label="Cerrar">&times;</button>',
        '    <div class="insc-header">',
        '      <div class="insc-icon"><i class="fa-solid fa-images"></i></div>',
        '      <h2 class="insc-title" id="imagenes-modal-title">Nuestras Im&aacute;genes</h2>',
        '      <div class="insc-separator"></div>',
        '    </div>',
        '    <div class="insc-body">',
        '      <p class="insc-form-desc" style="text-align:justify;">',
        '        Algunas de las im&aacute;genes utilizadas en este sitio web fueron creadas con <strong>inteligencia artificial</strong> como apoyo gráfico y conceptual para la construcción de la identidad visual del evento.',
        '      </p>',
        '      <p class="insc-form-desc" style="text-align:justify;">',
        '        La imagen del <strong>banner principal</strong> representa las narrativas pedag&oacute;gicas e incluye una composici&oacute;n inspirada en el <strong>Claustro de Santo Domingo</strong> y la <strong>Escuela Normal Superior de Popay&aacute;n</strong>.',
        '      </p>',
        '      <p class="insc-form-desc" style="text-align:justify;margin-bottom:0;">',
        '        Asimismo, en la secci&oacute;n de <strong>l&iacute;neas tem&aacute;ticas</strong> se presenta un logo institucional que sintetiza los principios del coloquio a trav&eacute;s de elementos acad&eacute;micos y simb&oacute;licos; en &eacute;l destaca la antorcha <strong>&ldquo;Lumen&rdquo;</strong> de la Universidad del Cauca, tomada del lema institucional <em>&ldquo;Posteris Lumen Moriturus Edat&rdquo;</em>, s&iacute;mbolo del conocimiento y la luz que se transmite a las futuras generaciones.',
        '      </p>',
        '    </div>',
        '  </div>',
        '</div>'
    ].join('\n');

    document.body.insertAdjacentHTML('beforeend', MODAL_HTML);

    var overlay = document.getElementById('imagenes-modal-overlay');
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
    }

    document.querySelectorAll('.imagenes-link').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            openModal();
        });
    });

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

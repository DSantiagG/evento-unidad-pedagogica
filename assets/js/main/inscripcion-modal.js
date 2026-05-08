(function () {
    var MODAL_HTML = [
        '<div id="inscripcion-modal-overlay" class="insc-overlay" role="dialog" aria-modal="true" aria-labelledby="insc-modal-title">',
        '  <div class="insc-modal">',
        '    <button class="insc-close" aria-label="Cerrar">&times;</button>',
        '    <div class="insc-header">',
        '      <div class="insc-icon"><i class="fa-solid fa-pen-to-square"></i></div>',
        '      <h2 class="insc-title" id="insc-modal-title">Inscripción Asistentes</h2>',
        '      <div class="insc-separator"></div>',
        '    </div>',
        '    <div class="insc-body">',
        '      <div class="insc-form-item">',
        '        <div class="insc-form-number">1</div>',
        '        <div class="insc-form-content">',
        '          <h3 class="insc-form-title">Inscripción formal &mdash; Universidad del Cauca</h3>',
        '          <p class="insc-form-desc">Para recibir <strong>certificado de participación</strong>, debes inscribirte a través del formulario oficial de la Universidad del Cauca. En el primer desplegable, busca y selecciona el nombre del evento.</p>',
        '          <a href="https://bit.ly/InscripcionesCECAV" target="_blank" rel="noopener" class="insc-link">',
        '            <i class="fa-solid fa-arrow-up-right-from-square"></i> Ir al formulario de inscripción',
        '          </a>',
        '        </div>',
        '      </div>',
        '      <div class="insc-divider"></div>',
        '      <div class="insc-form-item">',
        '        <div class="insc-form-number">2</div>',
        '        <div class="insc-form-content">',
        '          <h3 class="insc-form-title">Formulario de res&uacute;menes y modalidades</h3>',
        '          <p class="insc-form-desc">Este formulario tiene como objetivo <strong>formalizar el proceso de recepci&oacute;n de res&uacute;menes</strong> e identificaci&oacute;n de modalidades de participaci&oacute;n. <em>(Los criterios para la presentaci&oacute;n de p&oacute;sters y res&uacute;menes se encuentran en la p&aacute;gina de <strong>Informaci&oacute;n</strong>, en la secci&oacute;n de <a href="informacion.html#circulares" class="insc-inline-link"><strong>Circulares</strong></a>.)</em></p>',
        '          <a href="https://docs.google.com/forms/d/e/1FAIpQLSebdECuuT31wJ1FPKfbcOzBQSEr4EGmK0FMV4j98wl7fa5Rrg/viewform?usp=dialog" target="_blank" rel="noopener" class="insc-link">',
        '            <i class="fa-solid fa-arrow-up-right-from-square"></i> Ir al formulario de res&uacute;menes',
        '          </a>',
        '        </div>',
        '      </div>',
        '      <div class="insc-note">',
        '        <i class="fa-solid fa-circle-info"></i>',
        '        <span>Es necesario diligenciar <strong>los dos formularios</strong> para formalizar tu participaci&oacute;n en el evento.</span>',
        '      </div>',
        '      <div class="insc-note">',
        '        <i class="fa-solid fa-calendar-days"></i>',
        '        <span>Recuerda que la <strong>fecha l&iacute;mite de inscripci&oacute;n</strong> es el <strong>3 de noviembre de 2026</strong>.</span>',
        '      </div>',
        '    </div>',
        '  </div>',
        '</div>'
    ].join('\n');

    document.body.insertAdjacentHTML('beforeend', MODAL_HTML);

    var overlay = document.getElementById('inscripcion-modal-overlay');
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

    document.querySelectorAll('.whatsappLink').forEach(function (btn) {
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

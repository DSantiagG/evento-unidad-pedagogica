(function () {
    'use strict';

    /*
     * Agrega las fotografías en este arreglo cuando estén disponibles.
     * Las rutas son relativas a informacion.html. Ejemplo:
     * { src: 'assets/images/galeria/foto-01.webp', alt: 'Registro de la apertura' }
     */
    var galleryImages = [
        { src: 'assets/images/galeria/photo_1.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_2.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_3.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_4.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_5.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_6.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_7.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_8.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_9.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_10.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_11.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_12.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_13.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_14.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_15.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_16.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_17.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_18.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_19.jpg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_20.jpeg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_21.jpeg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_22.jpeg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_23.jpeg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_24.jpeg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_25.jpeg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_26.jpeg', alt: 'Descripción de la fotografía' },
        { src: 'assets/images/galeria/photo_27.jpeg', alt: 'Descripción de la fotografía' },
    ];

    var gallery = document.getElementById('photo-gallery');
    if (!gallery) {
        return;
    }

    var currentIndex = 0;
    var autoplayInterval = 5000;

    function renderEmptyState() {
        gallery.innerHTML = [
            '<div class="gallery-empty-state">',
            '  <div class="gallery-icon" aria-hidden="true"><i class="fa fa-camera fa-2x"></i></div>',
            '  <p>Próximamente se publicará la galería fotográfica oficial del evento.</p>',
            '</div>'
        ].join('');
    }

    function renderGallery() {
        gallery.classList.toggle('gallery-many-images', galleryImages.length > 20);
        gallery.innerHTML = [
            '<div class="gallery-carousel" role="region" aria-label="Carrusel de fotografías">',
            '  <div class="gallery-stage">',
            '    <img class="gallery-image" src="" alt="" loading="eager">',
            '    <button class="gallery-control gallery-control-prev" type="button" aria-label="Fotografía anterior">',
            '      <i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '    </button>',
            '    <button class="gallery-control gallery-control-next" type="button" aria-label="Fotografía siguiente">',
            '      <i class="fa fa-chevron-right" aria-hidden="true"></i>',
            '    </button>',
            '  </div>',
            '  <div class="gallery-toolbar">',
            '    <span class="gallery-counter" aria-live="polite"></span>',
            '    <button class="gallery-autoplay" type="button" aria-pressed="false">',
            '      <i class="fa fa-pause" aria-hidden="true"></i> Pausar',
            '    </button>',
            '    <div class="gallery-dots" role="tablist" aria-label="Seleccionar fotografía"></div>',
            '  </div>',
            '  <div class="gallery-thumbnails" aria-label="Miniaturas de fotografías"></div>',
            '</div>'
        ].join('');

        var image = gallery.querySelector('.gallery-image');
        var counter = gallery.querySelector('.gallery-counter');
        var autoplayButton = gallery.querySelector('.gallery-autoplay');
        var dots = gallery.querySelector('.gallery-dots');
        var thumbnails = gallery.querySelector('.gallery-thumbnails');
        var autoplayTimer;
        var isPaused = false;

        galleryImages.forEach(function (photo, index) {
            var dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'gallery-dot';
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', 'Ver fotografía ' + (index + 1));
            dot.addEventListener('click', function () {
                showPhoto(index);
            });
            dots.appendChild(dot);

            var thumbnail = document.createElement('button');
            thumbnail.type = 'button';
            thumbnail.className = 'gallery-thumbnail';
            thumbnail.setAttribute('aria-label', 'Ver fotografía ' + (index + 1));
            thumbnail.innerHTML = '<img src="' + photo.src + '" alt="" loading="lazy">';
            thumbnail.addEventListener('click', function () {
                showPhoto(index);
            });
            thumbnails.appendChild(thumbnail);
        });

        gallery.querySelector('.gallery-control-prev').addEventListener('click', function () {
            showPhoto(currentIndex - 1);
        });

        gallery.querySelector('.gallery-control-next').addEventListener('click', function () {
            showPhoto(currentIndex + 1);
        });

        function updateAutoplayButton() {
            autoplayButton.setAttribute('aria-pressed', String(isPaused));
            autoplayButton.innerHTML = isPaused
                ? '<i class="fa fa-play" aria-hidden="true"></i> Reanudar'
                : '<i class="fa fa-pause" aria-hidden="true"></i> Pausar';
        }

        function stopAutoplay() {
            window.clearInterval(autoplayTimer);
            autoplayTimer = null;
        }

        function startAutoplay() {
            stopAutoplay();
            if (!isPaused) {
                autoplayTimer = window.setInterval(function () {
                    showPhoto(currentIndex + 1);
                }, autoplayInterval);
            }
        }

        autoplayButton.addEventListener('click', function () {
            isPaused = !isPaused;
            updateAutoplayButton();
            startAutoplay();
        });

        gallery.addEventListener('mouseenter', stopAutoplay);
        gallery.addEventListener('mouseleave', startAutoplay);
        gallery.addEventListener('focusin', stopAutoplay);
        gallery.addEventListener('focusout', function (event) {
            if (!gallery.contains(event.relatedTarget)) {
                startAutoplay();
            }
        });

        gallery.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft') {
                showPhoto(currentIndex - 1);
            } else if (event.key === 'ArrowRight') {
                showPhoto(currentIndex + 1);
            }
        });

        function showPhoto(index) {
            currentIndex = (index + galleryImages.length) % galleryImages.length;
            var photo = galleryImages[currentIndex];
            image.src = photo.src;
            image.alt = photo.alt;
            counter.textContent = (currentIndex + 1) + ' / ' + galleryImages.length;

            gallery.querySelectorAll('.gallery-dot').forEach(function (dot, dotIndex) {
                var isActive = dotIndex === currentIndex;
                dot.classList.toggle('is-active', isActive);
                dot.setAttribute('aria-selected', String(isActive));
            });

            gallery.querySelectorAll('.gallery-thumbnail').forEach(function (thumbnail, thumbnailIndex) {
                thumbnail.classList.toggle('is-active', thumbnailIndex === currentIndex);
            });
        }

        showPhoto(0);
        updateAutoplayButton();
        startAutoplay();
    }

    if (galleryImages.length === 0) {
        renderEmptyState();
    } else {
        renderGallery();
    }
})();
